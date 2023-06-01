export type Coordinate = {
  x: number;
  y: number;
};

export type Snake = Array<Coordinate>;

export type Boundaries = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};
