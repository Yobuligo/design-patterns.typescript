namespace Visitor {
  interface IVisitor {
    visitButton(button: Button): void;
    visitInput(input: Input): void;
    visitFrame(frame: Frame): void;
  }

  interface IVisitable {
    accept(visitor: IVisitor): void;
  }

  interface IComponent extends IVisitable {
    components: IComponent[];
    addComponent(component: IComponent): void;
  }

  class Visitor implements IVisitor {
    visitButton(button: Button): void {
      console.log(`Visit button with caption '${button.caption}'`);
    }

    visitInput(input: Input): void {
      console.log(`Visit input with value '${input.value}'`);
    }

    visitFrame(frame: Frame): void {
      console.log(`Visit frame with title '${frame.title}'`);
    }
  }

  abstract class Component implements IComponent {
    private _components: IComponent[] = [];

    addComponent(component: IComponent): void {
      this._components.push(component);
    }

    get components(): IComponent[] {
      return this._components;
    }

    abstract accept(visitor: IVisitor): void;
  }

  class Button extends Component {
    caption: string = "Button caption";
    accept(visitor: IVisitor): void {
      visitor.visitButton(this);
    }
  }

  class Input extends Component {
    value: string = "Input value";
    accept(visitor: IVisitor): void {
      visitor.visitInput(this);
    }
  }

  class Frame extends Component {
    title: string = "Frame title";
    accept(visitor: IVisitor): void {
      visitor.visitFrame(this);
    }
  }

  const frame = new Frame();
  frame.addComponent(new Button());
  frame.addComponent(new Input());

  const visitor = new Visitor();
  for (const component of [frame, ...frame.components]) {
    component.accept(visitor);
  }
}
