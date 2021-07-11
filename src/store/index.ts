import { createStore } from "vuex";
import { QuestionObject } from "@/QuestionObject.type";

type State = {
  firebase?: any;
  logged: boolean;
  user?: any;
  questions: QuestionObject[]
}

export default createStore<State>({
  state: {
    firebase: undefined,
    logged: false,
    user: undefined,
    questions: [],
  },
  mutations: {
    addFirebase(state, firebase: any) {
      console.log("Adding firebase to store")
      state.firebase = firebase;
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
    addQuestion(state, question: QuestionObject) {
      state.questions.push(question);
    }
  },
  actions: {
    addFirebase(context, firebase: any) {
      context.commit('addFirebase', firebase);
    },
    logIn(context) {
      context.commit('logIn');
    },
    logOut(context) {
      context.commit('logOut');
    },
    getQuestions(context, questions: QuestionObject[]) {
      context.commit('addQuestion', questions);
    },
    addQuestion(context, question: QuestionObject) {
      context.commit('addQuestion', question);
    },

  },
  modules: {},
});
