

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a1bef76b.js","_app/immutable/chunks/index.07371483.js","_app/immutable/chunks/stores.59fd06db.js","_app/immutable/chunks/singletons.ee3933b4.js"];
export const stylesheets = ["_app/immutable/assets/0.96292c3c.css"];
export const fonts = [];
