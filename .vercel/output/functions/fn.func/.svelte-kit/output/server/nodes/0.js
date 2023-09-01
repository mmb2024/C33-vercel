

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.22e28418.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.696fa2d4.js","_app/immutable/chunks/singletons.8e79482d.js"];
export const stylesheets = ["_app/immutable/assets/0.96292c3c.css"];
export const fonts = [];
