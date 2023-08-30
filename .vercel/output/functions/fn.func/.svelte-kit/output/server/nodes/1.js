

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ca741752.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.1e10c50f.js","_app/immutable/chunks/singletons.383ee0e9.js"];
export const stylesheets = [];
export const fonts = [];
