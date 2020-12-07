import { Deta } from "deta"

const deta = Deta('project key');
const db = deta.Base('rigel');

/**
 * 
 * @param id The ID of the resume
 * @param markdown The contents of the markdown
 */
export const uploadResume = (id: string, markdown: string) => {
    return db.put(markdown, id)
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}