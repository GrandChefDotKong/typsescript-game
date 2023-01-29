import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import { CanvasView } from "./view/CanvasView";
import { BRICK_IMAGES } from "./setup";


export class Collision {
  checkBrickCollision(ball: Ball, brick: Brick): boolean {
    let isColliding = false;

    if(ball.position.x + ball.width > brick.position.x &&
      ball.position.x < brick.position.x + brick.width &&
      ball.position.y + ball.height > brick.position.y &&
      ball.position.y < brick.position.y + brick.height) {
        isColliding = true;
      }

    return isColliding;
  }


  checkBricksCollision(ball: Ball, bricks: Brick[]): void {

    bricks.forEach((brick, i) => {
      if(this.checkBrickCollision(ball, brick)) {
        brick.energy--;

        if(brick.energy === 0) {
          bricks.splice(i, 1);
        }

        brick.image.src = BRICK_IMAGES[brick.energy];

        ball.changeYDirection();
      }
    })

  }

  checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView ): void {
    if(ball.position.x + ball.width > paddle.position.x &&
    ball.position.x < paddle.position.x + paddle.width &&
    ball.position.y + ball.height === paddle.position.y ) {
      ball.changeYDirection();
    }

    if(ball.position.x > view.canvas.width - ball.width ||  
    ball.position.x < 0) {
      ball.changeXDirection()
    }

    if(ball.position.y < 0) {
      ball.changeYDirection()
    }

  }
}