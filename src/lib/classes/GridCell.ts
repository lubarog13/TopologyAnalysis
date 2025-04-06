import type { LayoutElement } from "../../utils/consts/elements.list"
import { Element } from "./Element"

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

    checkElementIsInCoords(element: Element, x_coord: number, y_coord: number, width: number, height: number, ignoreBorder = true): boolean {
        if (ignoreBorder) {
            const topBorderDowner = element.coords[0] > y_coord + height
            const bottomBorderUpper = element.coords[2] < y_coord
            const leftBorderRighter = element.coords[3] > x_coord + width
            const rightBorderLefter = element.coords[1] < x_coord
            return !(topBorderDowner || bottomBorderUpper || leftBorderRighter || rightBorderLefter)
        }
        else {
            const topBorderDowner = element.coords[0] >= y_coord + height
            const bottomBorderUpper = element.coords[2] <= y_coord
            const leftBorderRighter = element.coords[3] >= x_coord + width
            const rightBorderLefter = element.coords[1] <= x_coord
            return !(topBorderDowner || bottomBorderUpper || leftBorderRighter || rightBorderLefter)
        }
    }

    checkElementInsideAnotherElement(element: Element, anotherElement: Element): number {
        if (element.coords[0] <= anotherElement.coords[0] && element.coords[1] >= anotherElement.coords[1] && element.coords[2] >= anotherElement.coords[2] && element.coords[3] <= anotherElement.coords[3]) {
            return 1;
        }
        else if (element.coords[0] >= anotherElement.coords[0] && element.coords[1] <= anotherElement.coords[1] && element.coords[2] <= anotherElement.coords[2] && element.coords[3] >= anotherElement.coords[3]) {
            return -1;
        }
        else {
            return 0;
        }
    }

    resizeElementToCell(element: Element): Element {
        let newElement = new Element(element.name, element.code, [element.coords[3], element.coords[0], element.coords[1], element.coords[0], element.coords[1], element.coords[2], element.coords[3], element.coords[2]], element.layout, element.rotation);
        if (this.checkElementIsInCoords(element, this.x_coord, this.y_coord, this.width, this.height)) {
            newElement.coords[0] = Math.max(newElement.coords[0], this.y_coord)
            newElement.coords[1] = Math.min(newElement.coords[1], this.x_coord + this.width)
            newElement.coords[2] = Math.min(newElement.coords[2], this.y_coord + this.height)
            newElement.coords[3] = Math.max(newElement.coords[3], this.x_coord)
        }
        newElement.positions = [newElement.coords[3], newElement.coords[0], newElement.coords[1], newElement.coords[0], newElement.coords[1], newElement.coords[2], newElement.coords[3], newElement.coords[2]]
        console.log('1', newElement)
        return newElement;
    }

    splitOverlappingElements(element1: Element, element2: Element): Element[] {
        let elements: Element[] = []
        const createElementWithCoords = (coords: number[]): Element => {
            return new Element("", "", [coords[3], coords[0], coords[1], coords[0], coords[1], coords[2], coords[3], coords[2]], 1);
        }
        let left = Math.max(element1.coords[3], element2.coords[3])
        let right = Math.min(element1.coords[1], element2.coords[1])
        let bottom = Math.min(element1.coords[2], element2.coords[2])
        let top = Math.max(element1.coords[0], element2.coords[0]);
        console.log(element1.coords, element2.coords, top, bottom)
        elements.push(createElementWithCoords([Math.min(element1.coords[0], element2.coords[0]), left, top, Math.min(element1.coords[3], element2.coords[3])]))
        elements.push(createElementWithCoords([Math.min(element1.coords[0], element2.coords[0]), right, top, left]))
        elements.push(createElementWithCoords([top, left, bottom, Math.min(element1.coords[3], element2.coords[3])]))
        elements.push(createElementWithCoords([top, right, bottom, left]))
        elements.push(createElementWithCoords([top, Math.max(element1.coords[1], element2.coords[1]), bottom, right]))
        elements.push(createElementWithCoords([bottom, Math.max(element1.coords[1], element2.coords[1]), Math.max(element1.coords[2], element2.coords[2]), right]))
        elements.push(createElementWithCoords([bottom, right, Math.max(element1.coords[2], element2.coords[2]), left]))
        return elements;
    }

    //@ToDo: допилить логику итераций
    splitAllElements(elements: Element[]): Element[] {
        let newElements: Element[] = [...elements];
        console.log(newElements);
        for (let i = 0; i < newElements.length; i++) {
            for (let j = i + 1; j < newElements.length; j++) {
                if (this.checkElementInsideAnotherElement(newElements[i], newElements[j]) === 1) {
                    newElements.splice(j, 1);
                }
                else if (this.checkElementInsideAnotherElement(newElements[i], newElements[j]) === -1) {
                    newElements.splice(i, 1);
                    break;
                }
            }
        }
        let i = 0, k=0;
        while (i < newElements.length && k < 100) {
            for (let j = i + 1; j < newElements.length; j++) {
                if (this.checkElementInsideAnotherElement(newElements[i], newElements[j]) === 1) {
                    newElements.splice(j, 1);
                }
                else if (this.checkElementIsInCoords(newElements[i], newElements[j].coords[3], newElements[j].coords[0], newElements[j].coords[1], newElements[j].coords[2], false)) {
                    newElements.push(...this.splitOverlappingElements(newElements[i], newElements[j]).filter(element => element.getSize()[0] * element.getSize()[1] > 0));
                    console.log(this.splitOverlappingElements(newElements[i], newElements[j]).map(element => element.getSize()));
                    console.log(newElements)
                    newElements.splice(j, 1);
                    newElements.splice(i, 1);
                    console.log(newElements.length)
                    i=-1;
                    break;
                }
            }
            i++;
            k++;
        }
        console.log(k);
        return newElements;
    }


    getAreas(elements: Element[]): [number, number] {
        console.log(elements);
        let elementsSized = this.splitAllElements(elements.map(element => this.resizeElementToCell(element)));
        console.log(elementsSized.map(element => element.getSize()));
        let sumElementsAreas = elementsSized.reduce((acc, element) => acc + element.getSize()[0] * element.getSize()[1], 0);
        let emptySpaceArea = this.width * this.height - sumElementsAreas;
        return [sumElementsAreas, emptySpaceArea];
    }


    setElementsAreas(elements: Element[]) {
        console.log(this.x_coord, this.y_coord)
        this.elements['Пустое пространство'] = this.getAreas(elements.filter(element => this.checkElementIsInCoords(element, this.x_coord, this.y_coord, this.width, this.height)))[1];
        elements.forEach(element => {
            if (this.checkElementIsInCoords(element, this.x_coord, this.y_coord, this.width, this.height)) {
                let area = (Math.min(element.coords[1], this.x_coord + this.width) - Math.max(element.coords[3], this.x_coord)) * (Math.min(element.coords[2], this.y_coord + this.height) - Math.max(element.coords[0], this.y_coord))
                if (!this.elements[element.code]) {
                    this.elements[element.code] = 0
                }
                this.elements[element.code] += area;
            }
        })
    }
}