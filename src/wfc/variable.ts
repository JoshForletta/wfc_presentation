export class Variable<T> {
    view: HTMLElement;
    domain: Set<T>;
    answers: Map<T, HTMLElement>;
    html: HTMLElement;

    constructor(view: HTMLElement, domain: Set<T>, answers: Map<T, HTMLElement>) {
        this.view = view;
        this.domain = domain;
        this.answers = new Map();

        this.html = document.createElement("div");

        for (let [answer, answerElement] of answers.entries()) {
            let htmlAnswerClone = answerElement.cloneNode(true) as HTMLElement;

            this.answers.set(answer, htmlAnswerClone);

            this.html.appendChild(htmlAnswerClone);
        }

        this.setOutOfDomain();
    }

    getHtml() {
        return this.html;
    }

    setOutOfDomain() {
        for (let [answer, answerElement] of this.answers.entries()) {
            if (!this.domain.has(answer)) {
                console.log(answerElement);
                answerElement.classList.add("out-of-domain");
            }
        }
    }

    set(answer: T) {
        this.domain = new Set([answer]);

        this.setOutOfDomain();
    }
}
