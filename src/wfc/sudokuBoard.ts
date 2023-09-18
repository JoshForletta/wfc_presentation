import { htmlTable, html } from "../utils/html";
import { Variable } from "./variable";

export class SudokuBoard {
    view: HTMLElement;
    board: Array<Array<Variable<number>>>;
    html: HTMLElement;

    constructor(view: HTMLElement, boardDomains?: Array<Array<Array<number>>>) {
        this.view = view;

        this.board = createBoard(this.view);

        this.html = htmlTable(this.board.map(row => row.map(variable => variable.html)))

        if (boardDomains != null) {
            for (let row = 0; row < 4; row++) {
                for (let col = 0; col < 4; col++) {
                    let domain = boardDomains[row][col];

                    this.get([row, col]).setDomain(new Set(domain))
                }
            }
        }
    }

    get(coord: [number, number]) {
        return this.board[coord[0]][coord[1]];
    }

    set(coord: [number, number], answer: number) {
        this.get(coord).set(answer);
    }
}

function createBoard(view: HTMLElement) {
    return [createRow(view), createRow(view), createRow(view), createRow(view)];
}

function createRow(view: HTMLElement) {
    let row = [];

    for (let i = 0; i < 4; i++) {
        row.push(createVariable(view));
    }

    return row;
}

function createVariable(view: HTMLElement) {
    return new Variable(
        view,
        new Set([1, 2, 3, 4]),
        new Map<number, HTMLElement>([
            [1, html(`<p>1</p>`)],
            [2, html(`<p>2</p>`)],
            [3, html(`<p>3</p>`)],
            [4, html(`<p>4</p>`)],
        ])
    );
}
