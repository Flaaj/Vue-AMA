import { v4 as uuid } from "uuid";

const url = "http://localhost:3000/questions/";

interface MessageObject {
    id: string;
    question: string;
    answer?: string;
}

export const postQuestion = async (question: string) => {
    const id = uuid();
    const body = {
        id,
        question,
        answer: "",
    };
    const resp = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body),
    });
    const data = await resp.json();
    return data;
};
