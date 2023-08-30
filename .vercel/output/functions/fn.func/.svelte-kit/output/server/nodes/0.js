

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.78e0442f.js","_app/immutable/chunks/index.98cbe372.js","_app/immutable/chunks/stores.ae625890.js","_app/immutable/chunks/singletons.0d710789.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a9eb63.css"];
export const fonts = [];
