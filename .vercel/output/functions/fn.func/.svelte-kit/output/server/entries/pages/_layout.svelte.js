import { c as create_ssr_component, e as escape, b as subscribe, d as each, f as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
const style = "";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-1vyimli{margin-top:auto;padding:3em 0;background-color:#0d2247;color:white}.container.svelte-1vyimli{text-align:center;line-height:0.6;font-size:1.2em;font-weight:400}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  $$result.css.add(css$3);
  return `<footer class="svelte-1vyimli"><div class="container svelte-1vyimli">Copyright ©mm  ${escape(year)}</div>
</footer>`;
});
const moon_svelte_svelte_type_style_lang = "";
const sun_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-10o301p{transition-duration:300ms}svg.svelte-10o301p:hover{color:yellow}",
  map: null
};
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="svelte-10o301p"><path fill="currentColor" d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"></path></svg>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-nzqlcz{padding:0.5em;background-color:#4c32d1;color:white;font-size:1.2em;position:fixed;width:100%}.container.svelte-nzqlcz{display:flex;align-items:center}ul.svelte-nzqlcz{display:flex;margin:0;margin-left:auto;list-style:none;font-size:1.3em}li.svelte-nzqlcz{margin-right:20px}h1.svelte-nzqlcz{margin:0;font-size:1.4em;font-weight:normal}a.svelte-nzqlcz{text-decoration:none;color:#aaa}.logo.svelte-nzqlcz{color:white;margin-left:0px}.active.svelte-nzqlcz{color:white}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let routeId;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navs = [
    { title: "Home", href: "/" },
    { title: "Mas Fotos", href: "/services" },
    { title: "Contacto", href: "/contact" },
    { title: "About", href: "/about" }
  ];
  $$result.css.add(css$1);
  url = $page.url.href;
  routeId = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="svelte-nzqlcz"><div class="container svelte-nzqlcz"><a class="logo svelte-nzqlcz" href="/"><h1 class="svelte-nzqlcz">MyHomes</h1></a>
    <ul class="svelte-nzqlcz">${each(navs, ({ title, href }) => {
    return `<li class="svelte-nzqlcz"><a${add_attribute("href", href, 0)}${add_attribute("title", title, 0)} class="${[
      "svelte-nzqlcz",
      (href === "/" ? routeId === "/" : url.includes(href)) ? "active" : ""
    ].join(" ").trim()}">${escape(title)}</a>
        </li>`;
  })}
      <li class="relative svelte-nzqlcz">${`<a class="sun svelte-nzqlcz"${add_attribute("href", "#", 0)}>${validate_component(Sun, "Sun").$$render($$result, {}, {}, {})}</a>`}</li></ul></div>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1vxg5qg{min-height:100vh;display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1vxg5qg">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
