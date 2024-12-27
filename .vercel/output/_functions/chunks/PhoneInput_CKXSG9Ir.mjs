import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_DhNoaUZN.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$TextInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TextInput;
  const { label, id, name, required, value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only"> ${label} ${required && renderTemplate`<span class="text-red-500">*</span>`} </label> <input type="text"${addAttribute(name, "name")}${addAttribute(id, "id")}${addAttribute(value, "value")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")}${addAttribute(required, "required")} autocomplete="off"> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/forms/input/TextInput.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$EmailContactInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EmailContactInput;
  const { label = Astro2.currentLocale === "fr" ? "E-mail" : "Email", id, value } = Astro2.props;
  return renderTemplate`<!-- Container for the label and email input field -->${maybeRenderHead()}<div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <!-- Email input field --> <input type="email" name="hs-email-contacts"${addAttribute(id, "id")}${addAttribute(value, "value")} autocomplete="email" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1" placeholder="Email"> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/forms/input/EmailContactInput.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$PhoneInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhoneInput;
  const { label = Astro2.currentLocale === "fr" ? "Num\xE9ro de t\xE9l\xE9phone" : "Phone Number", id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <label${addAttribute(id, "for")} class="sr-only">${label}</label> <input type="tel" name="hs-phone-number"${addAttribute(id, "id")} class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-500 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:placeholder:text-neutral-400 dark:focus:ring-1"${addAttribute(label, "placeholder")} autocomplete="off"> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/forms/input/PhoneInput.astro", void 0);

export { $$TextInput as $, $$EmailContactInput as a, $$PhoneInput as b };
