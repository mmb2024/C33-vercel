

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.76e93155.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.54b06be4.js","_app/immutable/chunks/singletons.e1ee97e1.js"];
export const stylesheets = [];
export const fonts = [];
