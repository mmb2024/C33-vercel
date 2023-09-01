import * as server from '../entries/pages/(pages)/contact/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(pages)/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(pages)/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/7.db63ec3d.js","_app/immutable/chunks/index.07371483.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.ee3933b4.js","_app/immutable/chunks/Seo.535c7603.js","_app/immutable/chunks/stores.59fd06db.js"];
export const stylesheets = ["_app/immutable/assets/7.03e5666c.css","_app/immutable/assets/Button.66c9d981.css"];
export const fonts = [];
