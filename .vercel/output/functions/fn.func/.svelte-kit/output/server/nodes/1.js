

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.c9cca7a2.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.6d395c39.js","_app/immutable/chunks/singletons.d314cf43.js"];
export const stylesheets = [];
export const fonts = [];
