

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fa0c71ca.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.696fa2d4.js","_app/immutable/chunks/singletons.8e79482d.js"];
export const stylesheets = [];
export const fonts = [];
