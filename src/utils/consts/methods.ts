import { Cell } from "$lib/classes/Cell";
import { Element } from "$lib/classes/Element";

export function parseCif(cif: string) : Array<Cell> {
   let cells = [
    new Cell(
         1,
         0,
         0,
         0,
         0,
         100,
         100,
    ),
    new Cell(
        2,
        1,
        0,
        100,
        0,
        100,
        100,
    ),
    new Cell(
        3,
        0,
        1,
        0,
        100,
        100,
        100,
    ),
    new Cell(
        4,
        1,
        1,
        100,
        100,
        100,
        100,
    ),
   ]
   cells[0].addElement(new Element('pTransistor', 'pnp', 20, 20, 0, 0, 20, 20, 1));
   cells[2].addElement(new Element('nTransistor', 'npn', 20, 20, 0, 1, 20, 20, 1));
   cells[3].addElement(new Element('nTransistor', 'npn', 20, 20, 0, 1, 20, 20, 1));
   cells[1].addElement(new Element('pTransistor', 'pnp', 20, 20, 1, 0, 20, 20, 1));

   return cells.sort((a, b) => {
    if (a.x > b.x) return 1;
    if (a.x < b.x) return -1;
    if (a.y > b.y) return 1;
    if (a.y < b.y) return -1;
    return 0;
   });
}

