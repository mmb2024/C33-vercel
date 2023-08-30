import { c as create_ssr_component, b as each, v as validate_component, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { M as Modal, C as Content, T as Trigger, a as Contact_1 } from "../../../../chunks/Trigger.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-1hhf432{display:grid;grid-template-columns:repeat(3, 1fr);gap:2em;padding:2em 0;font-size:1.5em;font-weight:400}.contact.svelte-1hhf432{grid-column:block;margin-left:auto;margin-right:auto;padding:50px}h3.svelte-1hhf432{padding-top:0.8em;padding-bottom:0.1em;margin-bottom:0.5em;font-size:2em;font-weight:400;border-bottom:1px solid #ddd}h2.svelte-1hhf432{font-size:1.5em;padding-bottom:0.6em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const posts = [
    {
      id: 1,
      title: "Fachada Principal",
      image: "C33facFront1.png",
      body: "Fachada Frontal"
    },
    {
      id: 2,
      title: "Fachada Posterior",
      image: "C33facPost.JPG",
      body: "Fachada Posterior"
    },
    {
      id: 3,
      title: "Sala",
      image: "C33living1.JPG",
      body: "Sala"
    },
    {
      id: 4,
      title: "Sala2",
      image: "C33living2.JPG",
      body: "Sala - Comedor - Bar"
    },
    {
      id: 5,
      title: "Corredor PA",
      image: "C33PAcorridor.JPG",
      body: "Corredor PA"
    },
    {
      id: 6,
      title: "Hall",
      image: "C33stairs1.JPG",
      body: "Hall Comedor - Sala"
    },
    {
      id: 7,
      title: "Gradas",
      image: "C33stairs2.JPG",
      body: "Gradas y Hall de Ingreso"
    },
    {
      id: 8,
      title: "Sala Estar PA",
      image: "C33studios1.JPG",
      body: "Estudio PA"
    },
    {
      id: 9,
      title: "Sala",
      image: "C33studios2.JPG",
      body: "Sala Doble Altura"
    }
  ];
  $$result.css.add(css);
  return `<div class="container"><h3 class="svelte-1hhf432">Areas amplias con mucha luz natural</h3>
  <div class="grid svelte-1hhf432">${each(posts, ({ id, title, image, body }) => {
    return `<div>${validate_component(Modal, "Modal").$$render($$result, { big: true, button: false }, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `<h2 class="svelte-1hhf432">${escape(title.substring(0, 20))}</h2>
            <img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} width="1000" height="800">
            
          `;
          }
        })}
          ${validate_component(Trigger, "Trigger").$$render($$result, {}, {}, {
          default: () => {
            return `<img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} width="380" height="300">
            <p>${escape(body.substring(0, 80))}</p>
          `;
          }
        })}
        `;
      }
    })}
      </div>`;
  })}</div>

  <div class="contact svelte-1hhf432"><h2 class="svelte-1hhf432">Contáctenos para una mejor información. </h2>
    <div>${validate_component(Contact_1, "Contact").$$render($$result, {}, {}, {})}</div></div></div>

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
