namespace ServiceProvider {
  interface IServiceProvider {
    fetch<T extends ServiceDefinition<any>, K extends keyof T>(
      serviceDefinition: new () => T
    ): T[K] | undefined;

    set<T extends ServiceDefinition<any>, K extends keyof T>(
      serviceDefinition: new () => T,
      service: T[K]
    ): void;
  }

  class ServiceDefinition<TService> {
    readonly _instance: TService = {} as TService;
  }

  class ServiceProvider implements IServiceProvider {
    private services: Map<new () => ServiceDefinition<any>, any> = new Map();

    fetch<T extends ServiceDefinition<any>, K extends keyof T>(
      serviceDefinition: new () => T
    ): T[K] | undefined {
      return this.services.get(serviceDefinition);
    }

    set<T extends ServiceDefinition<any>, K extends keyof T>(
      serviceDefinition: new () => T,
      service: T[K]
    ): void {
      this.services.set(serviceDefinition, service);
    }
  }

  interface IFactory {
    create<T>(type: new () => T): T;
  }

  class Factory implements IFactory {
    create<T>(type: new () => T): T {
      return new type();
    }
  }

  class FactoryService extends ServiceDefinition<IFactory> {}

  class Person {}

  const serviceProvider: IServiceProvider = new ServiceProvider();
  serviceProvider.set(FactoryService, new Factory());
  serviceProvider.fetch(FactoryService)?.create(Person);
}
