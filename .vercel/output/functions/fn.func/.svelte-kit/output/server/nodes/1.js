

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bc8c8e09.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.ae625890.js","_app/immutable/chunks/singletons.0d710789.js"];
export const stylesheets = [];
export const fonts = [];
