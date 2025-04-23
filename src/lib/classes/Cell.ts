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
	penaltyX: number = 0;
	penaltyY: number = 0;

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
	setPenaltyX(penaltyX: number) {
		if (penaltyX !== this.penaltyX) {
			let penalty = Math.abs(penaltyX - this.penaltyX);
			this.penaltyX = penaltyX;
			this.x_coord += penalty;
			this.chengeBorder();
			this.elements.forEach((element) => {
				element.setPenaltyX(penalty);
			});
		}
	}
	setPenaltyY(penaltyY: number) {
		if (penaltyY !== this.penaltyY) {
			let penalty = Math.abs(penaltyY - this.penaltyY);
			this.penaltyY = penaltyY;
			this.y_coord += penalty;
			this.chengeBorder();
			this.elements.forEach((element) => {
				element.setPenaltyY(penalty);
			});
		}
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
					let nextLine = description[i + 2]?.split(' ');
					if (nextLine && nextLine[0] && !isNaN(Number(nextLine[0]))) {
						positions.push(...nextLine.map((it) => Number(it)));
					}
					let positionsXY: number[][] = [];
					for (let i = 0; i < positions.length; i += 2) {
						positionsXY.push([positions[i], positions[i + 1]]);
					}
					if (positions.find(it => isNaN(it))) {
						console.log(description[i+1], 'positions', positions)
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
						let angleCoords: {[key: string]: number[]} = {
							'left top': [xMin, yMin],
							'right top': [xMax, yMin],
							'right bottom': [xMax, yMax],
							'left bottom': [xMin, yMax]
						}
						let undefCoord = '';
						for (let key in angleCoords) {
							if (positionsXY.find(it => it===angleCoords[key]) === undefined) {
								undefCoord = key;
								break;
							}
						}
						let positions1: number[] = [];
						let positions2: number[] = [];
						if (undefCoord === 'left top') {
							positions1 = [xMiddle, yMin, xMax, yMin, xMax, yMiddle, xMiddle, yMiddle]
							positions2 = [xMin, yMiddle, xMax, yMiddle, xMax, yMax, xMin, yMax]
						}
						else if (undefCoord === 'right top') {
							positions1 = [xMin, yMin, xMiddle, yMin, xMiddle, yMiddle, xMin, yMiddle]
							positions2 = [xMin, yMiddle, xMax, yMiddle, xMax, yMax, xMin, yMax]
						}
						else if (undefCoord === 'right bottom') {
							positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle, xMin, yMiddle]
							positions2 = [xMin, yMiddle, xMiddle, yMiddle, xMiddle, yMax, xMin, yMax]
						}
						else if (undefCoord === 'left bottom') {
							positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle, xMin, yMiddle]
							positions2 = [xMiddle, yMiddle, xMax, yMiddle, xMax, yMax, xMiddle, yMax]
						}
						if (positions1.length) {
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
					else {
						this.addElement(new Element(name, description[i].split(' ')[1], [xMin, yMin, xMax, yMin, xMax, yMax, xMin, yMax], layout));
					}
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
						let countDotsTop = positionsXY.filter(it => it[1] === yMin).length;
						let countDotsBottom = positionsXY.filter(it => it[1] === yMax).length;
						let countDotsLeft = positionsXY.filter(it => it[0] === xMin).length;
						let countDotsRight = positionsXY.filter(it => it[0] === xMax).length;
						let positions1: number[] = [];
						let positions2: number[] = [];
						let positions3: number[] = [];
						if (countDotsTop === 4) {
							positions1 = [xMin, yMin, xMiddle1, yMin, xMiddle1, yMiddle1, xMin, yMiddle1];
							positions2 = [xMiddle2, yMin, xMax, yMin, xMax, yMiddle1, xMiddle2, yMiddle1];
							positions3 = [xMin, yMiddle1, xMax, yMiddle1, xMax, yMax, xMin, yMax];
						}
						else if (countDotsBottom === 4) {
							positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle1, xMin, yMiddle1];
							positions2 = [xMin, yMiddle1, xMiddle1, yMiddle1, xMiddle1, yMax, xMin, yMax];
							positions3 = [xMiddle2, yMiddle1, xMax, yMiddle1, xMax, yMax, xMiddle2, yMax];
						}
						else if (countDotsLeft === 4) {
							positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle1, xMin, yMiddle1];
							positions2 = [xMiddle1, yMiddle1, xMax, yMiddle1, xMax, yMiddle2, xMiddle1, yMiddle2];
							positions3 = [xMin, yMiddle2, xMax, yMiddle2, xMax, yMax, xMin, yMax];
						}
						else if (countDotsRight === 4) {
							positions1 = [xMin, yMin, xMax, yMin, xMax, yMiddle1, xMin, yMiddle1];
							positions2 = [xMin, yMiddle1, xMiddle1, yMiddle1, xMiddle1, yMiddle2, xMin, yMiddle2];
							positions3 = [xMin, yMiddle2, xMax, yMiddle2, xMax, yMax, xMin, yMax];
						}	
						if (positions1.length && positions2.length && positions3.length) {
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
					else {
						this.addElement(new Element(name, description[i].split(' ')[1], [xMin, yMin, xMax, yMin, xMax, yMax, xMin, yMax], layout));
					}
					}
					if (this.elements.find(e => isNaN(e.getSize()[0]) || isNaN(e.getSize()[1]))) {
						console.log('elements', description[i+1])
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
