/*!
    @e53e04ac/hold/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

/** @type {import('.').Hold} */
const hold = ((x) => {

    /** @typedef {ReturnType<typeof x>} T */

    /** @type {undefined | T} */
    let _value = undefined;

    /** @type {import('.').Get<T>} */
    const self = (() => {
        if (_value === undefined) {
            _value = x();
        }
        return _value;
    });

    return self;

});

/** @type {import('.').Unwrap} */
const unwrap = ((x) => {
    return (x instanceof Function ? x() : x);
});

export { hold };

export { unwrap };
