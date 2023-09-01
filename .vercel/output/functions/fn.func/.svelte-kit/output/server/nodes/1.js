

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e841f56b.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.578c56cb.js","_app/immutable/chunks/singletons.27c9114e.js"];
export const stylesheets = [];
export const fonts = [];
