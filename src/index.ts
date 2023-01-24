import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Padddle } from "./sprites/Paddle";

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';
import { PADDLE_SPEED, PADDDLE_WIDTH, 
  PADDDLE_HEIGHT, PADDLE_STARTX, BALL_SPEED, 
  BALL_SIZE, BALL_STARTX, BALL_STARTY } from "./setup";

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
  view: CanvasView, bricks: Brick[], paddle: Padddle, ball: Ball
) {

}

function startGame(view: CanvasView) {

}


const view = new CanvasView('#playField');
view.initStartButton(startGame);















