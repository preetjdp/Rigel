import { derived, writable } from "svelte/store"

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
        start_working_month: string
        start_working_year: string
        end_working_month: string
        end_working_year: string
        what_did_you_do_there: string
    }
    educationInfo: {
        edu_type: string
        institute_name: string
        course_name: string
        start_studying_month: string
        start_studying_year: string
        end_studying_month: string
        end_studying_year: string
        what_did_you_do_there: string
    },
    extraInfo: {
        title: string
        description: string
    }
}

export const information = writable<RecursivePartial<AllInformation>>({
    personalInfo: {},
    workInfo: {
        job_type: 'Professional'
    },
    educationInfo: {
        edu_type: 'Formal'
    },
    extraInfo: {},

})

export const derivedInformation = derived(information, (e) => `
### Information
${e.personalInfo.email}
${e.personalInfo.name}
`)

information.subscribe(value => {
    console.log("UPADTE TO INFORMATION", value);
});