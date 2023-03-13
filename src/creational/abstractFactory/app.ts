namespace AbstractFactory {
  interface IElement {
    name: string;
  }

  interface IButton extends IElement {}

  interface IInput extends IElement {}

  interface ITable extends IElement {}

  interface IAbstractFactory {
    createButton(): IButton;
    createInput(): IInput;
    createTable(): ITable;
  }

  class ABAPButton implements IButton {
    name: string = "ABAP Button";
  }

  class ABAPInput implements IInput {
    name: string = "ABAP Input";
  }

  class ABAPTable implements ITable {
    name: string = "ABAP Table";
  }

  class HTMLButton implements IButton {
    name: string = "HTML Button";
  }

  class HTMLInput implements IInput {
    name: string = "HTML Input";
  }

  class HTMLTable implements ITable {
    name: string = "HTML Table";
  }

  class ABAPFactory implements IAbstractFactory {
    createButton(): IButton {
      return new ABAPButton();
    }

    createInput(): IInput {
      return new ABAPInput();
    }

    createTable(): ITable {
      return new ABAPTable();
    }
  }

  class HTMLFactory implements IAbstractFactory {
    createButton(): IButton {
      return new HTMLButton();
    }

    createInput(): IInput {
      return new HTMLInput();
    }

    createTable(): ITable {
      return new HTMLTable();
    }
  }

  const testFactory = (abstractFactory: IAbstractFactory) => {
    console.log(abstractFactory.createButton().name);
    console.log(abstractFactory.createInput().name);
    console.log(abstractFactory.createTable().name);
  };

  testFactory(new ABAPFactory());
  testFactory(new HTMLFactory());
}
