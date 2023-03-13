namespace GameLoop {
  interface IComponent {
    render(): void;
    update(): void;
  }

  interface IGame {
    addComponent(component: IComponent): void;
    run(): void;
  }

  class Game implements IGame {
    private components: IComponent[] = [];

    addComponent(component: IComponent): void {
      this.components.push(component);
    }

    run(): void {
      console.log(" ");
      // actually while(true)
      for (let i = 0; i < 2; i++) {
        this.update();
        this.render();
      }
    }

    private update() {
      for (const component of this.components) {
        component.update();
      }
    }

    private render() {
      for (const component of this.components) {
        component.render();
      }
    }
  }

  class ComponentA implements IComponent {
    private value: number = 0;

    render(): void {
      console.log(`new value is '${this.value}'`);
    }
    update(): void {
      this.value++;
    }
  }

  const game = new Game();
  game.addComponent(new ComponentA());
  game.addComponent(new ComponentA());
  game.addComponent(new ComponentA());
  game.run();
}
