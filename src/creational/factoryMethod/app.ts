namespace FactoryMethod {
  interface IProduct {
    title: string;
  }

  class Product implements IProduct {
    constructor(public title: string) {}
  }

  class Creator {
    create(title: string): IProduct {
      return new Product(title);
    }

    doSomething() {
      console.log(`has some business logic and creates specific objects.`);
    }
  }

  const creator = new Creator();
  const product = creator.create("New Product");
  console.log(`Created product was '${product.title}'`);
}
