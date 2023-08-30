

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.90613a7d.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.435e5635.js","_app/immutable/chunks/singletons.6cdb8a10.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a9eb63.css"];
export const fonts = [];
