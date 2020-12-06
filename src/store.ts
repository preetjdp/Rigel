import { writable } from "svelte/store"

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