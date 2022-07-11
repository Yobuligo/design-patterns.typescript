import { IMutableList } from "../core/collections/lists/IMutableList";
import { println } from "../core/Println";
import { IHaveChildren } from "./IHaveChildren";
import { Iterator } from "./Iterator";

class Folder implements IHaveChildren<Folder> {
  private children: Folder[] = [];

  constructor(readonly name: string) {}

  addChild(child: Folder): Folder {
    this.children.push(child);
    return this;
  }
  getChildren(): Folder[] {
    return this.children;
  }

  getTempChildren(): IMutableList<Folder> {
    throw new Error("Method not implemented.");
  }
}

function folder(name: string): Folder {
  return new Folder(name);
}

const myFolder = folder("1")
  .addChild(
    folder("1.1")
      .addChild(folder("1.1.1"))
      .addChild(folder("1.1.2"))
      .addChild(
        folder("1.1.3").addChild(folder("1.1.3.1")).addChild(folder("1.1.3.2"))
      )
      .addChild(folder("1.1.4"))
  )
  .addChild(folder("1.2").addChild(folder("1.2.1")).addChild(folder("1.2.2")));

const iterator = new Iterator(myFolder);
while (iterator.hasNext()) {
  println(iterator.next().name);
}
