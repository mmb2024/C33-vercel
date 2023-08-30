import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute } from "./index3.js";
import { p as page } from "./stores.js";
const Seo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { description } = $$props;
  let { type } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  url = $page.url.href;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-7wy0xn_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta name="description"${add_attribute("content", description, 0)}><!-- HTML_TAG_START -->${`<script type="application/ld+json">
{
    "@context": "http://schema.org",
    "@type": "${type}",
      "name": "${title}",
      "description": "${description}",
      "url": "${url}",
    }
  <\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-7wy0xn_END -->`, ""}`;
});
export {
  Seo as S
};
