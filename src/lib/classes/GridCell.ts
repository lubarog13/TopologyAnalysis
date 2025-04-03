import type { LayoutElement } from "../../utils/consts/elements.list"
import type { Element } from "./Element"

export class GridCell {
    x_coord: number
    y_coord: number
    width: number
    height: number
    elements: {[index: string]: number}
    constructor(x_coord: number, y_coord: number, width: number, height: number) {
        this.x_coord = x_coord
        this.y_coord = y_coord;
        this.width = width;
        this.height = height;
        this.elements = {};
    }

    checkElementIsInCell(element: Element): boolean {
        const topBorderDowner = element.coords[0] > this.y_coord + this.height
        const bottomBorderUpper = element.coords[2] < this.y_coord
        const leftBorderRighter = element.coords[3] > this.x_coord + this.width
        const rightBorderLefter = element.coords[1] < this.x_coord
        return !(topBorderDowner || bottomBorderUpper || leftBorderRighter || rightBorderLefter)
    }

    setElementsAreas(elements: Element[]) {
        elements.forEach(element => {
            if (this.checkElementIsInCell(element)) {
                let area = (Math.min(element.coords[1], this.x_coord + this.width) - Math.max(element.coords[3], this.x_coord)) * (Math.min(element.coords[2], this.y_coord + this.height) - Math.max(element.coords[0], this.y_coord))
                if (!this.elements[element.code]) {
                    this.elements[element.code] = 0
                }
                this.elements[element.code] += area;
            }
        })
    }
}