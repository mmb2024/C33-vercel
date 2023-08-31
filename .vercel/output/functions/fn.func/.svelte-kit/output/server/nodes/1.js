

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c755e2da.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.a273ba16.js","_app/immutable/chunks/singletons.c98337b0.js"];
export const stylesheets = [];
export const fonts = [];
