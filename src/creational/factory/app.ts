namespace Factory {
  interface IProduct {
    title: string;
  }

  interface IFactory {
    create(title: string): IProduct;
  }

  class Product implements IProduct {
    constructor(public title: string) {}
  }

  class Factory implements IFactory {
    create(title: string): IProduct {
      return new Product(title);
    }
  }

  const factory = new Factory();
  const product = factory.create("First Product");
  console.log(`Product is '${product.title}'`);
}
