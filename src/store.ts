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

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

interface AllInformation {
    personalInfo: {
        name: string
        email: string
    }
}

export const information = writable<RecursivePartial<AllInformation>>({
    personalInfo: {}
})

information.subscribe(value => {
    console.log("UPADTE TO INFORMATION", value);
});