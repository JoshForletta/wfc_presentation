export type Scene = () => Generator<HTMLElement>;

export class Slideshow {
    view: HTMLElement;
    slides: Array<HTMLElement>;
    currentSlideIndex: number;

    constructor(view: HTMLElement, scenes: Array<Scene>) {
        if (scenes.length == 0) {
            throw Error("Empty scenes");
        }

        this.view = view;
        this.slides = Array();
        this.currentSlideIndex = 0;

        for (let scene of scenes) {
            for (let slide of scene()) {
                this.slides.push(slide);
            }
        }

        this.setView(this.getCurrentSlide());
    }

    getNextSlide() {
        if (this.currentSlideIndex == this.slides.length - 1) {
            return null;
        }

        return this.slides[++this.currentSlideIndex];
    }

    getPrevSlide() {
        if (this.currentSlideIndex == 0) {
            return null;
        }

        return this.slides[--this.currentSlideIndex];
    }

    getCurrentSlide() {
        return this.slides[this.currentSlideIndex];
    }

    setView(slide: HTMLElement | null) {
        if (slide != null) {
            this.view.replaceChildren(slide);
        }
    }

    next() {
        this.setView(this.getNextSlide());
    }

    prev() {
        this.setView(this.getPrevSlide());
    }
}
