

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.22f1e5b1.js","_app/immutable/chunks/index.98cbe372.js"];
export const stylesheets = [];
export const fonts = [];
