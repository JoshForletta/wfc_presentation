import { appendChildren, newSlide } from "../command";

export let introduction = function*(view: HTMLElement) {
    yield* titleSlide(view);
    yield* mainPoints(view);
}

let titleSlide = function*(view: HTMLElement) {
    let titleSlide = document.createElement("div");

    let title = document.createElement("p");
    title.innerText = "Wave Function Collapse Algorithm";

    titleSlide.appendChild(title);

    yield* newSlide(view, titleSlide)
}

let mainPoints = function*(view: HTMLElement) {
    let mainPoints = document.createElement("div");
    mainPoints.innerHTML = "<p>Main Points</p>";

    let list = document.createElement("ul");
    mainPoints.appendChild(list);

    let p1 = document.createElement("p");
    p1.innerText = "Constraint Programming";

    let p2 = document.createElement("p");
    p2.innerText = "Applying CP to the WFC problem";

    yield* newSlide(view, mainPoints, function*() {
        yield* appendChildren(list, [p1, p2]);
    });
}
