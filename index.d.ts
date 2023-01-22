/*!
    @e53e04ac/hold/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

export declare type Get<T> = {
    (): T;
};

export declare type ValueOrGet<T> = T | Get<T>;

export declare type Hold = {
    <T>(x: Get<T>): Get<T>;
};

export declare type Unwrap = {
    <T>(x: ValueOrGet<T>): T;
};

export declare const hold: Hold;

export declare const unwrap: Unwrap;
