

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(pages)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8301ccee.js","_app/immutable/chunks/index.07371483.js"];
export const stylesheets = ["_app/immutable/assets/2.89ff395f.css"];
export const fonts = [];
