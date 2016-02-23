// @noImplicitReferences: true

// Secondary references may not be duplicated if they disagree in content

// @filename: node_modules/foo/index.d.ts
/// <reference library="alpha" />
declare var foo: any;

// @filename: node_modules/foo/node_modules/alpha/index.d.ts
declare var alpha: any;

// @filename: node_modules/bar/index.d.ts
/// <reference library="alpha" />
declare var bar: any;

// @filename: node_modules/bar/node_modules/alpha/index.d.ts
declare var alpha: {};

// @filename: src/root.ts
/// <reference library="foo" />
/// <reference library="bar" />
