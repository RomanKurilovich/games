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
  direction: GESTURE.DIRECTION,
  snake: SnakeTypes.Snake,
) => {
  const nextPosition = getNextPosition(snake[0], direction);
  const previewHead = snake[1];

  return nextPosition.x !== previewHead.x || nextPosition.y !== previewHead.y;
};

export const getNextPosition = (
  startPosition: SnakeTypes.Coordinate,
  direction: GESTURE.DIRECTION,
) => {
  const nexPosition = { ...startPosition };

  switch (direction) {
    case GESTURE.DIRECTION.UP:
      nexPosition.y -= 1;
      break;
    case GESTURE.DIRECTION.DOWN:
      nexPosition.y += 1;
      break;
    case GESTURE.DIRECTION.LEFT:
      nexPosition.x -= 1;
      break;
    case GESTURE.DIRECTION.RIGHT:
      nexPosition.x += 1;
      break;
    default:
      break;
  }

  return nexPosition;
};
