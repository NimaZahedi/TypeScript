//// [tests/cases/conformance/references/library-reference-7.ts] ////

//// [index.d.ts]

// The primary lookup folder is relative to tsconfig.json's 'root', if present

declare var alpha: { a: string };

//// [foo.ts]
/// <reference library="alpha" />
var x: string = alpha.a;


//// [foo.js]
/// <reference library="alpha" />
var x = alpha.a;
