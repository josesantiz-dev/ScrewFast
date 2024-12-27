import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_DhNoaUZN.mjs';
import { $ as $$Image } from './_astro_assets_SX68lusP.mjs';
/* empty css                                  */
import { a as $$Card, $ as $$CardGrid } from './Code_4XdHCfE6.mjs';
import 'clsx';

const frontmatter = {
  "title": "ScrewFast docs",
  "head": [{
    "tag": "title",
    "content": "ScrewFast docs"
  }],
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "template": "splash",
  "editUrl": false,
  "lastUpdated": false,
  "next": false,
  "hero": {
    "title": "Dokumentationshub",
    "tagline": "Ihr zentraler Anlaufpunkt für vereinfachte Werkzeuganleitungen, detaillierte Service-Dokumentationen und Projektunterstützung.",
    "image": {
      "alt": "A ScrewFast's Logo",
      "dark": "../../../images/starlight/screwfast_hero.svg",
      "light": "../../../images/starlight/screwfast_hero_dark.svg"
    },
    "actions": [{
      "text": "Get started",
      "icon": "right-arrow",
      "variant": "primary",
      "link": "/de/guides/getting-started/"
    }, {
      "text": "View on GitHub",
      "icon": "external",
      "variant": "minimal",
      "link": "https://github.com/mearashadowfax/ScrewFast"
    }]
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  return createVNode($$CardGrid, {
    stagger: true,
    children: [createVNode($$Card, {
      title: "Schnellstartanleitungen",
      icon: "document",
      "set:html": "<p>Starten Sie schnell und einfach mit unseren klaren und prägnanten Anleitungen, die für neue Benutzer und erfahrene Experten gleichermaßen geeignet sind.</p>"
    }), createVNode($$Card, {
      title: "Werkzeuge & Ausrüstung",
      icon: "seti:eslint",
      "set:html": "<p>Entdecken Sie die vollständige Palette hochwertiger Werkzeuge und Ausrüstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps.</p>"
    }), createVNode($$Card, {
      title: "Bauleistungen",
      icon: "seti:puppet",
      "set:html": "<p>Entdecken Sie die vollständige Palette hochwertiger Werkzeuge und Ausrüstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps.</p>"
    }), createVNode($$Card, {
      title: "Erweiterte Themen",
      icon: "seti:terraform",
      "set:html": "<p>Entdecken Sie die vollständige Palette hochwertiger Werkzeuge und Ausrüstungen von ScrewFast. Jeder Unterabschnitt bietet detaillierte Spezifikationen, Gebrauchsanweisungen und Wartungstipps.</p>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const url = "src/content/docs/de/welcome-to-docs.mdx";
const file = "/Users/josesantiz-dev/Desktop/ScrewFast/src/content/docs/de/welcome-to-docs.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/josesantiz-dev/Desktop/ScrewFast/src/content/docs/de/welcome-to-docs.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
