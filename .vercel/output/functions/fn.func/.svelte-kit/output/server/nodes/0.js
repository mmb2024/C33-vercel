

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.b2ac5ec9.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.3fbbb503.js","_app/immutable/chunks/singletons.09a374f4.js"];
export const stylesheets = ["_app/immutable/assets/0.47afc7fd.css"];
export const fonts = [];
