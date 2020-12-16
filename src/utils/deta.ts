const project_id = "a04lk5rq";
const base_name = 'rigel'

/**
 * 
 * @param id The ID of the resume
 * @param markdown The contents of the markdown
 */
export const uploadResume = async (id: string, markdown: string) => {
    const data: Record<string, object> = {
        "item": {
            "key": id,
            "value": markdown
        }
    }
    const response = await fetch(`https://database.deta.sh/v1/${project_id}/${base_name}/items`, {

        headers: {
            'Content-Type': "application/json",
            "X-API-Key": "a04lk5rq_JxwueC3tNZep53rcs2ShTF53Brg86uUR"
        },
        method: "POST",
        body: JSON.stringify(data, null, "\t")
    })
    return response
}

export const getResume = async (id: string) => {
    const response = await fetch(`https://database.deta.sh/v1/${project_id}/${base_name}/items/${id}`, {
        headers: {
            'Content-Type': "application/json",
            "X-API-Key": "a04lk5rq_JxwueC3tNZep53rcs2ShTF53Brg86uUR"
        },
    })
    const jsonResponse = await response.json()
    return jsonResponse.value
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}