import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
import { PADDLE_SPEED, PADDLE_WIDTH, 
  PADDLE_HEIGHT, PADDLE_STARTX, BALL_SPEED, 
  BALL_SIZE, BALL_STARTX, BALL_STARTY } from "./setup";

import { createBricks } from "./helpers";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo("GAME OVER !!");
  gameOver = false;
}

function setGameWin(view: CanvasView) {
  view.drawInfo("You WIN !!");
  gameOver = false;
}

function gameLoop(
  view: CanvasView, bricks: Brick[], paddle: Paddle
) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);

  if((paddle.isMovingLeft && paddle.position.x > 0) || 
  (paddle.isMovingRight && paddle.position.x < view.canvas.width - paddle.width)) {
    paddle.movePaddle()
  }

  requestAnimationFrame(() => gameLoop(view, bricks, paddle));
}

function startGame(view: CanvasView) {
  score = 0;
  view.drawInfo('');
  view.drawScore(score);

  const bricks = createBricks();
  const paddle = new Paddle(
    PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, 
    { x: PADDLE_STARTX, y: view.canvas.height - PADDLE_HEIGHT - 5}, 
    PADDLE_IMAGE
  )

  gameLoop(view, bricks, paddle);
}


const view = new CanvasView('#playField');
view.initStartButton(startGame);















