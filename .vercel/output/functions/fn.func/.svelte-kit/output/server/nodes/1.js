

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.4ae07aed.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.5a207278.js","_app/immutable/chunks/singletons.42600e90.js"];
export const stylesheets = [];
export const fonts = [];
