namespace TemplateMethod {
  interface ITemplateProcessor {
    executeTemplate(): void;
  }

  class Selector {
    selectData(): string {
      return "my data";
    }
  }

  class Converter {
    convertData(data: string): string {
      let result: string = "";
      for (const char of data) {
        if (result === "") {
          result = char;
        } else {
          result += ` ${char}`;
        }
      }
      return result;
    }
  }

  class Inserter {
    insert(data: string) {
      console.log(`Inserted data '${data}'`);
    }
  }

  class TemplateProcessor implements ITemplateProcessor {
    constructor(
      private selector: Selector,
      private converter: Converter,
      private inserter: Inserter
    ) {}

    executeTemplate(): void {
      const data = this.selectData();
      console.log(`1. select data '${data}'`);
      const convertedData = this.convertData(data);
      console.log(`2. Convert data '${convertedData}'`);
      console.log(`3. Insert data`);
      this.insertData(convertedData);
    }

    private selectData(): string {
      return this.selector.selectData();
    }

    private convertData(data: string): string {
      return this.converter.convertData(data);
    }

    private insertData(data: string): void {
      this.inserter.insert(data);
    }
  }

  const templateProcessor = new TemplateProcessor(
    new Selector(),
    new Converter(),
    new Inserter()
  );
  templateProcessor.executeTemplate();
}
