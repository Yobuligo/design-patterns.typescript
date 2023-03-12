declare class Singleton {
    private static instance;
    private constructor();
    static getInstance(): Singleton;
}
declare const singleton: Singleton;
