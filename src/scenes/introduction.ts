import { assets } from "../assets";
import { appendChildren, newSlide } from "../core/command";
import { createImageCard } from "../core/imageCard";
import { QuoteDetail, createQuoteCard } from "../core/quoteSlide";

export let introduction = function*(view: HTMLElement) {
    yield* blankSlide(view);
    yield* titleSlide(view);
    yield* newSlide(view, createQuoteCard(assets.quotes.maximGumin as QuoteDetail));
    yield* newSlide(view, createImageCard(assets.images.badNorth));
    yield* newSlide(view, createImageCard(assets.images.townscaper));
    yield* newSlide(view, createImageCard(assets.images.unicodeBoxDrawingWFC));
    yield* newSlide(view, createQuoteCard(assets.quotes.borisTheBrave as QuoteDetail));
    yield* mainPoints(view);
}

let blankSlide = function*(view: HTMLElement) {
    yield* newSlide(view, document.createElement("div"));
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
