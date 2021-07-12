import FirebaseConfig from "@/firebase.config.json";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Store from "@/store/";

const questions = (questionID?: string) => {
    if (questionID)
        return firebase.database().ref("questions").child(questionID);
    else return firebase.database().ref("questions");
};

export default {
    connect: () => {
        if (!Store.state.appInitialized) {
            firebase.initializeApp(FirebaseConfig);
            Store.dispatch("addFirebase", firebase);
        }
    },

    getQuestions: () => {
        questions().on("value", (snapshot) => {
            if (snapshot.exists()) {
                let questions = snapshot.val();

                questions = Object.entries(questions).map(([key, value]) => ({
                    id: key,
                    ...(value as Record<string, string>),
                }));

                Store.dispatch("getQuestions", questions);
            } else {
                Store.dispatch("getQuestions", {});
            }
        });
    },

    postQuestion: (question: string) => {
        questions().push({ question });
    },

    postAnswer: (questionID: string, answer: string) => {
        questions(questionID).update({ answer });
    },

    deleteQuestion: (questionID: string) => {
        questions(questionID).remove();
    },

    logIn: (email: string, password: string) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => console.log(user))
            .catch(err => console.log(err));
    },

    createUser: (email: string, password: string) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => console.log(user))
            .catch(err => console.log(err));
    },
};
