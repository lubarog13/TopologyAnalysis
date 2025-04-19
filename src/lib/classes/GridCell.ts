import { Element } from "./Element"
import { elementsList } from "../../utils/consts/elements.list"

export class GridCell {
    x_index: number
    y_index: number
    x_coord: number
    y_coord: number
    width: number
    height: number
    elements: {[index: string]: number}
    constructor(x_index: number, y_index: number, x_coord: number, y_coord: number, width: number, height: number) {
        this.x_index = x_index
        this.y_index = y_index
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
        // console.log('1', newElement)
        return newElement;
    }

    createElementWithCoords(coords: number[]): Element {
        return new Element("", "", [coords[3], coords[0], coords[1], coords[0], coords[1], coords[2], coords[3], coords[2]], 1);
    }

    splitElementByXCoord(element: Element, x_coord: number): Element[] {
        let newElements: Element[] = []
        if (x_coord > element.coords[3] && x_coord < element.coords[1]) {
            newElements.push(this.createElementWithCoords([element.coords[0], x_coord, element.coords[2], element.coords[3]]));
            newElements.push(this.createElementWithCoords([element.coords[0], element.coords[1], element.coords[2], x_coord]));
        }
        return newElements;
    }

    splitElementByYCoord(element: Element, y_coord: number): Element[] {
        let newElements: Element[] = []
        if (y_coord > element.coords[0] && y_coord < element.coords[2]) {
            newElements.push(this.createElementWithCoords([element.coords[0], element.coords[1], y_coord, element.coords[3]]));
            newElements.push(this.createElementWithCoords([y_coord, element.coords[1], element.coords[2], element.coords[3]]));
        }
        return newElements;
    }

    splitElementByXCoords(element: Element, x_coords: number[]): Element[] {
        let newElements: Element[] = []
        let currentElement = element
        for (let i = 0; i < x_coords.length; i++) {
            let temp = this.splitElementByXCoord(currentElement, x_coords[i]);
            if (temp.length > 0) {
                newElements.push(temp[0])
                if (temp.length > 1) {
                    currentElement = temp[1]
                }
            }
        }
        newElements.push(currentElement)
        // console.log('7', newElements)
        return newElements;
    }

    splitElementByYCoords(element: Element, y_coords: number[]): Element[] {
        let newElements: Element[] = []
        let currentElement = element
        for (let i = 0; i < y_coords.length; i++) {
            let temp = this.splitElementByYCoord(currentElement, y_coords[i]);
            if (temp.length > 0) {
                newElements.push(temp[0])
                if (temp.length > 1) {
                    currentElement = temp[1]
                }
            }
        }
        newElements.push(currentElement)
        return newElements;
    }

    splitOverlappingElementsNew(elements: Element[]): Element[] {
        let newElements: Element[] = []
        let elementsCopy = [...elements]
        let x_coords = elements.map(element => element.coords[3]);
        x_coords.push(...elements.map(element => element.coords[1]));
        x_coords = Array.from(new Set(x_coords));
        x_coords.sort((a, b) => a - b);
        // console.log(x_coords)
        let removeDuplicates = (elements: Element[]) => {
            let i = 0, k=0;
            while (i < elements.length && k < 100) {
                for (let j = i + 1; j < elements.length; j++) {
                    if (this.checkElementInsideAnotherElement(elements[i], elements[j]) === 1) {
                        elements.splice(j, 1);
                    }
                    else if (this.checkElementInsideAnotherElement(elements[i], elements[j]) === -1) {
                        elements.splice(i, 1);
                        break;
                    }
                }
                i++;
                    k++;
                }
        }
        removeDuplicates(elementsCopy)
        let n = elementsCopy.length;
        // console.log('6', elementsCopy)
        for (let j=0; j<n; j++) {
            newElements.push(...this.splitElementByXCoords(elementsCopy[j], x_coords))
        }
        removeDuplicates(newElements)
        let y_coords = newElements.map(element => element.coords[0]);
        y_coords.push(...newElements.map(element => element.coords[2]));
        y_coords = Array.from(new Set(y_coords));
        y_coords.sort((a, b) => a - b);
        let newElementsByYCoords: Element[] = []
        n = newElements.length;
        for (let j=0; j<n; j++) {
            newElementsByYCoords.push(...this.splitElementByYCoords(newElements[j], y_coords))
        }
        removeDuplicates(newElementsByYCoords)
        return newElementsByYCoords;
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
        // console.log(element1.coords, element2.coords, top, bottom)
        elements.push(createElementWithCoords([Math.min(element1.coords[0], element2.coords[0]), left, top, Math.min(element1.coords[3], element2.coords[3])]))
        elements.push(createElementWithCoords([Math.min(element1.coords[0], element2.coords[0]), right, top, left]))
        elements.push(createElementWithCoords([top, left, bottom, Math.min(element1.coords[3], element2.coords[3])]))
        elements.push(createElementWithCoords([top, right, bottom, left]))
        elements.push(createElementWithCoords([top, Math.max(element1.coords[1], element2.coords[1]), bottom, right]))
        elements.push(createElementWithCoords([bottom, Math.max(element1.coords[1], element2.coords[1]), Math.max(element1.coords[2], element2.coords[2]), right]))
        elements.push(createElementWithCoords([bottom, right, Math.max(element1.coords[2], element2.coords[2]), left]))
        return elements;
    }

    splitAllElements(elements: Element[]): Element[] {
        let newElements: Element[] = [...elements];
        // console.log(newElements);
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
                    // console.log(this.splitOverlappingElements(newElements[i], newElements[j]).map(element => element.getSize()));
                    // console.log(newElements)
                    newElements.splice(j, 1);
                    newElements.splice(i, 1);
                    // console.log(newElements.length)
                    i=-1;
                    break;
                }
            }
            i++;
            k++;
        }
        i = 0, k=0;
        while (i < newElements.length && k < 100) {
            for (let j = i + 1; j < newElements.length; j++) {
                if (this.checkElementInsideAnotherElement(newElements[i], newElements[j]) === 1) {
                    newElements.splice(j, 1);
                }
                else if (this.checkElementInsideAnotherElement(newElements[i], newElements[j]) === -1) {
                    newElements.splice(i, 1);
                    break;
                }
            }
            i++;
            k++;
        }
        // console.log(k);
        return newElements;
    }


    getAreas(elements: Element[]): [number, number] {
        // console.log('1', elements);
        // console.log('2', elements.map(element => this.resizeElementToCell(element)));
        // console.log(this.x_coord, this.y_coord, this.width, this.height)
        let elementsSized = this.splitOverlappingElementsNew(elements.map(element => this.resizeElementToCell(element)));
        // console.log('3', elementsSized);
        // console.log(elementsSized.map(element => element.getSize()));
        let sumElementsAreas = elementsSized.reduce((acc, element) => acc + element.getSize()[0] * element.getSize()[1], 0);
        let emptySpaceArea = this.width * this.height - sumElementsAreas;
        return [sumElementsAreas, emptySpaceArea];
    }


    setElementsAreas(elements: Element[]) {
        // console.log(this.x_coord, this.y_coord)

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

    getAreasForLineDiagram(elements: Element[], code: string): {[name: string]: number} {
        let areas = this.getAreas(elements.filter(element => elementsList[element.code].is_selected && this.checkElementIsInCoords(element, this.x_coord, this.y_coord, this.width, this.height)));
        return {
            [code]: areas[0],
            'Пустое пространство': areas[1]
        }
    }

    // getAreasForSpecificElements(elements: Element[]): {[name: string]: number} {
    //     let filteredAreas Object.fromEntries(Object.entries(this.elements).filter(([key]) => elements.some(element => element.code === key || key === 'Пустое пространство')));
    // }
}