

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d89f552c.js","_app/immutable/chunks/index.07371483.js","_app/immutable/chunks/stores.95768061.js","_app/immutable/chunks/singletons.d2d8baf6.js"];
export const stylesheets = ["_app/immutable/assets/0.96292c3c.css"];
export const fonts = [];
