import * as server from '../entries/pages/(pages)/about/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(pages)/about/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(pages)/about/+page.server.js";
export const imports = ["_app/immutable/nodes/6.8fd423f1.js","_app/immutable/chunks/index.07371483.js"];
export const stylesheets = ["_app/immutable/assets/6.71b2721b.css"];
export const fonts = [];
