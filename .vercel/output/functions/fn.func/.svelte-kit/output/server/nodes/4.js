

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.af43040e.js","_app/immutable/chunks/index.44e5ef1f.js"];
export const stylesheets = [];
export const fonts = [];
