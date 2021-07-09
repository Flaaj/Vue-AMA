import { v4 as uuid } from "uuid";

const url = "http://localhost:3000/questions/";

type MessageObject = {
    id: string;
    question: string;
    answer?: string;
};

export const postQuestion = async (question: string) => {
    const id = uuid();
    const body = {
        id,
        question,
        answer: "",
    };

    const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body),
    });
    const data: MessageObject = await response.json();
    return data;
};

export const getQuestions = async () => {
    const response = await fetch(url);
    if (response.ok) {
        const questions = await response.json();
        return questions;
    } else {
        const { status, statusText } = response;
        return {
            error: true,
            status,
            statusText,
        };
    }
};

export const answerQuestion = async (
    questionID: string,
    body: MessageObject
) => {
    const questionURL = url + questionID;
    const response = await fetch(questionURL, {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(body),
    });
    console.log(response);

    if (response.ok) {
        const question = await response.json();
        return question;
    } else {
        const { status, statusText } = response;
        return {
            error: true,
            status,
            statusText,
        };
    }
};

export const deleteQuestion = async (questionID: string) => {
    const questionURL = url + questionID;
    const response = await fetch(questionURL, {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
    });
    if (response.ok) {
        console.log(response);
        return "";
    } else {
        const { status, statusText } = response;
        return {
            error: true,
            status,
            statusText,
        };
    }
};
