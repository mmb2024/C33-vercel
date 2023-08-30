

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.de6031db.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.01a9d030.js","_app/immutable/chunks/singletons.cd162891.js"];
export const stylesheets = ["_app/immutable/assets/0.f4a9eb63.css"];
export const fonts = [];
