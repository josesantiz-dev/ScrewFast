import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, f as renderSlot } from './astro/server_DhNoaUZN.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_SX68lusP.mjs';
import { $ as $$PrimaryCTA } from './PrimaryCTA_B08VtUZT.mjs';
import 'clsx';
import { $ as $$Icon } from './MainLayout_DA4fX6IF.mjs';

const $$Astro$i = createAstro("https://screwfast.uk");
const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$SecondaryCTA;
  const { title, url } = Astro2.props;
  const baseClasses = "inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-neutral-600 shadow-sm outline-none ring-zinc-500 focus-visible:ring transition duration-300";
  const borderClasses = "border border-neutral-200";
  const bgColorClasses = "bg-neutral-300";
  const hoverClasses = "hover:bg-neutral-400/50 hover:text-neutral-600 active:text-neutral-700";
  const disableClasses = "disabled:pointer-events-none disabled:opacity-50";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "ring-zinc-500";
  const darkClasses = "dark:border-neutral-700 dark:bg-zinc-700 dark:text-neutral-300 dark:ring-zinc-200 dark:hover:bg-zinc-600 dark:focus:outline-none";
  return renderTemplate`<!-- Styled hyperlink -->${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${disableClasses} ${fontSizeClasses} ${ringClasses} ${darkClasses}`, "class")}${addAttribute(url, "href")}> ${title} </a>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/buttons/SecondaryCTA.astro", void 0);

const $$Astro$h = createAstro("https://screwfast.uk");
const $$Avatar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Avatar;
  const { src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "inline-block h-8 w-8 rounded-full ring-2 ring-neutral-50 dark:ring-zinc-800", "src": src, "alt": alt, "inferSize": true, "loading": "eager" })}`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/avatars/Avatar.astro", void 0);

const $$FullStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor"></path> </svg>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/stars/FullStar.astro", void 0);

const $$HalfStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="h-4 w-4 text-yellow-500 dark:text-yellow-400" width="51" height="51" viewBox="0 0 51 51" fill="none"> <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent"></path> <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor"></path> </svg>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/stars/HalfStar.astro", void 0);

const $$Astro$g = createAstro("https://screwfast.uk");
const $$ReviewComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ReviewComponent;
  const { avatars, starCount = 0, rating, reviews } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 lg:mt-10"> <div class="py-5"> <div class="text-center sm:flex sm:items-center sm:text-start"> <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5"> <!-- Avatar Group --> <div class="flex justify-center -space-x-3"> ${avatars?.map((src) => renderTemplate`${renderComponent($$result, "Avatar", $$Avatar, { "src": src, "alt": "Avatar Description" })}`)} <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-white dark:bg-zinc-900 dark:ring-zinc-800"> <span class="text-xs font-medium uppercase leading-none text-white">7k+</span> </span> </div> </div> <div class="mx-auto h-px w-32 border-t border-neutral-400 dark:border-neutral-500 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0"></div> <!-- Review Ratings --> <div class="flex flex-col items-center sm:items-start"> <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0"> <div class="flex space-x-1"> <!-- Your star ratings --> ${Array(starCount).fill(0).map((_, i) => renderTemplate`${renderComponent($$result, "FullStar", $$FullStar, { "key": i })}`)} <!-- Adding additional half-star --> ${renderComponent($$result, "HalfStar", $$HalfStar, {})} </div> <p class="text-neutral-800 dark:text-neutral-200"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(rating)}` })} </p> </div> <div class="text-sm text-neutral-800 dark:text-neutral-200 sm:ps-5"> <p> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(reviews)}` })} </p> </div> </div> </div> </div> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/blocks/ReviewComponent.astro", void 0);

const $$Astro$f = createAstro("https://screwfast.uk");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const {
    title,
    subTitle,
    primaryBtn,
    primaryBtnURL,
    secondaryBtn,
    secondaryBtnURL,
    withReview,
    avatars,
    starCount,
    rating,
    reviews,
    src,
    alt
  } = Astro2.props;
  return renderTemplate`<!-- Defining a grid container that holds all the content -->${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <!-- Title and description --> <div> <!-- Each h1 and p tag renders a portion of the title and subTitle defined above --> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h1> ${subTitle && renderTemplate`<p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-700 dark:text-neutral-400 lg:w-4/5"> ${subTitle} </p>`} <!-- Action Button Section: This section includes two CTAs with their own styles and URL --> <div class="mt-7 grid w-full gap-3 sm:inline-flex"> ${primaryBtn && renderTemplate`${renderComponent($$result, "PrimaryCTA", $$PrimaryCTA, { "title": primaryBtn, "url": primaryBtnURL })}`} ${secondaryBtn && renderTemplate`${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": secondaryBtn, "url": secondaryBtnURL })}`} </div> <!-- Review Section: This section presents avatars, review ratings and the number of reviews --> ${withReview ? renderTemplate`${renderComponent($$result, "ReviewComponent", $$ReviewComponent, { "avatars": avatars, "starCount": starCount, "rating": rating, "reviews": reviews })}` : ""} </div> <!-- Hero Image Section --> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full scale-110 object-cover object-center", "draggable": "false", "loading": "eager", "format": "avif" })}`} </div> </div> </section>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/landing/HeroSection.astro", void 0);

const $$Astro$e = createAstro("https://screwfast.uk");
const $$GithubBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-neutral-700 ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:shadow-2xl hover:shadow-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github" })} ${title} </a>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/buttons/GithubBtn.astro", void 0);

const $$Astro$d = createAstro("https://screwfast.uk");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = Astro2.currentLocale === "fr" ? "Continuer avec Github" : "Continue with Github";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro$c = createAstro("https://screwfast.uk");
const $$ClientsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ClientsSection;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Title and description --> <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3"> <h2 class="text-balance text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-200 sm:text-3xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty leading-tight text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <div class="flex flex-col items-center justify-center gap-y-2 sm:flex-row sm:gap-x-12 sm:gap-y-0 lg:gap-x-24"> <!-- Clients Group SVGs --> <!-- First --> <svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 1033.583 318.543"><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title> <path d="M-26.912 496.696c-2.812-5.011-7.55-7.83-13.31-7.83-7.824 0-15.236 5.018-15.236 13.383 0 7.21 5.357 10.577 11.255 13.108l3.563 1.514c4.47 1.853 8.926 4.254 8.926 9.807 0 5.422-3.974 10.094-9.54 10.094-5.559 0-10.087-4.124-10.015-9.814l-6.525 1.37c1.102 8.307 7.62 14.486 15.999 14.486 9.259 0 16.534-6.727 16.534-16.136 0-8.64-5.488-12.691-12.835-15.568l-3.7-1.442c-3.23-1.24-7.21-3.36-7.21-7.42 0-4.521 4.529-7.34 8.646-7.34 3.915 0 6.382 1.651 8.3 4.88l5.148-3.092zm50.62-7.83c-14.825 0-27.104 12.15-27.104 26.974 0 15.373 12.142 26.974 27.104 26.974 14.955 0 27.11-11.601 27.11-26.974 0-14.824-12.286-26.974-27.11-26.974zm0 47.906c-11.184 0-20.651-9.128-20.651-20.932 0-11.392 8.508-20.932 20.65-20.932 12.15 0 20.659 9.54 20.659 20.932 0 11.804-9.474 20.932-20.658 20.932zm86.722-44.402c-3.909-2.401-8.515-3.504-13.043-3.504-15.236 0-27.516 11.947-27.516 27.248 0 14.962 12.221 26.7 26.968 26.7 4.528 0 9.61-1.312 13.59-3.648v-7.614c-3.849 3.432-8.716 5.357-13.793 5.357-11.53 0-20.318-9.677-20.318-21.004 0-11.457 8.854-21.134 20.455-21.134 4.868 0 9.944 1.788 13.657 5.083v-7.484zm35.782-2.401h-6.453v51.742h6.453V489.97zm32.227 51.742h27.789v-5.898h-21.343V516.25h20.723v-5.898h-20.723v-14.486h21.343v-5.898h-27.79v51.742zm68.113-45.844h12.286v-5.898h-31.02v5.898h12.287v45.844h6.447v-45.844zm61.38 32.873 5.898 12.971h6.935l-24.703-53.934-24.703 53.934h6.93l5.898-12.971h23.744zm-2.683-5.899h-18.387l9.2-20.932 9.187 20.932zm62.978-26.145c-2.805-5.011-7.549-7.83-13.31-7.83-7.817 0-15.23 5.018-15.23 13.383 0 7.21 5.351 10.577 11.25 13.108l3.569 1.514c4.463 1.853 8.92 4.254 8.92 9.807 0 5.422-3.981 10.094-9.54 10.094-5.56 0-10.088-4.124-10.016-9.814l-6.518 1.37c1.096 8.307 7.614 14.486 15.986 14.486 9.265 0 16.54-6.727 16.54-16.136 0-8.64-5.487-12.691-12.834-15.568l-3.706-1.442c-3.224-1.24-7.204-3.36-7.204-7.42 0-4.521 4.528-7.34 8.646-7.34 3.915 0 6.38 1.651 8.306 4.88l5.141-3.092zm65.425 45.015h27.783v-5.898h-21.343V516.25h20.73v-5.898h-20.73v-14.486h21.343v-5.898h-27.783v51.742zm53.974-51.742v32.735c0 11.393 7.073 20.11 18.942 20.11 11.868 0 18.941-8.717 18.941-20.11V489.97h-6.453v30.536c0 8.443-2.538 16.267-12.488 16.267s-12.489-7.824-12.489-16.267V489.97h-6.453zm82.461 29.238c7.478-.894 12.417-7.067 12.417-14.485 0-4.933-2.466-9.814-6.792-12.352-4.118-2.336-9.057-2.401-13.65-2.401h-7.824v51.742h6.453v-21.89h2.669l15.236 21.89h7.823l-16.332-22.504zm-9.396-23.477h1.716c6.382 0 14.061 1.168 14.061 9.272 0 8.228-7.138 9.461-13.728 9.461h-2.049V495.73zm72.726-6.864c-14.817 0-27.104 12.15-27.104 26.974 0 15.373 12.15 26.974 27.104 26.974 14.969 0 27.111-11.601 27.111-26.974 0-14.824-12.28-26.974-27.11-26.974zm0 47.906c-11.177 0-20.65-9.128-20.65-20.932 0-11.392 8.508-20.932 20.65-20.932 12.15 0 20.658 9.54 20.658 20.932 0 11.804-9.474 20.932-20.658 20.932zm58.248-16.75h3.7c9.813 0 18.12-4.182 18.12-15.092 0-9.474-4.94-14.961-20.86-14.961h-7.413v51.742h6.453v-21.689zm0-24.292h1.71c6.38 0 14.067.966 14.067 9.063 0 8.235-7.138 9.468-13.728 9.468h-2.049v-18.53zm75.65 33.01 5.898 12.971h6.93l-24.704-53.934-24.703 53.934h6.936l5.898-12.971h23.744zm-2.676-5.899h-18.387l9.187-20.932 9.2 20.932zm36.213 18.87h27.79v-5.898h-21.343V516.25h20.73v-5.898h-20.73v-14.486h21.343v-5.898h-27.79v51.742zm85.274-12.971 5.898 12.971h6.93l-24.704-53.934-24.703 53.934h6.936l5.899-12.971h23.744zm-2.682-5.899H865.05l9.2-20.932 9.194 20.932" style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(98.847 -259.733)"></path> <path d="m46.878 308.584-16.352 30.354c-3.817-3.04-8.045-5.448-12.69-7.243-4.64-1.788-9.507-2.701-14.57-2.747-4.04 0-7.915 1.05-11.64 3.152-3.72 2.094-5.717 5.24-5.971 9.435.091 2.903 1.135 5.278 3.145 7.144 1.996 1.86 4.404 3.354 7.197 4.477 2.792 1.135 5.428 2.055 7.895 2.753l10.485 3.001c11.256 2.897 20.508 7.484 27.757 13.755 7.25 6.27 10.995 15.399 11.242 27.385.105 7.608-1.05 14.961-3.458 22.067-2.407 7.105-6.707 13.265-12.893 18.472-6.29 4.959-13.324 8.573-21.101 10.838a83.427 83.427 0 0 1-23.77 3.347c-10.023-.046-19.758-1.56-29.2-4.542-9.447-2.994-18.23-7.203-26.366-12.632l17.61-31.56a77.4 77.4 0 0 0 16.822 11.014c6.094 2.93 12.638 4.45 19.659 4.56 5.05.033 9.579-1.174 13.585-3.614 3.993-2.447 6.114-6.297 6.335-11.556-.143-3.634-1.644-6.564-4.508-8.808-2.865-2.238-6.218-4.007-10.062-5.292-3.836-1.292-7.294-2.323-10.374-3.073-8.646-2.193-16.169-4.744-22.55-7.66-6.394-2.924-11.347-7.067-14.87-12.45-3.517-5.376-5.305-12.86-5.357-22.439.085-10.244 2.453-19.13 7.099-26.674 4.646-7.549 11.046-13.389 19.216-17.538 8.156-4.15 17.558-6.251 28.2-6.31 8.156.046 16.645 1.155 25.447 3.34 8.815 2.193 16.821 5.208 24.038 9.044M126.403 333.346v117.435h-41.1V333.346H51.334v-33.153h109.03v33.153h-33.961zm121.493 55.69 49.687 61.705h-51.155l-38.79-57.914h-.425v57.914H166.12V300.154h61.438c10.511-.02 19.888 1.605 28.122 4.868 8.24 3.275 14.746 8.325 19.51 15.163 4.769 6.845 7.203 15.608 7.3 26.309-.039 10.622-3 19.829-8.886 27.632-5.886 7.804-14.453 12.77-25.708 14.91zm-40.683-58.92v37.544h3.987c4.574.072 9.03-.339 13.356-1.226 4.333-.894 7.908-2.689 10.753-5.403 2.832-2.708 4.307-6.76 4.411-12.143-.104-5.39-1.579-9.435-4.41-12.143-2.846-2.707-6.421-4.508-10.754-5.402a61.505 61.505 0 0 0-13.356-1.227h-3.987" style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(98.847 -259.733)"></path> <path d="M396.617 424.616h-56.61l-10.91 26.165H285.5l60.798-150.588h44.872l59.552 150.588h-43.827l-10.277-26.165zm-11.112-29.956-16.769-47.938h-.424l-16.978 47.938h34.171zm109.683-6.44v32.357h5.246c4.228.104 8.861-.046 13.879-.463 5.037-.411 9.382-1.755 13.05-4.013 3.68-2.251 5.598-6.094 5.78-11.51-.17-5.925-2.088-10.029-5.774-12.319-3.674-2.297-8.098-3.576-13.272-3.843-5.167-.274-10.074-.346-14.707-.209h-4.202zm22.23 62.313h-63.323V299.945h58.71c14.25-.17 25.584 2.767 34.021 8.79 8.43 6.022 12.743 16.142 12.945 30.353.072 6.838-1.226 12.887-3.902 18.152-2.681 5.26-7.177 9.461-13.5 12.606v.398c11.256 1.507 19.464 5.631 24.638 12.358 5.168 6.727 7.726 15.386 7.654 25.982-.17 10.453-2.975 18.753-8.41 24.9-5.436 6.146-12.483 10.543-21.135 13.18-8.645 2.642-17.884 3.934-27.698 3.869zM495.188 329.9v29.16h4.62c5.696.182 10.76-.64 15.196-2.5 4.437-1.86 6.78-5.878 7.021-12.084-.085-4.515-1.331-7.816-3.72-9.904-2.4-2.082-5.408-3.4-9.043-3.954a64.784 64.784 0 0 0-11.138-.718h-2.936M683.94 424.616h-56.617L616.42 450.78h-43.605l60.798-150.588h44.878l59.546 150.588H694.21l-10.27-26.165zm-11.112-29.956-16.776-47.938h-.417l-16.991 47.938h34.184M817.732 366.688h81.567c.026 10.916-.965 21.239-2.962 30.954-1.99 9.729-6.394 19.242-13.18 28.566-7.856 10.23-17.363 17.728-28.52 22.491-11.158 4.763-23.386 7.119-36.696 7.067-16.684-.105-31.326-3.472-43.939-10.094-12.606-6.617-22.452-15.869-29.538-27.75-7.086-11.882-10.688-25.76-10.805-41.642.111-16.41 3.745-30.66 10.903-42.764 7.164-12.11 17.147-21.5 29.969-28.175 12.821-6.668 27.783-10.048 44.884-10.146 16.332-.006 30.576 3.497 42.719 10.505 12.142 7.014 21.662 17.559 28.566 31.633l-38.993 15.575c-2.871-7.282-7.197-13.076-13.004-17.37-5.8-4.293-12.86-6.492-21.18-6.596-9.017.163-16.58 2.57-22.674 7.223-6.094 4.645-10.688 10.577-13.774 17.78-3.093 7.203-4.639 14.714-4.645 22.537.013 7.928 1.618 15.464 4.808 22.602 3.191 7.132 7.882 12.965 14.074 17.5 6.2 4.528 13.807 6.877 22.844 7.027 9.076-.006 16.606-2.192 22.615-6.564 6.01-4.372 9.513-10.91 10.518-19.6h-33.557v-30.759" style="fill:#6B7280;fill-opacity:1;fill-rule:nonzero;stroke:none" transform="translate(98.847 -259.733)"></path> </svg> <!-- Second --> <svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 150 40" fill="none"><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title> <path stroke="#6B7280" stroke-miterlimit="3.864" stroke-width=".851" d="M.492 38.141h149.015M.492.911h149.015"></path> <path fill="#6B7280" d="M.545 33.488h27.878V5.565H.545v27.923Z"></path> <path fill="#d4d4d4" d="m2.176 22.319 12.286-14.24 12.286 14.24H18.65l-4.188-5.026-4.188 5.026H2.176ZM2.176 23.436h8.098v1.395h8.377v-1.395h8.097v5.584H2.176v-5.584Z"></path> <path fill="#6B7280" fill-rule="evenodd" d="M56.51 25.334c0-2.875 1.218-5.637 4.462-5.637 3.244 0 4.463 2.762 4.463 5.637 0 2.737-1.219 5.499-4.463 5.499-3.244 0-4.462-2.762-4.462-5.5Zm-3.612 0c0 4.738 2.99 8.534 8.074 8.534s8.074-3.796 8.074-8.534c0-4.878-2.99-8.673-8.074-8.673s-8.074 3.795-8.074 8.673ZM85.25 22.573c-.438-3.796-3.473-5.913-7.084-5.913-5.085 0-8.074 3.797-8.074 8.673 0 4.74 2.989 8.535 8.074 8.535 4.024 0 6.853-2.624 7.222-6.717H81.89c-.275 2.163-1.518 3.68-3.724 3.68-3.245 0-4.464-2.761-4.464-5.498 0-2.875 1.219-5.637 4.464-5.637 1.794 0 3.357 1.244 3.588 2.877h3.496ZM86.688 33.477h3.611V26.39h6.648v7.086h3.612V17.05h-3.612v6.304H90.3V17.05h-3.612v16.426ZM106.898 33.477h3.611V20.089h4.923V17.05h-13.457v3.038h4.923v13.388ZM116.847 33.477h3.611V17.05h-3.611v16.426ZM123.397 33.477h12.468v-3.035h-8.856v-4.027h7.959v-2.808h-7.959V20.09h8.672V17.05h-12.284v16.426Z" clip-rule="evenodd"></path> <path fill="#6B7280" d="M137.873 33.477h3.611V26.69h6.878v-2.807h-6.878V20.09h7.937V17.05h-11.548v16.426ZM37.73 33.49h3.608v-7.085h6.648v7.086h3.612V17.065h-3.612v6.303h-6.648v-6.303h-3.607v16.426Z"></path> </svg> <!-- Third --> <svg class="mx-auto h-auto w-32 py-3 sm:mx-0 lg:w-40 lg:py-5" viewBox="0 0 150 39" fill="none"><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title> <g clip-path="url(#n)"> <path fill="#6B7280" d="M66.454 14.419v12.11s4.413 1.098 11.32 1.098c6.855 0 11.316-1.093 11.316-1.093V22.42s-4.793.943-11.364.943c-3.19 0-5.304-.375-6.44-.489 0-.992.003-3.792 0-4.793 1.272-.127 3.412-.493 6.488-.493 6.397.026 11.316.974 11.316.974v-4.146s-4.39-1.093-11.316-1.093c-6.977 0-11.32 1.097-11.32 1.097ZM94.464 27.356h4.955V13.55h-4.955v13.806ZM28.155 27.356h4.954V13.55h-4.954v13.806ZM56.17 27.351s-3.583-2.896-8.852-5.627c-1.468-.76-2.71-1.267-3.863-1.734v7.361h-4.797V13.576s4.06.786 8.669 3.176c5.269 2.73 8.847 5.378 8.847 5.378v-8.58h4.81V27.35H56.17ZM24.843 16.678l-12.29 11.045L.245 16.669l3.68-3.351s7.518 7.235 8.628 8.27c1.11-1.035 8.624-8.27 8.624-8.27l3.666 3.36ZM110.599 13.558h6.899c2.516-.004 4.098-1.284 4.679-1.896.586-.612 1.94-2.14 1.94-3.92V2.007c0-1.061.861-1.922 1.922-1.922h7.48c1.062 0 1.923.86 1.923 1.927v7.48a1.923 1.923 0 0 1-1.923 1.922h-5.736c-1.779 0-3.308 1.354-3.919 1.94-.612.58-1.892 2.162-1.897 4.68v6.898h-11.368V13.558Z"></path> <mask id="b" width="27" height="28" x="123" y="12" maskUnits="userSpaceOnUse" style="mask-type:luminance"> <path fill="#fff" d="M123.16 12.746h26.765v26.843H123.16V12.746Z"></path> </mask> <g mask="url(#b)"> <path fill="#6B7280" d="M149.755 19.605c0-1.826-.739-3.46-1.914-4.649-1.175-1.192-2.827-1.913-4.653-1.913-3.736 0-6.715 3.045-6.715 6.676 0 .664.288 1.922.288 2.46a5.18 5.18 0 0 1-5.177 5.177h-5.545a1.92 1.92 0 0 0-1.922 1.922v7.48c0 1.062.861 1.922 1.922 1.922h7.48c1.062 0 1.923-.86 1.923-1.922v-5.544a5.177 5.177 0 0 1 5.177-5.178c.537 0 1.796.289 2.455.289 3.635 0 6.681-2.98 6.681-6.72Z"></path> </g> </g> <defs> <clipPath id="n"> <path fill="#fff" d="M0 0h150v38.764H0z"></path> </clipPath> </defs> </svg> <!-- Fourth --> <svg class="mx-auto h-auto w-24 py-3 sm:mx-0 md:w-32 lg:w-40 lg:py-5" viewBox="0 0 100 42" fill="none"><title>
        Logo is used for demonstration purposes only and should be replaced in customized versions.
      </title> <path fill="#6B7280" d="M77.466.414v6.157H36.751v8.093h1.356V7.885h40.729V.415h-1.37ZM58.693 19.465v5.686H55.4v3.195h-3.085v3.556H14.367v1.314h39.248v-3.57h3.1v-3.181h3.292v-7h-1.314Z"></path> <path fill="#6B7280" d="M14.491 10.002h9.366l1.26.083s7.567.442 9.255 7.387c1.687 6.945-3.473 12.244-11.013 12.327-7.54.083-8.965 0-8.965 0v-1.162l.997-.083c.221-.042.428-.07.65-.097.207-.041.415-.083.609-.194.235-.124.4-.36.484-.608.083-.236.083-.47.083-.72 0-.083.014-.152.014-.235V13.184a5.03 5.03 0 0 0-.028-.457c-.014-.138-.028-.277-.055-.415a.9.9 0 0 0-.153-.304 1.063 1.063 0 0 0-.304-.305c-.124-.083-.249-.124-.387-.18a5.89 5.89 0 0 0-.969-.262 15.285 15.285 0 0 0-.844-.139v-1.12Zm6.074 1.425V26.09s-.139 1.605.968 2.048c1.107.442 3.085.401 4.233.11 1.149-.29 5.34-1.577 5.05-8.812-.29-7.222-6.17-8.093-7.512-8.093-1.342 0-2.74.083-2.74.083ZM40.459 11.178v-1.176h9.712s6.848-.139 6.516 5.395c-.332 5.534-7.07 5.825-7.706 5.797-.637-.028-2.31 0-2.31 0v4.634c0 .36 0 .72-.014 1.08 0 .276-.014.58.097.843.11.263.373.43.622.526.277.11.567.18.872.221.152.028.318.042.484.056.608.055.968 0 .968 0v1.231h-9.13v-1.162l1.369-.11c.124-.015.25-.042.36-.07.207-.055.442-.124.608-.249.167-.124.25-.318.305-.512.055-.193.11-.429.11-.65V12.921s.111-.609-.276-1.08c-.388-.497-2.587-.663-2.587-.663Zm6.24.166v8.467h1.535s4.565.166 4.648-4.013c.07-4.178-2.822-4.786-6.184-4.454ZM62.47 9.988h9.462s5.783-.29 6.835 3.597c1.051 3.901-2.601 5.672-3.016 5.838-.402.166-1.854.692-1.854.692l4.994 6.35s1.107 1.397 2.2 1.826c1.107.429 1.909.318 1.909.318v1.176h-5.728l-3.25-4.565-3.446-4.303h-2.02v5.907s-.082 1.204.623 1.453c.692.25 2.31.318 2.31.318V29.8h-9.061v-1.176s1.868-.042 2.393-.457c.47-.36.43-1.065.43-1.065v-14.29s.027-.831-.485-1.163c-.512-.318-2.31-.484-2.31-.484l.013-1.176Zm6.1 1.356v8.231h1.854s4.538.028 4.621-4.385c0-.346-.014-.706-.083-1.038a3.554 3.554 0 0 0-.277-.844 3.231 3.231 0 0 0-.415-.65 2.313 2.313 0 0 0-.54-.498 5.42 5.42 0 0 0-.608-.36 3.257 3.257 0 0 0-.609-.235 4.942 4.942 0 0 0-.65-.152c-.194-.028-.387-.056-.58-.07-.153-.013-.291-.027-.444-.027-.207 0-.415.014-.622.014-.263.014-.526.014-.789.014h-.858Z"></path> <path fill="#6B7280" d="M25.089 13.432s-9.684-.608-17.64 7.277C-.504 28.581.008 38.35.008 38.35h1.508s-.498-9.145 7.014-16.657c7.526-7.526 16.518-6.89 16.518-6.89l.042-1.37ZM18.088 38.473l-1.065.07c-.014-.61-.249-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.222 1.107.138.194.346.29.608.29.416 0 .678-.276.775-.816l.982.056c-.069.525-.262.913-.58 1.19-.319.262-.72.4-1.19.4-.581 0-1.038-.193-1.398-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.527-1.604.345-.415.816-.623 1.424-.623 1.038 0 1.62.553 1.758 1.674ZM22.46 41.267c-.58 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.319-.43.789-.637 1.384-.637.608 0 1.065.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.319.443-.775.664-1.384.664Zm.028-3.638c-.54 0-.803.47-.803 1.411 0 .94.263 1.411.803 1.411.512 0 .774-.47.774-1.41 0-.942-.262-1.412-.774-1.412ZM30.484 36.855v4.344h-.872l-1.701-2.933v.152c.014.069.014.138.014.194v2.6h-.789v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014ZM36.516 37.809l-.871.29c-.111-.345-.36-.511-.734-.511-.4 0-.608.124-.608.387 0 .11.041.194.11.263.083.069.25.138.512.194.443.083.761.18.969.262.207.097.373.236.525.443.139.208.208.429.208.678 0 .387-.152.733-.457 1.024-.304.29-.747.429-1.342.429-.442 0-.83-.097-1.134-.305a1.419 1.419 0 0 1-.623-.899l.941-.208c.11.402.401.61.885.61.236 0 .402-.042.526-.14.11-.096.166-.193.166-.317a.343.343 0 0 0-.152-.29c-.11-.07-.304-.14-.595-.194-.553-.111-.94-.277-1.176-.47-.235-.195-.346-.485-.346-.873 0-.387.139-.705.415-.982.277-.263.664-.4 1.149-.4.83 0 1.383.331 1.632 1.009ZM42.23 36.855v.857h-1.08v3.486h-1.023v-3.486h-1.08v-.858h3.183ZM45.84 39.483V41.2h-1.023v-4.344h1.909c.346 0 .636.041.844.124.207.083.387.235.525.456.139.222.208.457.208.734 0 .526-.25.899-.747 1.12l.802 1.923h-1.12l-.664-1.715h-.734v-.014Zm0-1.854v1.107h.623c.207 0 .346-.014.443-.041a.476.476 0 0 0 .249-.194.563.563 0 0 0 .11-.332.563.563 0 0 0-.11-.332.47.47 0 0 0-.236-.18c-.082-.028-.248-.028-.47-.028h-.609ZM54.611 36.855v2.697c0 .443-.055.761-.152.983-.097.207-.29.387-.553.525-.263.139-.609.208-1.024.208-.415 0-.747-.056-.996-.18a1.201 1.201 0 0 1-.553-.526c-.125-.221-.18-.553-.18-.996v-2.698h1.107v2.698c0 .235.013.401.055.512.041.11.11.194.235.263a.82.82 0 0 0 .429.097c.194 0 .346-.028.47-.097a.505.505 0 0 0 .236-.25c.041-.11.055-.276.055-.525v-2.698h.871v-.014ZM61.086 38.473l-1.065.07c-.014-.61-.25-.914-.72-.914-.525 0-.802.47-.802 1.411 0 .54.07.913.221 1.107.139.194.346.29.61.29.414 0 .677-.276.774-.816l.982.056c-.07.525-.263.913-.581 1.19-.318.262-.72.4-1.19.4-.58 0-1.037-.193-1.397-.594-.36-.401-.54-.941-.54-1.647 0-.65.18-1.19.526-1.604.346-.415.816-.623 1.425-.623 1.038 0 1.619.553 1.757 1.674ZM66.578 36.855v.857H65.5v3.486h-1.037v-3.486h-1.08v-.858h3.196ZM70.175 36.855h-1.01v4.344h1.01v-4.344ZM74.838 41.267c-.581 0-1.038-.22-1.356-.664-.318-.442-.484-.968-.484-1.59 0-.637.166-1.163.484-1.591.318-.43.788-.637 1.383-.637.609 0 1.066.222 1.37.678.304.457.456.968.456 1.55 0 .636-.152 1.162-.47 1.59-.304.443-.775.664-1.383.664Zm.027-3.638c-.54 0-.802.47-.802 1.411 0 .94.263 1.411.802 1.411.512 0 .775-.47.775-1.41 0-.942-.263-1.412-.775-1.412ZM82.862 36.855v4.344h-.872l-1.702-2.933v.152c.014.069.014.138.014.194v2.6h-.788v-4.344h1.093l1.48 2.56c-.014-.125-.014-.222-.014-.29v-2.27h.789v-.014Z"></path> </svg> </div> </section>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/landing/ClientsSection.astro", void 0);

const $$Astro$b = createAstro("https://screwfast.uk");
const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro$a = createAstro("https://screwfast.uk");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, src, alt, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Block to display the feature image --> <div class="relative mb-6 overflow-hidden md:mb-8"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center", "draggable": "false", "format": "avif", "loading": "eager" })}`} </div> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1"> <!-- Rendering title --> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4"> ${subTitle} </p>`} </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.svg })} ` })}`)} </div> </div> </div> </section>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$Astro$9 = createAstro("https://screwfast.uk");
const $$TabNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$TabNav;
  const { aria, dataTab, id, heading, content, first } = Astro2.props;
  const BUTTON_CLASS = "dark:hover:bg-neutral-700 rounded-xl p-4 text-start outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-200 focus-visible:ring hs-tab-active:bg-neutral-50 hs-tab-active:shadow-md hs-tab-active:hover:border-transparent dark:ring-zinc-200 dark:focus:outline-none  dark:hs-tab-active:bg-neutral-700/60 md:p-5";
  return renderTemplate`<!-- Tab button with dynamic class based on 'first' property, id, tab data, and aria-controls  -->${maybeRenderHead()}<button type="button"${addAttribute(`${first ? "active " : ""}${BUTTON_CLASS}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-hs-tab")}${addAttribute(aria, "aria-controls")} role="tab"> <!-- Slot for additional content --> <span class="flex"> ${renderSlot($$result, $$slots["default"])} <!-- Container for the heading and content of the tab --> <span class="ms-6 grow"> <!-- Heading of the tab, changes color when active --> <span class="block text-lg font-bold text-neutral-800 hs-tab-active:text-orange-400 dark:text-neutral-200 dark:hs-tab-active:text-orange-300">${heading}</span> <!-- Content of the tab, changes color when active --> <span class="mt-1 block text-neutral-500 hs-tab-active:text-neutral-600 dark:text-neutral-400 dark:hs-tab-active:text-neutral-200">${content}</span> </span> </span> </button>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/blocks/TabNav.astro", void 0);

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$TabContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TabContent;
  const { id, aria, src, alt, first, second } = Astro2.props;
  const firstClass = first ? "" : "hidden";
  const secondClass = second ? "shadow-xl aspect-[5/4] bg-neutral-300 dark:bg-neutral-600 object-cover p-3 lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]" : "shadow-xl aspect-[3/2] object-cover lg:aspect-auto shadow-neutral-200 rounded-xl dark:shadow-neutral-900/[.2]";
  return renderTemplate`<!-- Container for tab content that controls visibility and accessibility -->${maybeRenderHead()}<div${addAttribute(id, "id")} role="tabpanel"${addAttribute(firstClass, "class")}${addAttribute(aria, "aria-labelledby")}> <!-- Astro Image component to display the image with dynamic classes based on the 'second' property --> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": secondClass, "draggable": "false", "format": "avif", "loading": "eager" })} </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/blocks/TabContent.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$FeaturesNavs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$FeaturesNavs;
  const { title, tabs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="relative p-6 md:p-16"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <!-- Section's heading and tab navigation --> <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl"> <!-- About Fragment: https://docs.astro.build/en/basics/astro-syntax/#fragments --> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <!-- Tab navigation - use the attribute 'first' in the first TabNav for the component to work --> <nav class="mt-5 grid gap-4 md:mt-10" aria-label="Tabs" role="tablist"> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabNav", $$TabNav, { "id": `tabs-with-card-item-${index + 1}`, "dataTab": `#tabs-with-card-${index + 1}`, "aria": `tabs-with-card-${index + 1}`, "heading": tab.heading, "content": tab.content, "first": tab.first }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": tab.svg })} ` })}`)} </nav> </div> <!-- Contents for each tab - the 'first' attribute should be used in the first tab for that tab to be initially visible, 'second' changes the styles --> <div class="lg:col-span-6"> <div class="relative"> <div> ${tabs.map((tab, index) => renderTemplate`${renderComponent($$result, "TabContent", $$TabContent, { "id": `tabs-with-card-${index + 1}`, "aria": `tabs-with-card-item-${index + 1}`, "src": tab.src, "alt": tab.alt, "first": tab.first, "second": tab.second })}`)} </div> </div> </div> </div> <div class="absolute inset-0 grid h-full w-full grid-cols-12"> <!-- Decorative background and sizing --> <div class="col-span-full h-5/6 w-full rounded-xl bg-neutral-100 dark:bg-white/[.075] sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full"></div> </div> </div> </section> <!--Import the necessary Tabs plugin--> <!--https://preline.co/plugins/html/tabs.html--> `;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/features/FeaturesNavs.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$TestimonialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/testimonials/TestimonialItem.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/testimonials/TestimonialsSection.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PricingSection;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Section heading and sub-heading --> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${pricing.title} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${pricing.subTitle} </p> </div> <!-- Contains two main product blocks --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0"> <!-- Starter Kit product details --> <div class="w-full rounded-xl bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3"> <div class="mb-4"> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.starterKit.name} </h3> <p class="text-indigo-300">${pricing.starterKit.description}</p> </div> <div class="mb-4"> <span class="text-4xl font-bold text-neutral-200">${pricing.starterKit.price}</span> <span class="text-lg font-bold text-neutral-300">${pricing.starterKit.cents}</span> <span class="ms-3 text-sm text-indigo-200">${pricing.starterKit.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-neutral-300"> ${pricing.starterKit.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.starterKit.purchaseLink, "href")} class="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-bold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">${pricing.starterKit.purchaseBtnTitle}</a> </div> <!-- Professional Toolbox product details --> <div class="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"> <div class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"> <div> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.professionalToolbox.name} </h3> <p class="text-orange-200">${pricing.professionalToolbox.description}</p> </div> <span class="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none">${pricing.badge}</span> </div> <div class="mb-4"> <span class="text-6xl font-bold text-neutral-100">${pricing.professionalToolbox.price}</span> <span class="text-lg font-bold text-orange-100">${pricing.professionalToolbox.cents}</span> <span class="ms-3 text-orange-200">${pricing.professionalToolbox.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-orange-100"> ${pricing.professionalToolbox.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.professionalToolbox.purchaseLink, "href")} class="block rounded-lg bg-orange-200 bg-opacity-50 px-8 py-3 text-center text-sm font-bold text-neutral-100 outline-none ring-orange-300 transition duration-100 hover:bg-orange-300 hover:bg-opacity-50 focus-visible:ring active:bg-orange-400 md:text-base">${pricing.professionalToolbox.purchaseBtnTitle}</a> </div> </div> <!-- Call to action for Enterprise Solutions --> <div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${pricing.thirdOption} </p> ${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": pricing.btnText, "url": "#" })} </div> </section>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/pricing/PricingSection.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$AccordionItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { id, collapseId, question, answer, first } = Astro2.props;
  const ACCORDION_CLASS_DEFAULT = "hs-accordion pb-3 active";
  const ACCORDION_CLASS_COLLAPSED = "hs-accordion pt-6 pb-3";
  const ACCORDION_CONTENT_CLASS = "hs-accordion-content w-full overflow-hidden transition-[height] duration-300";
  function getAccordionClass(first2 = false) {
    return first2 ? ACCORDION_CLASS_DEFAULT : ACCORDION_CLASS_COLLAPSED;
  }
  return renderTemplate`<!-- The main container for the accordion item -->${maybeRenderHead()}<div${addAttribute(getAccordionClass(first), "class")}${addAttribute(id, "id")}> <!-- The accordion button, which toggles the expanded/collapsed state --> <button class="hs-accordion-toggle group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-neutral-800 outline-none ring-zinc-500 transition hover:text-neutral-500 focus-visible:ring dark:text-neutral-200 dark:ring-zinc-200 dark:hover:text-neutral-400 dark:focus:outline-none md:text-lg"${addAttribute(collapseId, "aria-controls")}> ${question} <!-- SVG Icon that is shown when the accordion is NOT active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionNotActive" })} <!-- SVG Icon that is shown when the accordion is active --> ${renderComponent($$result, "Icon", $$Icon, { "name": "accordionActive" })} </button> <!-- The collapsible content of the accordion --> <div${addAttribute(id, "aria-labelledby")}${addAttribute(`${first ? ACCORDION_CONTENT_CLASS : "hidden " + ACCORDION_CONTENT_CLASS}`, "class")}${addAttribute(collapseId, "id")}> <!-- The content paragraph --> <p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${answer} </p> </div> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/blocks/AccordionItem.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { title, faqs } = Astro2.props;
  const makeId = (base, index) => `${base}${index + 1}`;
  return renderTemplate`<!-- Main container that holds all content. Customized for different viewport sizes. -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="grid gap-10 md:grid-cols-5"> <div class="md:col-span-2"> <div class="max-w-xs"> <h2 class="text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(title)}` })} </h2> <p class="mt-1 hidden text-neutral-600 dark:text-neutral-400 md:block"> ${faqs.subTitle} </p> </div> </div> <!-- FAQ accordion items --> <div class="md:col-span-3"> <div class="hs-accordion-group divide-y divide-neutral-200 dark:divide-neutral-700"> ${faqs.faqs.map((question, i) => {
    let id = makeId(
      "hs-basic-with-title-and-arrow-stretched-heading-",
      i
    );
    let collapseId = makeId(
      "hs-basic-with-title-and-arrow-stretched-collapse",
      i
    );
    return renderTemplate`${renderComponent($$result, "AccordionItem", $$AccordionItem, { ...question, "id": id, "collapseId": collapseId, "first": i === 0 })}`;
  })} </div> </div> </div> </section> <!--Import the necessary Accordion plugin--> <!--https://preline.co/plugins/html/accordion.html--> `;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/misc/FAQ.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$AnnouncementBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnnouncementBanner;
  const { title, btnId, btnTitle, url } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "astro-banner", "astro-banner", { "btnId": btnId }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="fixed bottom-0 start-1/2 z-50 mx-auto w-full -translate-x-1/2 transform p-6 sm:max-w-4xl" role="region" aria-label="Informational Banner"> <div class="rounded-xl bg-neutral-800 bg-[url('/banner-pattern.svg')] bg-cover bg-center bg-no-repeat p-4 text-center shadow-sm dark:bg-neutral-200"> <div class="flex items-center justify-center"> <div class="ml-auto"> ${title && renderTemplate`<p class="me-2 inline-block font-medium text-neutral-50 dark:text-neutral-700"> ${title} </p>`} <a class="group inline-flex items-center gap-x-2 rounded-full border-2 border-neutral-50 backdrop-brightness-75 sm:backdrop-brightness-100 px-3 py-2 text-sm font-semibold text-neutral-50 transition duration-300 hover:border-neutral-100/70 hover:text-neutral-50/70 disabled:pointer-events-none disabled:opacity-50 dark:backdrop-brightness-100 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-700/70 dark:hover:text-neutral-800/70 dark:focus:outline-none"${addAttribute(url, "href")} target="_blank"> ${btnTitle} <svg class="size-4 flex-shrink-0 transition duration-300 group-hover:translate-x-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </a> </div> <button type="button" class="ml-auto inline-flex items-center gap-x-2 rounded-full border border-transparent bg-gray-100 p-2 text-sm font-semibold text-gray-800 hover:bg-gray-200 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-700/80 dark:hover:text-neutral-50 dark:focus:outline-none"${addAttribute(btnId, "id")}> <span class="sr-only">Dismiss</span> <svg class="size-5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> </div> </div> </div> ` })} `;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/banners/AnnouncementBanner.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/josesantiz-dev/Desktop/ScrewFast/src/images/hero-image.avif";
							}
							
							return target[name];
						}
					});

const construction = new Proxy({"src":"/_astro/construction-image.6K-xbeL4.avif","width":1600,"height":2400,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/josesantiz-dev/Desktop/ScrewFast/src/images/construction-image.avif";
							}
							
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/automated-tools.NvGNhe84.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/josesantiz-dev/Desktop/ScrewFast/src/images/automated-tools.avif";
							}
							
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard-image.DUm-YPUR.avif","width":1920,"height":1920,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/josesantiz-dev/Desktop/ScrewFast/src/images/dashboard-image.avif";
							}
							
							return target[name];
						}
					});

export { $$AnnouncementBanner as $, $$HeroSection as a, $$ClientsSection as b, $$FeaturesGeneral as c, $$FeaturesNavs as d, dashboard as e, construction as f, $$TestimonialsSection as g, heroImage as h, $$PricingSection as i, $$FAQ as j, $$HeroSectionAlt as k, tools as t };
