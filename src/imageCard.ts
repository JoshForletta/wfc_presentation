export type ImageDetail = {
    src: string;
    alt: string;
    credit?: string;
    creditType?: string;
    url?: string,
}

export let createImageCard = function(imageDetail: ImageDetail) {
    let imageCard = document.createElement("div");
    imageCard.classList.add("image-card");

    imageCard.innerHTML = `
        <img src="${imageDetail.src}" alt="${imageDetail.alt}" class="image-card__image">
    `;

    if (imageDetail.credit != null) {
        let credit = document.createElement("div");
        credit.classList.add("image-card__credit");

        if (imageDetail.creditType != null) {
            let creditType = document.createElement("span");

            creditType.innerText = `${imageDetail.creditType}: `;

            credit.appendChild(creditType);
        }

        credit.append(imageDetail.credit);

        imageCard.appendChild(credit);
    }

    if (imageDetail.url != null) {
        let url = document.createElement("a") as HTMLAnchorElement;
        url.classList.add("image-card__url");
        url.setAttribute("src", imageDetail.url);

        url.innerText = imageDetail.url;

        imageCard.appendChild(url);
    }

    return imageCard;
}
