

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0fa68984.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.3721ef64.js","_app/immutable/chunks/singletons.1a34bdba.js"];
export const stylesheets = [];
export const fonts = [];
