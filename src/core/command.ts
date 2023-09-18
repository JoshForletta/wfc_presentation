import { Scene } from "./slideshow";

export interface Command {
    apply(): void
    undo(): void
}

export class NewSlide implements Command {
    view: HTMLElement;
    slide: HTMLElement;
    previousDisplay: string;

    constructor(view: HTMLElement, slide: HTMLElement) {
        this.view = view;
        this.slide = slide;
        this.previousDisplay = "";
    }

    apply(): void {
        if (this.view.lastElementChild != null) {
            this.previousDisplay = (this.view.lastElementChild as HTMLElement).style.display;
            (this.view.lastElementChild as HTMLElement).style.display = "none";
        }

        this.view.appendChild(this.slide);
    }

    undo() {
        this.view.lastChild?.remove();

        if (this.view.lastElementChild != null) {
            (this.view.lastElementChild as HTMLElement).style.display = this.previousDisplay;
        }
    }
}

export class AppendChild implements Command {
    view: HTMLElement;
    child: HTMLElement;

    constructor(view: HTMLElement, child: HTMLElement) {
        this.view = view;
        this.child = child
    }
    apply(): void {
        this.view.appendChild(this.child);
    }

    undo(): void {
        this.view.lastChild?.remove();
    }
}

export class SetBackgroundColor implements Command {
    view: HTMLElement;
    previousColor: string;
    color: string;

    constructor(view: HTMLElement, color: string) {
        this.view = view;
        this.previousColor = "";
        this.color = color;
    }

    apply(): void {
        this.view.style.backgroundColor = this.color;
    }

    undo(): void {
        this.view.style.backgroundColor = this.previousColor;
    }
}

export class SetColor implements Command {
    view: HTMLElement;
    previousColor: string;
    color: string;

    constructor(view: HTMLElement, color: string) {
        this.view = view;
        this.previousColor = "";
        this.color = color;
    }

    apply(): void {
        this.view.style.color = this.color;
    }

    undo(): void {
        this.view.style.color = this.previousColor;
    }
}

export let newSlide = function*(view: HTMLElement, slide: HTMLElement, animations?: Scene) {
    yield new NewSlide(view, slide);

    if (animations != null) {
        yield* animations(slide);
    }
}

export let appendChild = function*(view: HTMLElement, child: HTMLElement) {
    yield new AppendChild(view, child);
}

export let appendChildren = function*(view: HTMLElement, children: Array<HTMLElement>, animations?: Scene) {
    for (let child of children) {
        yield new AppendChild(view, child);

        if (animations != null) {
            yield* animations(child);
        }
    }
}

export let setBackgroundColor = function*(view: HTMLElement, color: string) {
    yield new SetBackgroundColor(view, color);
}

export let setColor = function*(view: HTMLElement, color: string) {
    yield new SetColor(view, color);
}
