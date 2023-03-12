interface IObjectPool<T extends object> {
    acquire(): T;
    acquireOrNull(): T | undefined;
    release(object: T): void;
}
declare class ObjectPool<T extends object> implements IObjectPool<T> {
    private acquired;
    private released;
    acquire(): T;
    acquireOrNull(): T | undefined;
    release(object: T): void;
    private error;
}
