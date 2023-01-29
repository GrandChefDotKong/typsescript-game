import { Vector } from '../types';


export class Ball {

  private ballSpeed: Vector;
  private ballImage: HTMLImageElement = new Image();

  constructor( private ballSize: number, private ballPostion: Vector,
    speed: number, image: string) {
      this.ballSize = ballSize;
      this.ballPostion = ballPostion;
      this.ballImage.src = image;
      this.ballSpeed = {
        x: speed,
        y: -speed
      }
    }

    get width(): number {
      return this.ballSize
    }

    get height(): number {
      return this.ballSize
    }

    get speed(): Vector {
      return this.ballSpeed;
    }

    get position(): Vector {
      return this.ballPostion;
    }

    get image(): HTMLImageElement {
      return this.ballImage;
    }

    changeYDirection(): void {
      this.speed.y = -this.speed.y;
    }

    changeXDirection(): void {
      this.speed.x = -this.speed.x;
    }
    
    moveBall(): void {
      this.ballPostion.x += this.speed.x;
      this.ballPostion.y += this.speed.y;
    }
    
    

} 