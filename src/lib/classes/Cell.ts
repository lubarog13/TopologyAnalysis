import { Element } from "./Element";

export class Cell {
    id: number;
    x_coord: number;
    y_coord: number;
    x_k: number;
    y_k: number;
    width: number;
    height: number;
    elements: Element[];

    constructor(
        id: number,
        x_coord: number, 
        y_coord: number, 
        x_k: number = 1, 
        y_k: number = 1, 
        width: number = 0, 
        height: number = 0
    ) {
        this.id = id;
        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.x_k = x_k;
        this.y_k = y_k;
        this.width = width;
        this.height = height;
        this.elements = [];
    }

    setCoords(x: number, y: number) {
        this.x_coord = x;
        this.y_coord = y;
        this.elements.forEach(element => {
            element.cellX = this.x_coord;
            element.cellY = this.y_coord;
        })
    }

    setX_k(x_k: number) {
        this.x_k = x_k;
    }
    setY_k(y_k: number) {
        this.y_k = y_k;
    }

    setWidth(width: number) {
        this.width = width;
    }
    setHeight(height: number) {
        this.height = height;
    }
    
    addElement(element: Element) {
        element.cellX = this.x_coord;
        element.cellY = this.y_coord;
        element.cellX_k = this.x_k;
        element.cellY_k = this.y_k;
        this.elements.push(element);
    }
    draw(ctx: CanvasRenderingContext2D) {
        this.elements.sort((a, b) => a.layout - b.layout);
        this.elements.forEach(element => element.draw(ctx));
    }

    setElementsFromDescription(description: Array<string>): void {
        description = description.map((it) => it.trim());
        let temp = description[0].split(' ');
        this.x_k = Number(temp[2]);
        this.y_k = Number(temp[3]);
        temp =  description[1].split(' ');
        let name = ''
        let i = 2;
        let layout = 0;
        for(;i<description.length;) {
            if(description[i].startsWith('9')) {
                name = description[i].split(' ')[1]
            }
            if (description[i].startsWith('L') && description[i+1]?.startsWith('P')) {
                temp = description[i+1].split(' ');
                let element = new Element(
                    name,
                    description[i].split(' ')[1],
                    temp.slice(1).map(it => Number(it)),
                    layout
                );
                this.addElement(element);
                layout ++;
                i++;
            }
            i++;
        }
    }
}