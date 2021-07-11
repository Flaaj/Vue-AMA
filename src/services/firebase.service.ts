import { v4 as uuid } from "uuid";
import { QuestionObject } from "@/QuestionObject.type";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import FirebaseConfig from "@/firebase.config.json";
import Store from "@/store/";
const url = "http://localhost:3000/questions/";

export const connectFirebase = async () => {
    const response = await firebase.initializeApp(FirebaseConfig);
    Store.dispatch("addFirebase", firebase);
};

export const getQuestionsFromFirebase = async () => {
    const response = await firebase.database().ref("questions").get();
    const data = await response;
    if (data.exists()) {
        const questions = data.val();
        Store.dispatch("getQuestions", questions);
    } else {
        Store.dispatch("getQuestions", {});
    }
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
    const data: QuestionObject = await response.json();
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
    body: QuestionObject
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
