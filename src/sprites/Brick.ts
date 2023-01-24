import { Vector } from '../types';


export class Brick {
  private brickImage: HTMLImageElement = new Image();
  
  constructor(
    private brickWidth: number, 
    private brickHeight: number, 
    private brickPosition: Vector, 
    private brickEnergy: number, 
    image: string,
  ) {
    this.brickWidth = brickWidth;
    this.brickHeight = brickHeight;
    this.brickEnergy = brickEnergy;
    this.brickPosition = brickPosition;
    this.brickImage.src = image;
  }

  get width(): number {
    return this.brickWidth
  }

  get height(): number {
    return this.brickHeight
  }

  get position(): Vector {
    return this.brickPosition;
  }

  get image(): HTMLImageElement {
    return this.brickImage;
  }

  get energy(): number {
    return this.brickEnergy;
  }


} 








