/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, l as defineScriptVars, d as renderComponent } from '../chunks/astro/server_DhNoaUZN.mjs';
import 'kleur/colors';
import { b as $$AuthBtn, c as $$PasswordInput, a as $$MainLayout, S as SITE } from '../chunks/MainLayout_DA4fX6IF.mjs';
import { b as $$PhoneInput, a as $$EmailContactInput, $ as $$TextInput } from '../chunks/PhoneInput_CKXSG9Ir.mjs';
import 'clsx';
import { MongoClient } from 'mongodb';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$RepeatPasswordInput = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RepeatPasswordInput;
  const {
    label = "Password",
    forgot,
    id,
    errorId,
    content
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex items-center justify-between"> <label${addAttribute(id, "for")} class="mb-2 block text-sm text-neutral-800 dark:text-neutral-200">${label}</label> ${forgot ? renderTemplate`<button class="rounded-lg text-sm font-medium text-orange-400 decoration-2 outline-none ring-zinc-500 hover:underline focus-visible:ring dark:text-orange-400 dark:ring-zinc-200 dark:focus:outline-none dark:focus:ring-1" data-hs-overlay="#hs-toggle-between-modals-recover-modal">
Forgot password?
</button>` : ""} </div> <div class="relative"> <input type="password"${addAttribute(id, "id")} name="repeat-password" class="block w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 focus:border-neutral-200 focus:outline-none focus:ring focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-700/30 dark:text-neutral-300 dark:focus:ring-1" required${addAttribute(errorId, "aria-describedby")}> <div class="pointer-events-none absolute inset-y-0 end-0 hidden pe-3"> <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </svg> </div> </div> <p class="mt-2 hidden text-xs text-red-600"${addAttribute(errorId, "id")}> ${content} </p> </div>`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/ui/forms/input/RepeatPasswordInput.astro", void 0);

// src/utils/db.js

let client;
let db;
const URI ='mongodb+srv://joseph1990:rWslTWmTF7IB9dHz@cluster0.x2liw.mongodb.net/kaktus?retryWrites=true&w=majority&appName=Cluster0';

const connectToDatabase = async () => {
  if (db) return { db, client }; // Si ya está conectada, reutilízala

  client = new MongoClient(URI); // Asegúrate de tener la URI en tu archivo .env
  await client.connect();
  db = client.db("kaktus"); // El nombre de tu base de datos
  return { db, client };
};

// src/models/User.js

const createUser = async (userData) => {
  const { db } = await connectToDatabase();
  const usersCollection = db.collection("users");

  // Validar si el usuario ya existe
  const existingUser = await usersCollection.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  // Insertar nuevo usuario en la base de datos
  const result = await usersCollection.insertOne(userData);
  return result;
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://screwfast.uk");
const $$RegisterSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RegisterSection;
  const title = "Registro";
  const subTitle = "Registra tus datos para comenzar a usar nuestro sistema POS. Completa la informaci\xF3n b\xE1sica para crear tu cuenta y dar el primer paso hacia la gesti\xF3n eficiente de tu negocio.";
  const formTitle = "Llena el formulario abajo";
  let success = false;
  let responseCode = null;
  const errors = { general: "" };
  let formData = {
    firstname: "",
    lastname1: "",
    lastname2: "",
    enterprice: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: ""
  };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      formData.firstname = String(data.get("hs-firstname") ?? "");
      formData.lastname1 = String(data.get("hs-lastname-1") ?? "");
      formData.lastname2 = String(data.get("hs-lastname-2") ?? "");
      formData.enterprice = String(data.get("hs-name-enterprice") ?? "");
      formData.email = String(data.get("hs-email-contacts") ?? "");
      formData.phone = String(data.get("hs-phone-number") ?? "");
      formData.password = String(data.get("password") ?? "");
      formData.repeatPassword = String(data.get("repeat-password") ?? "");
      if (formData.password !== formData.repeatPassword) {
        throw new Error("Las contrase\xF1as no coinciden");
      }
      const userData = {
        ...formData
      };
      let res = await createUser(userData);
      errors.general += "Usuario creado con \xE9xito.";
      success = true;
    } catch (error) {
      if (error instanceof Error) {
        success = false;
        errors.general += error.message;
        console.error(error.message);
      }
    }
  }
  return renderTemplate(_a || (_a = __template(["<!-- Contact Us -->", '<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> <div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ', ' </h1> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ', ' </p> </div> <div class="mt-12 flex justify-center"> <div class="w-full max-w-4xl rounded-lg bg-white p-6 shadow-md dark:bg-neutral-800"> <h2 class="mb-8 text-center text-xl font-bold text-neutral-700 dark:text-neutral-300"> ', " </h2> ", ' <!-- Form for user input with various input fields --> <form method="POST"> <div class="grid gap-6 sm:grid-cols-2"> ', " ", " ", " ", " ", " ", " ", " ", ' </div> <div class="mt-6 flex justify-center"> ', " </div> </form> </div> </div> </div> </section> <script>(function(){", '\n    if (success === true) {\n        window.location.replace(\n            "/products",\n            (replace = true),\n        );\n    }\n})();<\/script>'])), maybeRenderHead(), title, subTitle, formTitle, errors.general && renderTemplate`<p class="text-red-500 text-center mb-5">${errors.general}</p>`, renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-firstname", "label": "Nombre", "name": "hs-firstname", "value": formData.firstname, "required": true }), renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-1", "label": "Apellido Paterno", "name": "hs-lastname-1", "value": formData.lastname1, "required": true }), renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-lastname-2", "label": "Apellido Materno", "name": "hs-lastname-2", "value": formData.lastname2, "required": true }), renderComponent($$result, "TextInput", $$TextInput, { "id": "hs-name-enterprice", "label": "Nombre Empresa", "name": "hs-name-enterprice", "value": formData.enterprice, "required": true }), renderComponent($$result, "EmailContactInput", $$EmailContactInput, { "id": "hs-email-contacts", "label": "Email", "value": formData.email }), renderComponent($$result, "PhoneInput", $$PhoneInput, { "id": "hs-phone-number", "label": "Tel\xE9fono" }), renderComponent($$result, "PasswordInput", $$PasswordInput, { "id": "hd-password", "label": "Password" }), renderComponent($$result, "RepeatPasswordInput", $$RepeatPasswordInput, { "id": "hd-repeat-password", "label": "Repetir Password" }), renderComponent($$result, "AuthBtn", $$AuthBtn, { "title": "Registrarse" }), defineScriptVars({ success, responseCode }));
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/components/sections/misc/RegisterSection.astro", void 0);

const $$Register = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = `Register | ${SITE.title}`;
  return renderTemplate`<!--Utilizing MainLayout for the outer layout of the page, and defining meta for SEO purposes-->${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/contact",
    url: "https://screwfast.uk/contact",
    name: "Contact Us | ScrewFast",
    description: "Have questions or want to discuss a project? Reach out, and let's craft the perfect solution with our tools and services.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk",
      name: "ScrewFast",
      description: "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs."
    },
    inLanguage: "en-US"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RegisterSection", $$RegisterSection, {})} ` })}`;
}, "/Users/josesantiz-dev/Desktop/ScrewFast/src/pages/register.astro", void 0);

const $$file = "/Users/josesantiz-dev/Desktop/ScrewFast/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
