export let introduction = function*() {
    yield document.createElement("div");
    yield titleSlide();
}

let titleSlide = function() {
    let titleSlide = document.createElement("div");

    let title = document.createElement("a");
    title.innerText = "Wave Function Collapse Algorithm";

    titleSlide.appendChild(title);

    return titleSlide;
}
