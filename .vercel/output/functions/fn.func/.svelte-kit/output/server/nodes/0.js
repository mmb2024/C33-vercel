

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b0a00ad0.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.9b0920e7.js","_app/immutable/chunks/singletons.02d848e9.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a9eb63.css"];
export const fonts = [];
