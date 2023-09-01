

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(pages)/services/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.42990493.js","_app/immutable/chunks/index.44e5ef1f.js","_app/immutable/chunks/Seo.3c3d4fa8.js","_app/immutable/chunks/stores.3fbbb503.js","_app/immutable/chunks/singletons.09a374f4.js","_app/immutable/chunks/Trigger.295058cb.js","_app/immutable/chunks/Button.07b45713.js"];
export const stylesheets = ["_app/immutable/assets/8.c442c457.css","_app/immutable/assets/Trigger.45d013d5.css","_app/immutable/assets/Button.66c9d981.css"];
export const fonts = [];
