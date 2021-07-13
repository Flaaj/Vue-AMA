import FirebaseConfig from "@/firebase.config.json";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import Store from "@/store";

export default {
    connect() {
        if (!Store.state.appInitialized) {
            firebase.initializeApp(FirebaseConfig);
            Store.dispatch("addFirebase", firebase);
        }
    },

    authStateListener() {
        firebase.auth().onAuthStateChanged((user) => {
            Store.dispatch("login", user);
        });
    },

    getQuestions() {
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

    postQuestion(question: string, askedTo: string) {
        questions().push({ question, askedTo });
    },

    postAnswer(questionID: string, answer: string) {
        questions(questionID).update({ answer });
    },

    deleteQuestion(questionID: string) {
        questions(questionID).remove();
    },

    login(email: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => Store.dispatch("login", user))
            .catch((err) => console.log(err));
    },

    logout() {
        console.log("siema")
        firebase
            .auth()
            .signOut()
            .then(() => {
                Store.dispatch("logout");
            }).catch(err => console.log(err));
    },

    createUser(email: string, password: string) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                addUser(email, user ? user.uid : "");
                Store.dispatch("login", user);
            })
            .catch((err) => console.log(err));
    },

    getUsers() {
        users().on("value", (snapshot) => {
            if (snapshot.exists()) {
                let users = snapshot.val();

                users = Object.entries(users).map(([key, value]) => ({
                    id: key,
                    ...(value as Record<string, string>),
                }));
                Store.dispatch("getUsers", users);
            } else {
                Store.dispatch("getUsers", {});
            }
        });
    },
};

const addUser = (email: string, userID: string) => {
    const user = { email };
    users(userID).set(user);
};

const questions = (questionID?: string) => {
    if (questionID)
        return firebase.database().ref("questions").child(questionID);
    else return firebase.database().ref("questions");
};

const users = (userID?: string) => {
    if (userID) return firebase.database().ref("users").child(userID);
    else return firebase.database().ref("users");
};
