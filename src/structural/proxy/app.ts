namespace ProxyPattern {
  interface IDataProvider {
    data: string;
  }

  class DataProvider implements IDataProvider {
    constructor(public data: string) {}
  }

  class ProxyDataProvider implements IDataProvider {
    private loggedIn: boolean = false;

    constructor(private dataProvider: IDataProvider, private secret: string) {}

    login(secret: string): void {
      this.loggedIn = secret === this.secret;
    }

    get data(): string {
      if (this.loggedIn) {
        return this.dataProvider.data;
      } else {
        return "";
      }
    }
  }

  const dataProvider = new ProxyDataProvider(
    new DataProvider("my secret data"),
    "mySecret"
  );

  console.log(dataProvider.data);
  dataProvider.login("mySecret");
  console.log(dataProvider.data);
}
