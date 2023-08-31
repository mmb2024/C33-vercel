

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ac9f19ae.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.28c248bf.js","_app/immutable/chunks/singletons.8715804b.js"];
export const stylesheets = [];
export const fonts = [];
