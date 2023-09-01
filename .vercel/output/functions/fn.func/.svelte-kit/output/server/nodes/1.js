

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.98c75168.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.3fbbb503.js","_app/immutable/chunks/singletons.09a374f4.js"];
export const stylesheets = [];
export const fonts = [];
