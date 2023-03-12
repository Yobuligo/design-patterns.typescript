interface IProduct {
    title: string;
}
interface IFactory {
    create(title: string): IProduct;
}
declare class Product implements IProduct {
    title: string;
    constructor(title: string);
}
declare class Factory implements IFactory {
    create(title: string): IProduct;
}
declare const factory: Factory;
declare const product: IProduct;
