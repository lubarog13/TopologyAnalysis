import { Cell } from "$lib/classes/Cell";
import { Element } from "$lib/classes/Element";

interface CellLine {
  cells: Array<Cell>;
  position: [number, number]
}

export interface CellsContent {
  cells: Array<Cell>;
  global: Cell
}

type CellColumn = {[index: string]:CellLine}
export function parseCif(cif: string) : Array<Cell> {
  let cifArray = cif.split(/;|\n/).filter(line => line.trim() !== '');
  let cells = [] as Array<Cell>;
  let cellsColumn: CellColumn = {};
  let currentOperation = 'start';
  let k = [] as Array<string>;
  let tempElementString: Array<string> = [];
  let currentCell = -1;
  let currentLine = "";
  cifArray.forEach(((line, i) => {
    line = line.replace(/\s\s+/g, ' ');
    if (line.startsWith('DS')) {
      let lineArgs = line.split(' ');
      k = lineArgs.slice(2);
      console.log(currentOperation, lineArgs[1], cellsColumn, !cellsColumn[lineArgs[1]])
      if (currentOperation === 'start' && !cellsColumn[lineArgs[1]]) {
        currentOperation = 'read_cell_column';
      }
      else if (currentOperation === 'start') {
        currentOperation = 'read_cells';
        currentLine = lineArgs[1];
      }
      if (currentOperation === 'line_read') {
        currentOperation = 'read_elements';

        currentCell = Number(lineArgs[1]);
        tempElementString.push(line)
      }
    }
    else if (line.startsWith('DF')) {
      if (currentOperation === 'read_cell_column') {
        currentOperation = 'start'
      }
      if (currentOperation ==='read_cells') {
        currentOperation = 'line_read';
      }
      if (currentOperation === 'readElements') {
        let index = cells.findIndex(it => it.id === currentCell);
        if (index!==-1) {
          Object.values(cellsColumn).forEach((column) => {
            column.cells.forEach((cell) => {
              if (cell.id === currentCell) {
                cell.setElementsFromDescription(tempElementString);
              }
            })
          });
          tempElementString = [];
          currentOperation = 'line_read';
        }
      }
    }
    else if (currentOperation === 'read_cell_column') {
      if (line.startsWith('C')) {
        let temp = line.split(' ');
        cellsColumn[temp[1]] = {cells: [] as Array<Cell>, position: [Number(temp[3]), Number(temp[4])]}
      }
    }
    else if (currentOperation ==='read_cells') {
      if (line.startsWith('C')) {
        let temp = line.split(' ');
        cellsColumn[currentLine].cells.push(new Cell(Number(temp[1]), Number(temp[3]), Number(temp[4]), Number(k[0]), Number(k[1])))
      }
    }
    else if (currentOperation === 'read_elements') {
      tempElementString.push(line)
    }
  }));
  console.log(cellsColumn)
  Object.keys(cellsColumn).sort().forEach((key) => {
    cellsColumn[key].cells.forEach((cell) => {
      cells.push(cell);
    })
  });

   return cells.sort((a, b) => {
    return a.id - b.id;
   });
}

export function parseCifV2(cif: string): CellsContent {
  let cifArray = cif.split(/;|\n/).filter(line => line.trim() !== '');
  let cells = [] as Array<Cell>;
  let globalCell!: Cell;
  let currentOperation = 'start';
  let k = [] as Array<string>;
  let tempElementString: Array<string> = [];
  let currentCell = -1;
  cifArray.forEach((line, i) => {
    line = line.replace(/\s\s+/g, ' ')
    if (line.startsWith('DS')) {
      let lineArgs = line.split(' ');
      k = lineArgs.slice(2);
      if (currentOperation === 'start') {
        console.log(lineArgs, Number(lineArgs[2]));
        globalCell = new Cell(Number(lineArgs[1]), 0, 0, Number(lineArgs[2]), Number(lineArgs[3]));
        tempElementString.push(line)
        currentOperation = 'read_cells';
      }
      if (currentOperation === 'line_read') {
        currentOperation = 'read_elements';
        currentCell = Number(lineArgs[1]);
        tempElementString.push(line)
      }
    }
    else if (line.startsWith('DF')) {
      if (currentOperation ==='read_cells') {
        globalCell.setElementsFromDescription(tempElementString);
        currentOperation = 'line_read';
      }
      if (currentOperation === 'read_elements') {
        cells.filter(it => it.id === currentCell).forEach(cell => {
          cell.setElementsFromDescription(tempElementString);
        })
        tempElementString = [];
        currentOperation = 'line_read';
      }
    }
    else if (line.startsWith('C') && currentOperation==='read_cells') {
      let temp = line.split(' ');
      cells.push(new Cell(Number(temp[1]), Number(temp[3]), Number(temp[4]), Number(k[0]), Number(k[1])));
    }
    else if (currentOperation === 'read_cells') {
      tempElementString.push(line);
    }
    else if (currentOperation === 'read_elements') {
      tempElementString.push(line)
    }
  });
  if (!globalCell) {
    globalCell = new Cell(0, 0, 0);
  }
  return {cells: cells.sort((a, b) => {
    if (a.x_coord > b.x_coord && a.y_coord > b.y_coord) return 1;
    if (a.x_coord > b.x_coord && a.y_coord < b.y_coord) return -1;
    if (a.x_coord < b.x_coord && a.y_coord > b.y_coord) return 1;
    if (a.x_coord < b.x_coord && a.y_coord < b.y_coord) return -1;
    return 0
  }), global: globalCell};
}