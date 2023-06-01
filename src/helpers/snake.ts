import { SnakeTypes } from 'types';
import { GESTURE } from 'names';

export const checkEatsFood = (
  head: SnakeTypes.Coordinate,
  food: SnakeTypes.Coordinate,
) => {
  return head.x === food.x && head.y === food.y;
};

export const checkGameOver = (
  snakeHead: SnakeTypes.Coordinate,
  boundaries: SnakeTypes.Boundaries,
  snake: SnakeTypes.Snake,
) => {
  const isCrashed = snake.find(
    (coords) => coords.x === snakeHead.x && coords.y === snakeHead.y,
  );

  return (
    isCrashed ||
    snakeHead.x < boundaries.xMin ||
    snakeHead.x > boundaries.xMax ||
    snakeHead.y < boundaries.yMin ||
    snakeHead.y > boundaries.yMax
  );
};

export const getRandomFoodPosition = (xMax: number, yMax: number) => {
  return {
    x: Math.floor(Math.random() * xMax),
    y: Math.floor(Math.random() * yMax),
  };
};

export const canMove = (
  updatedDirection: GESTURE.DIRECTION,
  direction: GESTURE.DIRECTION,
) => {
  return !(
    (updatedDirection === GESTURE.DIRECTION.DOWN &&
      direction === GESTURE.DIRECTION.UP) ||
    (updatedDirection === GESTURE.DIRECTION.UP &&
      direction === GESTURE.DIRECTION.DOWN) ||
    (updatedDirection === GESTURE.DIRECTION.RIGHT &&
      direction === GESTURE.DIRECTION.LEFT) ||
    (updatedDirection === GESTURE.DIRECTION.LEFT &&
      direction === GESTURE.DIRECTION.RIGHT)
  );
};
