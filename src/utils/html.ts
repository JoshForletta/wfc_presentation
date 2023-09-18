export function html(html: string): HTMLElement {
    let div = document.createElement("div");
    div.innerHTML = html.trim();

    return div.firstChild as HTMLElement;
}

export function htmlWrap(tag: string, html: HTMLElement): HTMLElement {
    let wraper = document.createElement(tag);
    wraper.appendChild(html);

    return wraper;
}

export function htmlTable(table: Iterable<Iterable<HTMLElement>>) {
    var htmlTable = document.createElement('table');
    var htmlTableBody = document.createElement('tbody');

    for (let row of table) {
        let rowElement = htmlTable.insertRow();

        for (let cell of row) {
            let cellElement = rowElement.insertCell();
            cellElement.appendChild(cell);
        }
    }

    htmlTable.appendChild(htmlTableBody);
    document.body.appendChild(htmlTable);

    return htmlTable
}
