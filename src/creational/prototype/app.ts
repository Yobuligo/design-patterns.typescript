namespace Prototype {
  class Cell {
    private _name: string = "Alfred";

    constructor(readonly cloneCycles: number) {}

    clone(): Cell {
      if (this.cloneCycles === 0) {
        throw new Error("Cell is not cloneable anymore.");
      }
      const cell = new Cell(this.cloneCycles - 1);
      cell._name = this._name;
      return cell;
    }

    get name(): string {
      return this._name;
    }
  }

  const cloneCell = (cell: Cell): Cell => {
    cell = cell.clone();
    console.log(
      `I am the cell '${cell.name}' and can be cloned '${cell.cloneCycles}' times more.`
    );
    return cell;
  };

  try {
    let cell = new Cell(3);
    cell = cloneCell(cell);
    cell = cloneCell(cell);
    cell = cloneCell(cell);
    cell = cloneCell(cell);
  } catch (error) {
    console.log((error as Error).message);
  }
}
