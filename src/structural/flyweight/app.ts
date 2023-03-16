namespace FlyWeight {
  interface IClassMeta {
    readonly name: string;
    readonly type: new () => any;
  }

  interface IClassMetaRepo {
    fetch(type: new () => any): IClassMeta;
  }

  interface IHaveClassMeta {
    readonly classMeta: IClassMeta;
  }

  class ClassMeta implements IClassMeta {
    constructor(readonly type: new () => any) {}

    get name(): string {
      return this.type.name;
    }
  }

  class ClassMetaRepo implements IClassMetaRepo {
    private classMetas: Map<new () => any, IClassMeta> = new Map();
    private static _instance: ClassMetaRepo | undefined;

    private constructor() {}

    static getInstance(): ClassMetaRepo {
      return this._instance ?? this.createInstance();
    }

    fetch(type: new () => any): IClassMeta {
      return this.find(type) ?? this.create(type);
    }

    private find(type: new () => any): IClassMeta | undefined {
      const classMeta = this.classMetas.get(type);
      if (classMeta) {
        console.log(`Fetch class meta from cache`);
      }
      return classMeta;
    }

    private create(type: new () => any): IClassMeta {
      const classMeta = new ClassMeta(type);
      this.classMetas.set(type, classMeta);
      console.log(`Fetch class meta by initialization`);
      return classMeta;
    }

    private static createInstance(): ClassMetaRepo {
      this._instance = new ClassMetaRepo();
      return this._instance;
    }
  }

  class Test implements IHaveClassMeta {
    get classMeta(): IClassMeta {
      return ClassMetaRepo.getInstance().fetch(Test);
    }
  }

  console.log(new Test().classMeta.name);
  console.log(new Test().classMeta.name);
  console.log(new Test().classMeta.name);
}
