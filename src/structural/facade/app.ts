namespace Facade {
  interface IDBConnector {
    fetchData(): string;
    save(data: string): void;
  }

  interface IDataConverter {
    toObjects(data: any): object[];
  }

  interface IObjectConverter {
    toData(objects: object[]): any;
  }

  interface IObjectCache {
    cache(object: object[]): void;
  }

  interface IORMFacade {
    readonly dbConnector: IDBConnector;
    readonly objectConverter: IObjectConverter;
    readonly objectCache: IObjectCache;
    readonly dataConverter: IDataConverter;
  }

  class DBConnector implements IDBConnector {
    fetchData(): string {
      console.log(`I am responsible for fetching data from the data base`);
      return "my Data";
    }

    save(data: string): void {
      console.log(`I am responsible for saving data to the data base`);
    }
  }

  class DataConverter implements IDataConverter {
    toObjects(data: any): object[] {
      console.log(`I am responsible for converting data to objects`);
      return [];
    }
  }

  class ObjectConverter implements IObjectConverter {
    toData(objects: object[]): any {
      console.log(`I am responsible for converting objects to a data format`);
    }
  }

  class ObjectCache implements IObjectCache {
    cache(object: object[]): void {
      console.log(`I am responsible for caching objects`);
    }
  }

  class ORMFacade implements IORMFacade {
    readonly dbConnector: IDBConnector = new DBConnector();
    readonly objectConverter: IObjectConverter = new ObjectConverter();
    readonly objectCache: IObjectCache = new ObjectCache();
    readonly dataConverter: IDataConverter = new DataConverter();
  }

  const ormFacade = new ORMFacade();
  const data = ormFacade.dbConnector.fetchData();
  const objects = ormFacade.dataConverter.toObjects(data);
  ormFacade.objectCache.cache(objects);
  const newData = ormFacade.objectConverter.toData(objects);
  ormFacade.dbConnector.save(newData);
}
