export const getSpaces = (
  x: number,
  y: number,
  separatorSize: number,
  cellSize: number,
) => {
  return {
    left: (separatorSize + cellSize) * x,
    top: (separatorSize + cellSize) * y,
  };
};
