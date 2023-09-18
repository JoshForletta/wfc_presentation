import { html } from "../utils/html";

export type QuoteDetail = {
    quote: string,
    author: string,
    date: string,
    dateType: DateType,
}

export enum DateType {
    Published = "published",
    Accessed = "accessed",
}

export let createQuoteCard = function(quote: QuoteDetail): HTMLElement {
    return html(`
        <div class="quote-slide">
            <blockquote class="quote-slide__quote">"${quote.quote}"</blockquote>
            <p class="quote-slide__author">${quote.author}</p>
            <p class="quote-slide__date">${quote.dateType}: ${quote.date}</p>
        </div>
    `);
}
