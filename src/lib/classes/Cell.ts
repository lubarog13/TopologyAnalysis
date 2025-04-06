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
					let positions = temp.slice(1).map((it) => Number(it))
					if (positions[0] === positions[2]) {
						positions = [positions[0], positions[1], positions[4], positions[1], positions[4], positions[3], positions[0], positions[3]]
					}
					let element = new Element(
						name,
						description[i].split(' ')[1],
						positions,
						layout
					);
					this.addElement(element);
					layout++;
					i++;
				}
			} catch (err) {
				console.error(err);
			}
			i++;
		}
	}

	getElementsAreasPercent(): {[key: string]: number} {
		const areas: {[key: string]: number} = {};
		this.elements.forEach((element) => {
			areas[element.code] = element.getSize()[0] * element.getSize()[1] / ((this.borderCoords[1] - this.borderCoords[3]) * (this.borderCoords[2] - this.borderCoords[0]));
		});
		return areas;
	}
}
