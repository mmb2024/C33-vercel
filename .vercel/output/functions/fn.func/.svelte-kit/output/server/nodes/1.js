

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.38d7e066.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.fa4040e7.js","_app/immutable/chunks/singletons.886cc544.js"];
export const stylesheets = [];
export const fonts = [];
