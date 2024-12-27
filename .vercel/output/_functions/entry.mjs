import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_2TeEZ_yI.mjs';
import { manifest } from './manifest_1q61fGzj.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/favicon.ico.astro.mjs');
const _page6 = () => import('./pages/fr/blog.astro.mjs');
const _page7 = () => import('./pages/fr/blog/_---slug_.astro.mjs');
const _page8 = () => import('./pages/fr/contact.astro.mjs');
const _page9 = () => import('./pages/fr/insights/_---slug_.astro.mjs');
const _page10 = () => import('./pages/fr/products.astro.mjs');
const _page11 = () => import('./pages/fr/products/_---slug_.astro.mjs');
const _page12 = () => import('./pages/fr/services.astro.mjs');
const _page13 = () => import('./pages/fr.astro.mjs');
const _page14 = () => import('./pages/insights/_---slug_.astro.mjs');
const _page15 = () => import('./pages/manifest.json.astro.mjs');
const _page16 = () => import('./pages/products.astro.mjs');
const _page17 = () => import('./pages/products/_---slug_.astro.mjs');
const _page18 = () => import('./pages/register.astro.mjs');
const _page19 = () => import('./pages/robots.txt.astro.mjs');
const _page20 = () => import('./pages/services.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const _page22 = () => import('./pages/_---slug_.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/favicon.ico.ts", _page5],
    ["src/pages/fr/blog/index.astro", _page6],
    ["src/pages/fr/blog/[...slug].astro", _page7],
    ["src/pages/fr/contact.astro", _page8],
    ["src/pages/fr/insights/[...slug].astro", _page9],
    ["src/pages/fr/products/index.astro", _page10],
    ["src/pages/fr/products/[...slug].astro", _page11],
    ["src/pages/fr/services.astro", _page12],
    ["src/pages/fr/index.astro", _page13],
    ["src/pages/insights/[...slug].astro", _page14],
    ["src/pages/manifest.json.ts", _page15],
    ["src/pages/products/index.astro", _page16],
    ["src/pages/products/[...slug].astro", _page17],
    ["src/pages/register.astro", _page18],
    ["src/pages/robots.txt.ts", _page19],
    ["src/pages/services.astro", _page20],
    ["src/pages/index.astro", _page21],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page22]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
