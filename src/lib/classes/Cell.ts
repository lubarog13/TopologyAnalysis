import { Element } from './Element';

export class Cell {
	id: number;
	x_coord: number;
	y_coord: number;
	x_k: number;
	y_k: number;
	width: number;
	height: number;
	elements: Element[];
    borderCoords: number[];

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
        this.borderCoords = [];
        this.chengeBorder();
	}

	setCoords(x: number, y: number) {
		this.x_coord = x;
		this.y_coord = y;
        this.chengeBorder();
		this.elements.forEach((element) => {
			element.cellX = this.x_coord;
			element.cellY = this.y_coord;
		});
	}

	setX_k(x_k: number) {
		this.x_k = x_k;
        this.chengeBorder();
	}
	setY_k(y_k: number) {
		this.y_k = y_k;
        this.chengeBorder();
	}

	setWidth(width: number) {
		this.width = width;
        this.chengeBorder();
	}
	setHeight(height: number) {
		this.height = height;
        this.chengeBorder();
	}

    chengeBorder() {
        this.borderCoords = [(this.y_coord - this.height / 2)*this.y_k, (this.x_coord + this.width/2)*this.x_k, (this.y_coord + this.width / 2)*this.y_k, (this.x_coord - this.width / 2)*this.x_k]
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
		this.elements.forEach((element) => element.draw(ctx));
	}

	setElementsFromDescription(description: Array<string>): void {
		description = description.map((it) => it.trim());
		let temp = description[0].split(' ');
		this.x_k = Number(temp[2]);
		this.y_k = Number(temp[3]);
        this.chengeBorder();
		temp = description[1].split(' ');
		let name = '';
		let i = 2;
		let layout = 0;
		for (; i < description.length; ) {
			try {
				if (description[i].startsWith('9')) {
					name = description[i].split(' ')[1];
				}
				if (description[i].startsWith('L') && description[i + 1]?.startsWith('P')) {
					temp = description[i + 1].split(' ');
					//@ToDo - если 16 коодинат - разбить на три части
					let positions = temp.slice(1).map((it) => Number(it))
					let positionsXY: number[][] = [];
					for (let i = 0; i < positions.length; i += 2) {
						positionsXY.push([positions[i], positions[i + 1]]);
					}
					if (positions.length === 8) {
						let xMin = Math.min(...positionsXY.map((it) => it[0]));
						let xMax = Math.max(...positionsXY.map((it) => it[0]));
						let yMin = Math.min(...positionsXY.map((it) => it[1]));
						let yMax = Math.max(...positionsXY.map((it) => it[1]));
						positions = [
							xMin, yMin, xMax, yMin, xMax, yMax, xMin, yMax
						]

						let element = new Element(
							name,
							description[i].split(' ')[1],
							positions,
							layout
						);
						this.addElement(element);
					}
					else if (positions.length === 12) {
						let xMin = Math.min(...positionsXY.map((it) => it[0]));
						let xMax = Math.max(...positionsXY.map((it) => it[0]));
						let yMin = Math.min(...positionsXY.map((it) => it[1]));
						let yMax = Math.max(...positionsXY.map((it) => it[1]));
						let xMiddle = positionsXY.map((it) => it[0]).filter(it => it > xMin && it < xMax)[0];
						let yMiddle = positionsXY.map((it) => it[1]).filter(it => it > yMin && it < yMax)[0];
						let positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle, xMin, yMiddle]
						let positions2 = [xMiddle, yMiddle, xMax, yMiddle, xMax, yMax, xMiddle, yMax]
						let element1 = new Element(
							name,
							description[i].split(' ')[1],
							positions1,
							layout
						);
						this.addElement(element1);
						let element2 = new Element(
							name,
							description[i].split(' ')[1],
							positions2,
							layout
						);
						this.addElement(element2);
					}
					else if (positions.length === 16) {
						let xMin = Math.min(...positionsXY.map((it) => it[0]));
						let xMax = Math.max(...positionsXY.map((it) => it[0]));
						let yMin = Math.min(...positionsXY.map((it) => it[1]));
						let yMax = Math.max(...positionsXY.map((it) => it[1]));
						let xMiddle1 = Math.min(...positionsXY.map((it) => it[0]).filter(it => it > xMin && it < xMax));
						let xMiddle2 = Math.max(...positionsXY.map((it) => it[0]).filter(it => it > xMin && it < xMax));
						let yMiddle1 = Math.min(...positionsXY.map((it) => it[1]).filter(it => it > yMin && it < yMax));
						let yMiddle2 = Math.max(...positionsXY.map((it) => it[1]).filter(it => it > yMin && it < yMax));
						let positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle1, xMin, yMiddle1];
						let positions2 = [xMin, yMiddle2, xMiddle1, yMiddle2, xMiddle1, yMax, xMin, yMax];
						let positions3 = [xMiddle2, yMiddle2, xMax, yMiddle2, xMax, yMax, xMiddle2, yMax];
						let element1 = new Element(
							name,
							description[i].split(' ')[1],
							positions1,
							layout
						);
						this.addElement(element1);
						let element2 = new Element(
							name,
							description[i].split(' ')[1],
							positions2,
							layout
						);
						this.addElement(element2);
						let element3 = new Element(
							name,
							description[i].split(' ')[1],
							positions3,
							layout
						);
						this.addElement(element3);
					}
					layout++;
					i++;
				}
			} catch (err) {
				console.error(err);
			}
			i++;
		}
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

	splitAllElements(): Element[] {
		let newElements: Element[] = [...this.elements];
		//@ToDo: допилить по элементам
		return newElements;
	}

	getElementsAreasPercent(): {[key: string]: number} {
		const areas: {[key: string]: number} = {};
		this.elements.forEach((element) => {
			areas[element.code] = element.getSize()[0] * element.getSize()[1] / ((this.borderCoords[1] - this.borderCoords[3]) * (this.borderCoords[2] - this.borderCoords[0]));
		});
		return areas;
	}
}
