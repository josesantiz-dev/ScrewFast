import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_BJKSsTR4.mjs';
import { a as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_DhNoaUZN.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://screwfast.uk", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_Nv7CWjsu.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_DwKQN9q1.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_CQhM2wgj.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_Cm88pVWx.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_DnOhrhLG.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_C1QA1ATe.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_Cwh8vCof.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_BzJl5Mpn.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_DH8JiQwy.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_CIZZvxVs.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_CWADoFCM.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_MJGcjTdX.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_B5Uk2-Qy.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_e1_5SAYu.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_B8PxMXKu.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CtoCqE8C.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_BPaJAbDn.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_CpxQcYyn.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_C9F7DZqn.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CHSUISz6.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DPJgquPg.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_DL8d_g7v.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_B9EYIUr4.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DzP78t29.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_Svkcxqla.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_B99_w8rq.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_k8dVEDDe.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_nk8gRKWW.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_Bk9vuGlz.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_CaR7PfZa.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BH8O51Cf.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_DfQXRPRl.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_zMmh4BUr.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_BbK39F-y.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_Tt6H-qb8.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_D92yK-vm.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_BG_YQGEi.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CcYqNnkY.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_inK6qZS8.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_B-k0S7Kr.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_ssSttipX.mjs'),"/src/content/insights/en/insight-1.md": () => import('./insight-1_D6ICeJ_Y.mjs'),"/src/content/insights/en/insight-2.md": () => import('./insight-2_Qv9dWCKC.mjs'),"/src/content/insights/en/insight-3.md": () => import('./insight-3_B6Ly8eNA.mjs'),"/src/content/insights/fr/insight-1.md": () => import('./insight-1_DIMg7dtS.mjs'),"/src/content/insights/fr/insight-2.md": () => import('./insight-2_CA4AbDi0.mjs'),"/src/content/insights/fr/insight-3.md": () => import('./insight-3_Dq5ZJOJ4.mjs'),"/src/content/products/en/item-a765.md": () => import('./item-a765_CsJlp7GJ.mjs'),"/src/content/products/en/item-b203.md": () => import('./item-b203_Dl0JyOIA.mjs'),"/src/content/products/en/item-f303.md": () => import('./item-f303_Bu_kWw6T.mjs'),"/src/content/products/en/item-t845.md": () => import('./item-t845_DDvMtR8H.mjs'),"/src/content/products/fr/item-a765.md": () => import('./item-a765_DuMJDEJ_.mjs'),"/src/content/products/fr/item-b203.md": () => import('./item-b203_BBPlqhDx.mjs'),"/src/content/products/fr/item-f303.md": () => import('./item-f303_C90-rPoN.mjs'),"/src/content/products/fr/item-t845.md": () => import('./item-t845_BIikw1iq.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}},"blog":{"type":"content","entries":{"en/post-1":"/src/content/blog/en/post-1.md","en/post-2":"/src/content/blog/en/post-2.md","en/post-3":"/src/content/blog/en/post-3.md","fr/post-1":"/src/content/blog/fr/post-1.md","fr/post-2":"/src/content/blog/fr/post-2.md","fr/post-3":"/src/content/blog/fr/post-3.md"}},"insights":{"type":"content","entries":{"en/insight-1":"/src/content/insights/en/insight-1.md","en/insight-3":"/src/content/insights/en/insight-3.md","en/insight-2":"/src/content/insights/en/insight-2.md","fr/insight-1":"/src/content/insights/fr/insight-1.md","fr/insight-2":"/src/content/insights/fr/insight-2.md","fr/insight-3":"/src/content/insights/fr/insight-3.md"}},"products":{"type":"content","entries":{"en/item-a765":"/src/content/products/en/item-a765.md","en/item-b203":"/src/content/products/en/item-b203.md","en/item-f303":"/src/content/products/en/item-f303.md","en/item-t845":"/src/content/products/en/item-t845.md","fr/item-a765":"/src/content/products/fr/item-a765.md","fr/item-b203":"/src/content/products/fr/item-b203.md","fr/item-f303":"/src/content/products/fr/item-f303.md","fr/item-t845":"/src/content/products/fr/item-t845.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_BdQf2fwz.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_rgvaPO99.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_B1J9IkIW.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_CgWgFygA.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_Boi-qtk9.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_CsZ2WFGE.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_CkVZqLuH.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_B5ROq8AN.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_BXodDEWU.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_Cva5Chgg.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_NZpVYkaB.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CS-Pa0N9.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_Rzpi8qSX.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_BB7cBbzp.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_CUmX1wB8.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_RJJp7GKW.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_BDrDf-IA.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_RVzlFKD-.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_BRm_P2Lw.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_dZe4AiOp.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_GvY1EWbW.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_BRQmgzdi.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_ETtL1eOj.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Dm40jo4_.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_B_woY_7a.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_BWfks3J7.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_D4pQt4QS.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DCDj7bvm.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_Qd5X7tWD.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_CpzOJXyj.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CHy5-Qz9.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_D4_8obxi.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_aRqOFu4i.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_BhXebVed.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_PmryEcaK.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_DzmOPXTQ.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_JBSVcW_O.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CO-f_hRi.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_OpYDSL3A.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_RgsiuCye.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_DWt443p8.mjs'),"/src/content/insights/en/insight-1.md": () => import('./insight-1_Bmapr89a.mjs'),"/src/content/insights/en/insight-2.md": () => import('./insight-2_0cKchKL9.mjs'),"/src/content/insights/en/insight-3.md": () => import('./insight-3_Cs-8O4NL.mjs'),"/src/content/insights/fr/insight-1.md": () => import('./insight-1_BRgPnvEu.mjs'),"/src/content/insights/fr/insight-2.md": () => import('./insight-2_BbogU1Zz.mjs'),"/src/content/insights/fr/insight-3.md": () => import('./insight-3_4hIaDd3Q.mjs'),"/src/content/products/en/item-a765.md": () => import('./item-a765_D6JFmxyk.mjs'),"/src/content/products/en/item-b203.md": () => import('./item-b203_Ds-v8rX1.mjs'),"/src/content/products/en/item-f303.md": () => import('./item-f303_BUSxtupp.mjs'),"/src/content/products/en/item-t845.md": () => import('./item-t845_rD9UguSA.mjs'),"/src/content/products/fr/item-a765.md": () => import('./item-a765_CgcPKw0u.mjs'),"/src/content/products/fr/item-b203.md": () => import('./item-b203_CGT5p4vq.mjs'),"/src/content/products/fr/item-f303.md": () => import('./item-f303_DaNmRCoF.mjs'),"/src/content/products/fr/item-t845.md": () => import('./item-t845_B4j63i5i.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
