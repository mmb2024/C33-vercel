

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9f1ac246.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.54b06be4.js","_app/immutable/chunks/singletons.e1ee97e1.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a9eb63.css"];
export const fonts = [];
