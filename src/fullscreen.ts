declare global {
    interface Element {
        webkitRequestFullscreen?(): void
        msRequestFullscreen?(): void
    }

    interface Document {
        webkitExitFullscreen?(): void
        msExitFullscreen?(): void
    }
}

let fullscreen = false;

export let toggleFullscreen = function(element: HTMLElement) {
    if (!fullscreen) {
        openFullscreen(element);
        fullscreen = true;
    } else {
        closeFullscreen();
        fullscreen = false;
    }
}

export function openFullscreen(element: HTMLElement) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    }
}

export function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}
