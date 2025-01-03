/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DhNoaUZN.mjs';
import 'kleur/colors';
import { a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DA4fX6IF.mjs';
import { $ as $$PrimaryCTA } from '../chunks/PrimaryCTA_B08VtUZT.mjs';
import { $ as $$CardSmall, a as $$CardWide, b as $$FeaturesStatsAlt, c as $$TestimonialsSectionAlt } from '../chunks/TestimonialsSectionAlt_DswEGmS1.mjs';
import { g as getCollection } from '../chunks/_astro_content_wpfX4p03.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products", ({ id }) => {
    return id.startsWith("en/");
  })).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Products";
  const subTitle = "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts. Each of our products is crafted with precision and built to last, ensuring you have the right tool for every job.";
  const testimonials = [
    // First testimonial data
    {
      content: ` "Since switching to ScrewFast's hardware tools, the efficiency on our construction sites has skyrocketed. The durability of the hex bolts and precision of the machine screws are simply unmatched. It's refreshing to work with a company that truly understands the daily demands of the industry." `,
      author: "Jason Clark",
      role: "Site Foreman | TopBuild",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Second testimonial data
    {
      content: ` "As an interior designer, I'm always looking for high-quality materials and tools that help bring my visions to life. ScrewFast's mixed screws assortment has been a game-changer for my projects, providing the perfect blend of quality and variety. The outstanding customer support was just the cherry on top!" `,
      author: "Maria Gonzalez",
      role: "Interior Designer | Creative Spaces",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    },
    // Third testimonial data
    {
      content: ` "I\u2019ve been a professional carpenter for over 15 years, and I can sincerely say that ScrewFast\u2019s tap bolts and nuts are some of the best I've used. They grip like no other, and I have full confidence in every joint and fixture. Plus, the service is impeccable \u2013 they truly care about my project's success." `,
      author: "Richard Kim",
      role: "Master Carpenter | WoodWright",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Image Description"
    }
  ];
  const pageTitle = `Products | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/products",
    "url": "https://screwfast.uk/products",
    "name": "Hardware Tools | ScrewFast",
    "description": "Explore the durability and precision of ScrewFast tools, designed for both professionals and enthusiasts.",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://screwfast.uk",
      "name": "ScrewFast",
      "description": "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    "inLanguage": "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Customer Stories", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Why Choose ScrewFast?", "subTitle": "Transform your ideas into tangible results with ScrewFast tools. Whether you're starting with a sketch on a napkin or diving into a comprehensive construction project, our tools are engineered to help you build with confidence.", "benefits": [
    "Robust and reliable tools for long-lasting performance.",
    "Innovative solutions tailored to modern construction needs.",
    "Customer support dedicated to your project's success."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "What Our Customers Say", "testimonials": testimonials })} ` })}`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/pages/products/index.astro", void 0);

const $$file = "/Users/josesantiz-dev/Desktop/ScrewFast/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };