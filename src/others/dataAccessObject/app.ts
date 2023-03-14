namespace DataAccessObject {
  interface IDataObject {
    id: string;
    value: string;
  }

  interface IDataAccessObject {
    findById(id: string): IDataObject | undefined;
    remove(dataObject: IDataObject): boolean;
    save(dataObject: IDataObject): void;
  }

  class DataObject implements IDataObject {
    constructor(public id: string, public value: string) {}
  }

  class DataAccessObject implements IDataAccessObject {
    private dataObjects: IDataObject[] = [];

    findById(id: string): IDataObject | undefined {
      return this.dataObjects.find((dataObject) => dataObject.id === id);
    }

    remove(dataObject: IDataObject): boolean {
      const index = this.dataObjects.indexOf(dataObject);
      return this.dataObjects.splice(index, 1) !== undefined;
    }
    
    save(dataObject: IDataObject): void {
      this.dataObjects.push(dataObject);
    }
  }

  const dataAccessObject = new DataAccessObject();
  dataAccessObject.save(new DataObject("1", "first"));
  dataAccessObject.save(new DataObject("2", "second"));

  const dataObject = dataAccessObject.findById("1");
  console.log(dataObject);
  if (dataObject) {
    dataAccessObject.remove(dataObject);
    console.log(dataAccessObject.findById("1"));
  }
}
