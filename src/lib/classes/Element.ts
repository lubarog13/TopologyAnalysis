import { defaultElement, elementsList, type LayoutElement } from "../../utils/consts/elements.list";

export class Element {
    name: string;
    code: string;
    layoutColor: LayoutElement;
    cellX: number ;
    cellY: number ;
    cellX_k: number ;
    cellY_k: number ;
    positions: Array<number>;
    layout: number;
    rotation?: number;
    coords: Array<number> = [];
    constructor(name: string, code: string, positions: Array<number> | string, layout: number, rotation = 0) {
        this.name = name;
        this.code = code;
        this.cellX = 0;
        this.cellY = 0;
        this.cellX_k = 1;
        this.cellY_k = 1;
        this.layoutColor = elementsList[code as keyof typeof elementsList] || defaultElement;
        if (typeof positions === 'string') {
            this.positions = positions.split(' ').map(Number);
        } else {
            this.positions = positions;
        }
        this.layout = layout;
        this.rotation = rotation;
        this.setCoords()
    }

    draw(ctx: CanvasRenderingContext2D) {
        try {
            if(this.layoutColor.visible) {
            ctx.fillStyle = this.layoutColor.color;
            ctx.fillRect(this.cellX + this.positions[0], 
                this.cellY + this.positions[1], 
                (this.positions[2] - this.positions[0]) * this.cellX_k, 
                (this.positions[5] - this.positions[1]) * this.cellY_k);
            }
        } catch (error) {
            throw new Error(`Error drawing element ${this.name}: ${error}`);
        }
    }

    setCoords() {
        this.coords = [this.cellY + (this.positions[1])*this.cellY_k, 
        this.cellX + (this.positions[2]) * this.cellX_k,
         this.cellY + (this.positions[5]) * this.cellY_k,
          this.cellX + (this.positions[0]) * this.cellX_k]
    }

    setPenaltyX(penaltyX: number) {
        if (this.cellX === 0) {
            this.positions[0] += penaltyX;
            this.positions[2] += penaltyX;
            this.positions[4] += penaltyX;
            this.positions[6] += penaltyX;
            this.setCoords();
        } else {
            this.cellX += penaltyX;
            this.setCoords();
        }
    }

    setPenaltyY(penaltyY: number) {
        if (this.cellY === 0) {
            this.positions[1] += penaltyY;
            this.positions[3] += penaltyY;
            this.positions[5] += penaltyY;
            this.positions[7] += penaltyY;
            this.setCoords();
        } else {
            this.cellY += penaltyY;
            this.setCoords();
        }
    }

    getSize(): [number, number] {
        return [(this.positions[2] - this.positions[0]) * this.cellX_k, (this.positions[5] - this.positions[1]) * this.cellY_k];
    }

}