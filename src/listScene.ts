export let createListScene = function*(parent: HTMLElement, items: Array<HTMLElement>) {
    parent.appendChild(document.createElement("ol"));
    parent = parent.cloneNode(true) as HTMLElement;

    for (let item of items) {
        parent = parent.cloneNode(true) as HTMLElement;
        let list = parent.getElementsByTagName("ol");

        list.appendChild(item);
        yield parent;
    }
}
