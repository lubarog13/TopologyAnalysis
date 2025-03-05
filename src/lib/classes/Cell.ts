export class Cell {
    id: number;
    x: number;
    y: number;
    x_coord: number;
    y_coord: number;
    width: number;
    height: number;
    elements: Element[];
    constructor(id: number, x: number, y: number, x_coord: number, y_coord: number, width: number, height: number) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.width = width;
        this.height = height;
        this.elements = [];
    }
    addElement(element: Element) {
        this.elements.push(element);
    }
}