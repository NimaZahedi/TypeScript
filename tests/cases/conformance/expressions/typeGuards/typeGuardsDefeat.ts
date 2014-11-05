// Also note that it is possible to defeat a type guard by calling a function that changes the 
// type of the guarded variable.
function foo(x: number | string) {
    function f() {
        x = 10;
    }
    if (typeof x === "string") {
        f();
        return x.length; // string
    }
    else {
        return x++; // number
    }
}
function foo2(x: number | string) {
    if (typeof x === "string") {
        return x.length; // string
    }
    else {
        (function f() {
            x = 10;
        })();
        return x++; // number
    }
}
function foo3(x: number | string) {
    if (typeof x === "string") {
        return x.length; // string
    }
    else {
        (() => {
            x = 10;
        })();
        return x++; // number
    }
}