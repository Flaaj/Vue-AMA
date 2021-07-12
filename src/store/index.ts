import { createStore } from "vuex";
import { QuestionObject } from "@/QuestionObject.interface";
import firebase from "firebase/app";

interface State {
  firebase?: firebase.app.App;
  appInitialized: boolean;
  logged: boolean;
  user?: any;
  questions: QuestionObject[]
}

export default createStore<State>({
  state: {
    firebase: undefined,
    appInitialized: false,
    logged: false,
    user: undefined,
    questions: [],
  },
  mutations: {
    addFirebase(state, firebase: firebase.app.App) {
      state.firebase = firebase;
      state.appInitialized = true;
    },
    logIn(state, user: any) {
      state.logged = true;
      state.user = user;
    },
    logOut(state) {
      state.logged = false;
      state.user = undefined;
    },
    getQuestions(state, questions: QuestionObject[]) {
      state.questions = questions;

    },
  },
  actions: {
    addFirebase(context, firebase: firebase.app.App) {
      context.commit('addFirebase', firebase);
    },
    logIn(context) {
      context.commit('logIn');
    },
    logOut(context) {
      context.commit('logOut');
    },
    getQuestions(context, questions: QuestionObject[]) {
      context.commit('getQuestions', questions);
    },

  },
  modules: {},
});
