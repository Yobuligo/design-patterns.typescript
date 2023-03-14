namespace Prototype {
  class Cell {
    private _cellCode: number | undefined;

    constructor(readonly dna: string, readonly cloneCycles: number) {}

    clone(): Cell {
      if (this.cloneCycles === 0) {
        throw new Error(`Cell with cell code '${this.cellCode}' is not cloneable anymore.`);
      }
      const cell = new Cell(this.dna, this.cloneCycles - 1);
      cell._cellCode = this.cellCode;
      return cell;
    }

    get cellCode(): number {
      if (!this._cellCode) {
        this._cellCode = new Date().getTime() * Math.random() * 10000;
      }
      return this._cellCode;
    }
  }

  const cloneCell = (cell: Cell): Cell => {
    cell = cell.clone();
    console.log(
      `I am cell with cell code '${cell.cellCode}', dna '${cell.dna}' and can be cloned '${cell.cloneCycles}' times.`
    );
    return cell;
  };

  try {
    let cell = new Cell("6712376", 3);
    cell = cloneCell(cell);
    cell = cloneCell(cell);
    cell = cloneCell(cell);
    cell = cloneCell(cell);
  } catch (error) {
    console.log((error as Error).message);
  }

  const cancer = new Cell("6712376", 3);
  cloneCell(cancer);
}
