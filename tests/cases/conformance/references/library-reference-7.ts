// @noImplicitReferences: true

// The primary lookup folder is relative to tsconfig.json's 'root', if present

// @filename: base/types/alpha/index.d.ts
declare var alpha: { a: string };

// @filename: base/src/foo.ts
/// <reference types="alpha" />
var x: string = alpha.a;

// @filename: tsconfig.json
{
    "compilerOptions": {
        "rootDir": "base"
    }
}
