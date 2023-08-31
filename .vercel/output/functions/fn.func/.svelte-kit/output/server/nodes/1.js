

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7a5f3f74.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.1213061c.js","_app/immutable/chunks/singletons.1177cb7b.js"];
export const stylesheets = [];
export const fonts = [];
