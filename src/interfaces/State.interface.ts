import firebase from "firebase/app";
import { Question } from "@/interfaces/Question.interface";
import { User } from "@/interfaces/User.interface";

export interface State {
    firebase?: firebase.app.App;
    appInitialized: boolean;
    logged: boolean;
    loggedUser?: firebase.User;
    questions: Question[];
    users: User[];
}