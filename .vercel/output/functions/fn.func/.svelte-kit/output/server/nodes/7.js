import * as server from '../entries/pages/(pages)/contact/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(pages)/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(pages)/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/7.314d237a.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.6cdb8a10.js","_app/immutable/chunks/Button.07b45713.js","_app/immutable/chunks/Seo.7c2eb920.js","_app/immutable/chunks/stores.435e5635.js"];
export const stylesheets = ["_app/immutable/assets/7.03e5666c.css","_app/immutable/assets/Button.66c9d981.css"];
export const fonts = [];
