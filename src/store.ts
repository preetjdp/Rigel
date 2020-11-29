import { writable } from "svelte/store"

export const page = writable(0);

page.subscribe(value => {
    console.log(value);
});

export const nextPage = () => {
    page.update(n => n + 1)
}

export const previousPage = () => {
    page.update(n => n - 1)
}