export type CellValueType = 0;

export type Cell = {
  x: number;
  y: number;
  tiles: Array<Tile>;
  index: number;
};

export type Tile = {
  id: string;
  value: number;
};

export type Cells = Array<Cell>;

export type Tiles = Array<Tile>;

export type CellsGroup = Array<Cells>;

export type GroupedCells = {
  byColumn: CellsGroup;
  byRow: CellsGroup;
  byReversedColumn: CellsGroup;
  byReversedRow: CellsGroup;
};
