declare class Multiton {
    key: string;
    private static instances;
    private constructor();
    static getInstance(key: string): Multiton;
}
declare const multitonFirst: Multiton;
declare const multitonFirstBackup: Multiton;
declare const multitonSecond: Multiton;
declare const multitonSecondBackup: Multiton;
