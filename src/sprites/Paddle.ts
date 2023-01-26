import { Vector } from '../types';


export class Paddle {
  
  private paddleImage: HTMLImageElement = new Image();
  private moveLeft: boolean;
  private moveRight: boolean;

  constructor(
    private speed: number, private paddleWidth: number, 
    private paddleHeight: number, private paddlePosition: Vector, image: string
  ) {
    this.speed = speed;
    this.paddleWidth = paddleWidth;
    this.paddleHeight = paddleHeight;
    this.paddlePosition = paddlePosition;
    this.moveLeft = false;
    this.moveRight = false;
    this.paddleImage.src = image;

    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('keyup', this.handleKeyup);
  }

  handleKeydown = (e: KeyboardEvent): void => {

    if(e.key === ('ArrowLeft' || e.code === 'ArrowLeft')) {
      this.moveLeft = true;
    }

    if(e.key === ('ArrowRight' || e.code === 'ArrowRight')) {
      this.moveRight = true;
    }
    
  }

  handleKeyup = (e: KeyboardEvent): void => {
    if(e.key === ('ArrowLeft' || e.code === 'ArrowLeft')) {
      this.moveLeft = false;
    }

    if(e.key === ('ArrowRight' || e.code === 'ArrowRight')) {
      this.moveRight = false;
    }


  }

  movePaddle(): void {
    if(this.moveLeft) this.position.x -= this.speed;
    if(this.moveRight) this.position.x += this.speed;

  }

  get width(): number {
    return this.paddleWidth
  }

  get height(): number {
    return this.paddleHeight
  }

  get position(): Vector {
    return this.paddlePosition;
  }

  get image(): HTMLImageElement {
    return this.paddleImage;
  }

  get isMovingLeft(): boolean {
    return this.moveLeft;
  }

  get isMovingRight(): boolean {
    return this.moveRight;
  }

} 


