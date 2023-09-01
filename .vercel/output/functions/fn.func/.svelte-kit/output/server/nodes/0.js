

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.f9fae257.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/stores.cee2598b.js","_app/immutable/chunks/singletons.0f84f704.js"];
export const stylesheets = ["_app/immutable/assets/0.96292c3c.css"];
export const fonts = [];
