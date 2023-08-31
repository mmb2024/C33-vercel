

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.df570ee9.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.a273ba16.js","_app/immutable/chunks/singletons.c98337b0.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a9eb63.css"];
export const fonts = [];
