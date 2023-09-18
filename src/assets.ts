import './styles/index.scss'
import badNorth from '../assets/badNorth.jpeg';
import townscaper from '../assets/townscaper.png';
import unicodeBoxDrawingWFC from '../assets/unicodeBoxDrawingWFC.png';

export let assets = {
    images: {
        badNorth: {
            src: badNorth,
            alt: "Bad North",
            credit: "Oskar Stålberg",
            creditType: "developer",
            url: "badnorth.com",
        },
        townscaper: {
            src: townscaper,
            alt: "Townscaper",
            credit: "Oskar Stålberg",
            creditType: "developer",
            url: "townscapergame.com",
        },
        unicodeBoxDrawingWFC: {
            src: unicodeBoxDrawingWFC,
            alt: "Unicode Box Drawing Wave Function Collapse",
            credit: "Josh Forletta",
            creditType: "developer",
        }
    },
    quotes: {
        maximGumin: {
            quote: "[wave function collapse] doesn't do the actual quantum mechanics, but it was inspired by [it].",
            author: "Maxim Gumin",
            date: "09/17/2023",
            dateType: "accessed",
        },
        borisTheBrave: {
            quote: "Wave Function Collapse is a constraint problem with a twist…",
            author: "Boris the Brave",
            date: "2020",
            dateType: "published",
        }
    }
}
