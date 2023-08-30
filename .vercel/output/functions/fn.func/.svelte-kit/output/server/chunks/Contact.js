import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { B as Button } from "./Button.js";
const Contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contact.svelte-g2ai95{display:block;margin-left:auto;margin-right:auto;padding:1em;width:50%;background-color:rgba(240, 242, 245, 0.808)}.action.svelte-g2ai95{margin-left:auto;margin-right:auto;width:60%;font-size:1.2em}h3.svelte-g2ai95{padding-top:0.5em;margin-bottom:0.5em;font-size:1.8em;font-weight:400;border-bottom:1px solid #ddd;color:#f19576}p.svelte-g2ai95{line-height:1.3em;font-size:1.4em;font-weight:400}a.svelte-g2ai95{text-decoration:none;color:var(--primary-color);color:#0a84ff}a.svelte-g2ai95:hover{text-decoration:underline}",
  map: null
};
const Contact_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="contact svelte-g2ai95"><h3 class="svelte-g2ai95">Contáctenos</h3>
  <p class="svelte-g2ai95">Sus datos solo seran usados solo para responder sus requerimientos</p>

  <div class="action svelte-g2ai95"><a class="secondary svelte-g2ai95" href="/contact">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "secondary",
      id: "a-button",
      size: "medium"
    },
    {},
    {
      default: () => {
        return `Solicite más Información`;
      }
    }
  )}</a></div>
</div>`;
});
export {
  Contact_1 as C
};
