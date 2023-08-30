

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f8af1954.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.01a9d030.js","_app/immutable/chunks/singletons.cd162891.js"];
export const stylesheets = [];
export const fonts = [];
