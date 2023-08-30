import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
const Banner_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-1vsfmdv{padding:5em 0;background-color:var(--primary-color);color:white;height:250px}h2.svelte-1vsfmdv{margin:0;font-size:3.3em;font-weight:400}p.svelte-1vsfmdv{color:#faf8f8;font-size:1.5em;line-height:1.6}",
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hero svelte-1vsfmdv"><div class="container"><h2 class="svelte-1vsfmdv">Casa en Cumbaya, Quito - Ecuador</h2>
    <p class="svelte-1vsfmdv">En el mejor sector de Cumbaya, junto a la Universidad San Francisco, Supermaxi, Fybeca, Paseo San Francisco, Kywi.
    </p></div>
</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
