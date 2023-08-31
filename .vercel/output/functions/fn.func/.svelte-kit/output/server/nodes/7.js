import * as server from '../entries/pages/(pages)/contact/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(pages)/contact/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(pages)/contact/+page.server.js";
export const imports = ["_app/immutable/nodes/7.98381ba8.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.c98337b0.js","_app/immutable/chunks/Button.a5692787.js","_app/immutable/chunks/Seo.2e16d006.js","_app/immutable/chunks/stores.a273ba16.js"];
export const stylesheets = ["_app/immutable/assets/7.03e5666c.css","_app/immutable/assets/Button.66c9d981.css"];
export const fonts = [];
