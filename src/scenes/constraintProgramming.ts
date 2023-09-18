import { setBackgroundColor, appendChild, appendChildren, newSlide } from "../core/command";
import { SudokuBoard } from "../wfc/sudokuBoard";
import { html } from "../utils/html";

export function* constraintProgramming(view: HTMLElement) {
    let slide = document.createElement("div");
    let sudokuBoard = new SudokuBoard(view);
    let list = document.createElement("ul");

    slide.appendChild(sudokuBoard.html);
    slide.appendChild(list);

    yield* newSlide(view, slide);

    sudokuBoard.set([0, 3], 1);
    sudokuBoard.set([2, 2], 3);

    console.log(sudokuBoard);

    // variables
    let variables = document.createElement("p");
    variables.innerText = "variables";


    yield* appendChild(list, html(`<li><p>Variables</p></li>`));
    yield* setBackgroundColor(sudokuBoard.get([0, 0]).getHtml(), "blue");
    yield* setBackgroundColor(sudokuBoard.get([0, 0]).getHtml(), "");

    // Domain
    let domains = document.createElement("p");
    domains.innerText = "domains";

    yield* appendChild(list, html(`<li><p>Domains</p></li>`));
    // yield* setColor(sudokuBoard.getVariable([0, 0]).domain().get(1), "red");
    // yield* sudokuBoard.getVariable([0, 0]).domain().remove(1);
    // yield* sudokuBoard.constrain();

    //constraints
    let constraints = document.createElement("li");
    let constraintsDiv = document.createElement("div");
    let constraintsText = document.createElement("p");
    let constraintsList = document.createElement("ul");
    let constraint1 = document.createElement("li");
    let constraint2 = document.createElement("li");
    let constraint3 = document.createElement("li");

    constraintsText.innerText = "Constraints";
    constraint1.innerHTML = "<p>Numbers 1-4 can only be used once in a row</p>";
    constraint2.innerHTML = "<p>Numbers 1-4 can only be used once in a column</p>";
    constraint3.innerHTML = "<p>Numbers 1-4 can only be used once in a 2x2 subdivision</p>";

    constraintsDiv.appendChild(constraintsText);
    constraintsDiv.appendChild(constraintsList);
    constraints.appendChild(constraintsDiv);

    yield* appendChild(list, constraints);
    yield* appendChildren(constraintsList, [constraint1, constraint2, constraint3]);

} 
