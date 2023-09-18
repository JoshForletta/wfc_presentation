import { html } from "../utils/html";

export type ImageDetail = {
    src: string;
    alt: string;
    credit?: string;
    creditType?: string;
    url?: string,
}

export let createImageCard = function(imageDetail: ImageDetail) {
    let imageCard = html(`
        <div class="image-card">
            <img src="${imageDetail.src}" alt="${imageDetail.alt}" class="image-card__image">
        </div>
    `);


    if (imageDetail.credit != null) {
        let credit = html(`<div class="image-card__credit"></div>`);

        if (imageDetail.creditType != null) {
            credit.appendChild(html(`<span>${imageDetail.creditType}: </span>`))
        }

        credit.append(imageDetail.credit);

        imageCard.appendChild(credit)

    }

    if (imageDetail.url != null) {
        imageCard.appendChild(html(`
            <a class="image-card__url" src="${imageDetail.url}">
                ${imageDetail.url}
            </a>`
        ));
    }

    return imageCard;
}
