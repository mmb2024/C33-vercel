

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.04d0c97e.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.435e5635.js","_app/immutable/chunks/singletons.6cdb8a10.js"];
export const stylesheets = [];
export const fonts = [];
