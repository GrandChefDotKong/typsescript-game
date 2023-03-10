import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { Collision } from "./Collision";

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
import { PADDLE_SPEED, PADDLE_WIDTH, 
  PADDLE_HEIGHT, PADDLE_STARTX, BALL_SPEED, 
  BALL_SIZE, BALL_STARTX, BALL_STARTY } from "./setup";

import { createBricks } from "./helpers";

let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("GAME OVER");
}

function setGameWin(view: CanvasView) {
  view.drawInfo("You WIN !!");
}

function gameLoop(
  view: CanvasView, bricks: Brick[], paddle: Paddle, ball: Ball, 
  collision: Collision
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);

  ball.moveBall();

  collision.checkBallCollision(ball, paddle, view);
  collision.checkBricksCollision(ball, bricks);

  if(bricks.length === 0) {
    setGameWin(view);
  }

  if(ball.position.y + ball.height > view.canvas.height ) {
    setGameOver(view);
  }

  if((paddle.isMovingLeft && paddle.position.x > 0) || 
  (paddle.isMovingRight && paddle.position.x < view.canvas.width - paddle.width)) {
    paddle.movePaddle()
  }

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

function startGame(view: CanvasView) {
  score = 0;
  view.drawInfo('');
  view.drawScore(score);

  const collision = new Collision();

  const bricks = createBricks();

  const ball = new Ball(BALL_SIZE, { x: BALL_STARTX, y: BALL_STARTY },
    BALL_SPEED, BALL_IMAGE);

  const paddle = new Paddle(
    PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, 
    { x: PADDLE_STARTX, y: view.canvas.height - PADDLE_HEIGHT - 5}, 
    PADDLE_IMAGE
  );

  gameLoop(view, bricks, paddle, ball, collision);
}


const view = new CanvasView('#playField');
view.initStartButton(startGame);















