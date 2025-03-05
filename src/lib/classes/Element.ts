import { elementsList } from "../../utils/consts/elements.list";

export class Element {
    name: string;
    code: string;
    image: string;
    cellX: number;
    cellY: number;
    xPos: number;
    yPos: number;
    layout: number;
    width: number;
    height: number;
    rotation?: number;
    constructor(name: string, code: string, width: number, height: number, cellX: number, cellY: number, xPos: number, yPos: number, layout: number, rotation = 0) {
        this.name = name;
        this.code = code;
        this.width = width;
        this.height = height;
        this.image = elementsList[code as keyof typeof elementsList] || 'default.svg';
        this.cellX = cellX;
        this.cellY = cellY;
        this.xPos = xPos;
        this.yPos = yPos;
        this.layout = layout;
        this.rotation = rotation;
    }
}