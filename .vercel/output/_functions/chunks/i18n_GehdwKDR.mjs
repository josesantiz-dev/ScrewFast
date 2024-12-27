import { t as toRoutingStrategy, a as toFallbackType, g as getLocaleRelativeUrl } from './utils_CMzo3Y6T.mjs';

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { base: "/", format: "directory", site: "https://screwfast.uk", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: [{ codes: ["en"], path: "en" }, { codes: ["de"], path: "de" }, { codes: ["es"], path: "es" }, { codes: ["fa"], path: "fa" }, { codes: ["fr"], path: "fr" }, { codes: ["ja"], path: "ja" }, { codes: ["zh-CN"], path: "zh-cn" }], routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false, fallbackType: "redirect" } }, isBuild: true };
const { trailingSlash, format, site, i18n, isBuild } = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, fallback, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
toFallbackType(routing);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  domains,
  ...options
});
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;
if (i18n?.routing === "manual") ;

export { getRelativeLocaleUrl as g };
