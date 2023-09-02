

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b6f014e7.js","_app/immutable/chunks/index.07371483.js","_app/immutable/chunks/stores.95768061.js","_app/immutable/chunks/singletons.d2d8baf6.js"];
export const stylesheets = [];
export const fonts = [];
