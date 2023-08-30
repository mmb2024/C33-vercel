

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/dashboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.83555453.js","_app/immutable/chunks/index.98cbe372.js"];
export const stylesheets = [];
export const fonts = [];
