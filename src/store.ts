import { writable } from "svelte/store"

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

interface AllInformation {
    personalInfo: {
        name: string
        look_your_self_into: string
        email: string
    }
    workInfo: {
        job_type: string
        role: string
        org: string
        start_working: string
        end_working: string
        what_did_you_do_there: string
    }
    extraInfo: {
        title: string
        description: string
    }
}

export const information = writable<RecursivePartial<AllInformation>>({
    personalInfo: {},
    extraInfo: {},
    workInfo: {}
})

information.subscribe(value => {
    console.log("UPADTE TO INFORMATION", value);
});