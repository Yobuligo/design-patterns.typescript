namespace Decorator {
  interface IArticle {
    readonly name: string;
    readonly price: number;
  }

  class Article implements IArticle {
    constructor(readonly name: string, readonly price: number) {}
  }

  class FoodTax implements IArticle {
    constructor(private article: IArticle) {}

    get name(): string {
      return this.article.name;
    }

    get price(): number {
      return this.article.price * 1.07;
    }
  }

  class ValueTax implements IArticle {
    constructor(private article: IArticle) {}

    get name(): string {
      return this.article.name;
    }

    get price(): number {
      return this.article.price * 1.19;
    }
  }

  const displayArticle = (article: IArticle, tax: IArticle) => {
    console.log(
      `Price of a '${article.name}' with tax '${tax.price.toFixed(
        2
      )}', before '${article.price.toFixed(2)}'`
    );
  };

  const steak = new Article(`Steak`, 3);
  const pen = new Article(`Pen`, 3);
  const foodTax = new FoodTax(steak);
  const valueTax = new ValueTax(pen);
  displayArticle(steak, foodTax);
  displayArticle(pen, valueTax);
}
