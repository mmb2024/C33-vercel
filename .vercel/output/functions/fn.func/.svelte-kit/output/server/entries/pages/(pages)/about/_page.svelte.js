import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { C as Contact_1 } from "../../../../chunks/Contact.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-ognxp6{display:grid;grid-template-columns:repeat(12, 1fr);gap:2em}.C33body.svelte-ognxp6{grid-column:span 12;width:100%}.contactus.svelte-ognxp6{margin-left:auto;margin-right:auto;padding:40px 40px 40px 40px}h3.svelte-ognxp6{padding-top:0.5em;padding-bottom:0.5em;margin-bottom:0.5em;font-size:2em;font-weight:500;border-bottom:1px solid #ddd}p.svelte-ognxp6{padding-top:0.5em;padding-bottom:0.5em;margin-bottom:0.5em;font-size:1.5em;font-weight:500}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container grid svelte-ognxp6"><div class="C33body svelte-ognxp6"><h3 class="svelte-ognxp6">About Us</h3>
    <p class="svelte-ognxp6">Venta directa del propietario. Por favor no intermediarios...</p>

    <div class="contactus svelte-ognxp6">${validate_component(Contact_1, "Contact").$$render($$result, {}, {}, {})}</div></div></div>



${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Casa en Venta | Cumbaya",
      description: "Diseño Minimalista con mucha iluminacion Natural",
      type: "WebPage"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
