import { c as create_ssr_component, v as validate_component, f as compute_rest_props, a as subscribe, s as setContext, g as set_store_value, d as add_attribute, h as getContext, i as spread, j as escape_attribute_value, k as escape_object } from "./index3.js";
import { B as Button } from "./Button.js";
import { w as writable } from "./index2.js";
const Contact_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".contact.svelte-g2ai95{display:block;margin-left:auto;margin-right:auto;padding:1em;width:50%;background-color:rgba(240, 242, 245, 0.808)}.action.svelte-g2ai95{margin-left:auto;margin-right:auto;width:60%;font-size:1.2em}h3.svelte-g2ai95{padding-top:0.5em;margin-bottom:0.5em;font-size:1.8em;font-weight:400;border-bottom:1px solid #ddd;color:#f19576}p.svelte-g2ai95{line-height:1.3em;font-size:1.4em;font-weight:400}a.svelte-g2ai95{text-decoration:none;color:var(--primary-color);color:#0a84ff}a.svelte-g2ai95:hover{text-decoration:underline}",
  map: null
};
const Contact_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
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
const id = writable();
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["big", "fullscreen", "small", "button", "basic", "close"]);
  let $id, $$unsubscribe_id;
  $$unsubscribe_id = subscribe(id, (value) => $id = value);
  let { big = false } = $$props;
  let { fullscreen = false } = $$props;
  let { small = false } = $$props;
  let { button = true } = $$props;
  let { basic = false } = $$props;
  let { close = false } = $$props;
  setContext("modalId", Symbol());
  setContext("fullscreen", fullscreen);
  setContext("big", big);
  setContext("small", small);
  setContext("button", button);
  setContext("basic", basic);
  setContext("rest", $$restProps);
  if ($$props.big === void 0 && $$bindings.big && big !== void 0)
    $$bindings.big(big);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.basic === void 0 && $$bindings.basic && basic !== void 0)
    $$bindings.basic(basic);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  {
    {
      if (close)
        set_store_value(id, $id = false, $id);
    }
  }
  $$unsubscribe_id();
  return `${slots.default ? slots.default({}) : ``}`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ref;
  return `<template><div${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div></template>`;
});
const Content_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal__container.svelte-19gxchb{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.4)}.modal__content.svelte-19gxchb{position:relative;max-width:800px;width:80%;top:50%;left:0;right:0;margin:auto;transform:translateY(-50%)}.modal__fullscreen.svelte-19gxchb{top:0;left:0;right:0;bottom:0;height:100%;width:100%;max-width:100%;transform:translateY(0)}.modal__big.svelte-19gxchb{max-width:100%}.modal__basic.svelte-19gxchb{background-color:white;border-radius:0.25rem;padding:0.5rem 1rem}.modal__small.svelte-19gxchb{max-width:400px}.close__button.svelte-19gxchb{position:absolute;background:none;border:none;top:-0.75rem;right:-0.75rem;color:rgb(233, 71, 71);cursor:pointer;transition-duration:200ms}.close__button.svelte-19gxchb:hover,.close__button.svelte-19gxchb:focus{transform:scale(1.1);color:rgb(214, 69, 69)}.hidden.svelte-19gxchb{display:none}.modal__content *{max-width:100%}",
  map: null
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let $id, $$unsubscribe_id;
  $$unsubscribe_id = subscribe(id, (value) => $id = value);
  const modalId = getContext("modalId");
  const small = getContext("small");
  const big = getContext("big");
  const fullscreen = getContext("fullscreen");
  const button = getContext("button");
  const basic = getContext("basic");
  let rest = getContext("rest");
  const modalClass = rest.class;
  delete rest.class;
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$1);
  $$unsubscribe_id();
  return `${validate_component(Portal, "Portal").$$render($$result, {}, {}, {
    default: () => {
      return `<div${spread(
        [
          {
            class: escape_attribute_value(`modal__container ${modalClass ? modalClass : ""}`)
          },
          escape_object(rest),
          { role: "dialog" }
        ],
        {
          classes: (modalId !== $id ? "hidden" : "") + " svelte-19gxchb"
        }
      )}><div${spread(
        [
          {
            class: escape_attribute_value(`modal__content ${className ? className : ""}`)
          },
          escape_object($$restProps)
        ],
        {
          classes: (fullscreen ? "modal__fullscreen" : "") + " " + (big ? "modal__big" : "") + " " + (basic ? "modal__basic" : "") + " " + (small ? "modal__small" : "") + " svelte-19gxchb"
        }
      )}>${button ? `<button class="close__button svelte-19gxchb"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" stroke="currentColor" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></path><path stroke="#fff" stroke-linecap="round" d="M29.6569 18.3431L18.3432 29.6568"></path><path stroke="#fff" stroke-linecap="round" d="M18.3432 18.3431L29.6569 29.6568"></path></g></svg></button>` : ``}
      ${modalId == $id ? `${slots.default ? slots.default({}) : ``}` : ``}</div></div>`;
    }
  })}

`;
});
const Trigger_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-1auwst5:hover{cursor:pointer}",
  map: null
};
const Trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let $$unsubscribe_id;
  $$unsubscribe_id = subscribe(id, (value) => value);
  let { class: className = "" } = $$props;
  getContext("modalId");
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css);
  $$unsubscribe_id();
  return `<span${spread(
    [
      {
        class: escape_attribute_value(className ? className : "")
      },
      escape_object($$restProps)
    ],
    { classes: "svelte-1auwst5" }
  )}>${slots.default ? slots.default({}) : ``}
</span>`;
});
export {
  Content as C,
  Modal as M,
  Trigger as T,
  Contact_1 as a
};
