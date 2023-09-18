import { Command } from "./command";

export type Scene = (view: HTMLElement) => Generator<Command>;

export class Slideshow {
    view: HTMLElement;
    commands: Array<Command>;
    currentCommandIndex: number;

    constructor(view: HTMLElement, scenes: Array<Scene>) {
        if (scenes.length == 0) {
            throw Error("Empty scenes");
        }

        this.view = view;
        this.commands = Array();
        this.currentCommandIndex = 0;

        for (let scene of scenes) {
            for (let command of scene(this.view)) {
                this.commands.push(command)
            }
        }

        this.getCurrentCommand().apply();
    }

    getNextCommand() {
        return this.commands[this.currentCommandIndex + 1];
    }

    getCurrentCommand() {
        return this.commands[this.currentCommandIndex];
    }

    next() {
        let slide = this.getNextCommand();;

        if (slide == null) {
            return;
        }

        slide.apply();

        this.currentCommandIndex++;
    }

    prev() {
        if (this.currentCommandIndex == 0) {
            return;
        }

        this.getCurrentCommand().undo();

        this.currentCommandIndex--;
    }
}
