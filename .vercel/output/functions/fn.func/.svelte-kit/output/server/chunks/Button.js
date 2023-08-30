import { c as create_ssr_component, f as compute_rest_props, i as spread, k as escape_object } from "./index3.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1lmobxj{border:none;border-radius:0.25em;background-color:var(--primary-color);color:white;font-size:1em;cursor:pointer}.medium.svelte-1lmobxj{padding:0.5em 1.5em}.small.svelte-1lmobxj{padding:0.25em 0.5em}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = "medium" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<button${spread([escape_object($$restProps)], {
    classes: (size === "small" ? "small" : "") + " " + (size === "medium" ? "medium" : "") + " svelte-1lmobxj"
  })}>${slots.default ? slots.default({}) : ``}
</button>`;
});
export {
  Button as B
};
