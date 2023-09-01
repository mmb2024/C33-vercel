

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8a1afa6e.js","_app/immutable/chunks/index.07371483.js","_app/immutable/chunks/stores.59fd06db.js","_app/immutable/chunks/singletons.ee3933b4.js"];
export const stylesheets = [];
export const fonts = [];
