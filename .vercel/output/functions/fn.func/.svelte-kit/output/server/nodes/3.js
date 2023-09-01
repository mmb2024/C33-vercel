

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.96be0005.js","_app/immutable/chunks/index.44e5ef1f.js"];
export const stylesheets = [];
export const fonts = [];
