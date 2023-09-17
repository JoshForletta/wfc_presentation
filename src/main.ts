import './styles/index.scss'
import { closeFullscreen, openFullscreen } from './fullscreen';
import { Slideshow } from './slideshow';
import { introduction } from './scenes/introduction';

const app = document.getElementById("app") as HTMLElement;
app.classList.add("slideshowContainer");

const slideshow_view = document.createElement("div");
slideshow_view.id = "slideshowView";

app.appendChild(slideshow_view);

let slideshow = new Slideshow(slideshow_view, [introduction]);

let fullscreen = false;

window.onkeydown = (event) => {
    console.log(event.key);
    switch (event.key) {
        case "f": {
            if (!fullscreen) {
                openFullscreen(app);
                fullscreen = true;
            } else {
                closeFullscreen();
                fullscreen = false;
            }
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
