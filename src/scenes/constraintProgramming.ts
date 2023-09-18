import { setBackgroundColor, appendChild, appendChildren, newSlide } from "../core/command";
import { SudokuBoard } from "../wfc/sudokuBoard";
import { html } from "../utils/html";

export function* constraintProgramming(view: HTMLElement) {
    let slide = document.createElement("div");
    let sudokuBoard = new SudokuBoard(view);
    let terminology = html(`<ul class="treminology"></ul>`);

    slide.appendChild(sudokuBoard.html);
    slide.appendChild(terminology);

    yield* newSlide(view, slide);

    sudokuBoard.set([0, 3], 1);
    sudokuBoard.set([2, 2], 3);

    console.log(sudokuBoard);

    // variables
    let variables = document.createElement("p");
    variables.innerText = "variables";


    yield* appendChild(terminology, html(`<li><p class="fg-variable">Variables</p></li>`));
    yield* setBackgroundColor(sudokuBoard.get([0, 0]).getHtml(), "blue");
    yield* setBackgroundColor(sudokuBoard.get([0, 0]).getHtml(), "");

    // Domain
    yield* appendChild(terminology, html(`<li><p class="fg-domain">Domains</p></li>`));

    // yield* setColor(sudokuBoard.getVariable([0, 0]).domain().get(1), "red");
    // yield* sudokuBoard.getVariable([0, 0]).domain().remove(1);
    // yield* sudokuBoard.constrain();

    //constraints
    let constraints = html(`<li><p class="fg-constraint">Constraints</p></li>`);
    let constraintsList = html(`<ul class="constraints"></ul>`);
    constraints.appendChild(constraintsList);

    yield* appendChild(terminology, constraints);
    yield* appendChildren(
        constraintsList,
        [
            html(`<li><p class="fg-constraint">Numbers 1-4 can only be used once in a row</p></li>`),
            html(`<li><p class="fg-constraint">Numbers 1-4 can only be used once in a column</p></li>`),
            html(`<li><p class="fg-constraint">Numbers 1-4 can only be used once in a 2x2 subdivision</p></li>`)
        ]
    );

} 
