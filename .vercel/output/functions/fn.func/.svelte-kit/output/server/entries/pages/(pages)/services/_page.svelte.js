import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import { S as Seo } from "../../../../chunks/Seo.js";
/* empty css                                                        *//* empty css                                                       */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-esi288{padding-top:0.8em;padding-bottom:0.1em;margin-bottom:0.5em;font-size:2em;font-weight:400;border-bottom:1px solid #ddd}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container"><h3 class="svelte-esi288">Service</h3></div>

${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Vercel | Cumbaya",
      description: "Diseño",
      type: "WebPage"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
