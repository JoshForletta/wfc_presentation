import './styles/index.scss'
import { toggleFullscreen } from './core/fullscreen';
import { Slideshow } from './core/slideshow';
import { introduction } from './scenes/introduction';
import { constraintProgramming } from './scenes/constraintProgramming';

const app = document.getElementById("app") as HTMLElement;
app.classList.add("slideshowContainer");

const slideshow_view = document.createElement("div");
slideshow_view.id = "slideshowView";

app.appendChild(slideshow_view);

let slideshow = new Slideshow(slideshow_view, [introduction, constraintProgramming]);

window.onkeydown = (event) => {
    console.log(event.key);
    switch (event.key) {
        case "f": {
            toggleFullscreen(app);
            break;
        }
        case "ArrowRight": {
            slideshow.next();
            break;
        }
        case "ArrowLeft": {
            slideshow.prev();
            break;
        }
    }
}
