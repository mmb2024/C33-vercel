import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
import "devalue";
import { B as Button } from "../../../../chunks/Button.js";
import { S as Seo } from "../../../../chunks/Seo.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1fi4br{width:100%;padding:2em 0}h2.svelte-1fi4br{font-weight:500;font-size:1.5em}input.svelte-1fi4br,textarea.svelte-1fi4br{width:100%;padding:0.75em 1em;border-radius:0.25em;border:1px solid #999}.form-group.svelte-1fi4br{margin-bottom:1.5em}label.svelte-1fi4br{display:block;padding-bottom:0.5em}.success.svelte-1fi4br{color:rgb(39, 21, 237)}.error.svelte-1fi4br{border:1px solid red}.red.svelte-1fi4br{color:red}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="container svelte-1fi4br"><div class="col-md-10 h-100 d-flex justify-content-center align-items-center"><div class="col-md-9 rounded px-5 py-4 shadow bg-white text-left">${form?.success ? `<h4 class="success col-md-12 svelte-1fi4br">${escape(form?.status || "")}</h4>` : `<h2 class="svelte-1fi4br">Sus datos sólo se utilizarán para responder sus inquietudes.   Anuncio directo del propietario.</h2>
        <form method="POST"><div class="form-group svelte-1fi4br"><label class="col-md-5 control-label svelte-1fi4br" for="name">Nombre <span class="text-danger">*</span></label>
            <div class="col-md-8"><input id="name" name="name" type="text" placeholder="Digite su Nombre" class="${[
    "form-control form-control-lg svelte-1fi4br",
    form?.errors?.name ? "error" : ""
  ].join(" ").trim()}"${add_attribute("value", form?.name || "", 0)}>
              ${form?.errors?.name ? `<p class="red svelte-1fi4br">${escape(form?.errors?.name)}</p>` : ``}</div></div>

          <div class="form-group svelte-1fi4br"><label class="col-md-3 control-label svelte-1fi4br" for="lastname">Apellido <span class="text-danger">*</span></label>
            <div class="col-md-8"><input id="lastname" name="lastname" type="text" placeholder="Digite su Apellido" class="${[
    "form-control form-control-lg svelte-1fi4br",
    form?.errors?.lastname ? "error" : ""
  ].join(" ").trim()}"${add_attribute("value", form?.lastname || "", 0)}>
              ${form?.errors?.lastname ? `<p class="red svelte-1fi4br">${escape(form?.errors?.lastname)}</p>` : ``}</div></div>

          <div class="form-group svelte-1fi4br"><label class="col-md-3 control-label svelte-1fi4br" for="email">E-mail <span class="text-danger">*</span></label>
            <div class="col-md-8"><input id="email" name="email" type="text" placeholder="ex: suEmail@gmail.com" class="${[
    "form-control form-control-lg svelte-1fi4br",
    form?.errors?.email ? "error" : ""
  ].join(" ").trim()}"${add_attribute("value", form?.email || "", 0)}>
              ${form?.errors?.email ? `<p class="red svelte-1fi4br">${escape(form?.errors?.email)}</p>` : ``}</div></div>

          <div class="form-group svelte-1fi4br"><label class="col-md-3 control-label svelte-1fi4br" for="message">Mensaje</label>
            <div class="col-md-8"><textarea class="${[
    "form-control form-control-lg svelte-1fi4br",
    form?.errors?.message ? "error" : ""
  ].join(" ").trim()}" id="message" name="message" rows="4" placeholder="Por favor ingrese su requerimiento aqui....">${escape(form?.message || "", false)}</textarea>
              ${form?.errors?.message ? `<p class="red svelte-1fi4br">${escape(form?.errors?.message)}</p>` : ``}</div></div>

          <div class="col-8 form-group text-center svelte-1fi4br"><div class="btn btn-vue btn-lg col-4">${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Enviar`;
    }
  })}</div></div></form>`}</div></div></div>


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
