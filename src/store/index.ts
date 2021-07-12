import { createStore } from "vuex";
import { State } from "@/interfaces/State.interface"
import { Question } from "@/interfaces/Question.interface";
import { User } from "@/interfaces/User.interface";
import firebase from "firebase/app";


export default createStore<State>({
  state: {
    firebase: undefined,
    appInitialized: false,
    logged: false,
    loggedUser: undefined,
    questions: [],
    users: [],
  },
  mutations: {
    addFirebase(state, firebase: firebase.app.App) {
      state.firebase = firebase;
      state.appInitialized = true;
    },
    login(state, user: firebase.User) {
      state.logged = true;
      state.loggedUser = user;
    },
    logout(state) {
      state.logged = false;
      state.loggedUser = undefined;
    },
    getQuestions(state, questions: Question[]) {
      state.questions = questions;
    },
    getUsers(state, users: User[]) {
      state.users = users;
    }
  },
  actions: {
    addFirebase(context, firebase: firebase.app.App) {
      context.commit('addFirebase', firebase);
    },
    login(context, user: firebase.User) {
      context.commit('login', user);
    },
    logout(context) {
      context.commit('logout');
    },
    getQuestions(context, questions: Question[]) {
      context.commit('getQuestions', questions);
    },
    getUsers(context, users: User[]) {
      context.commit('getUsers', users);
    }

  },
  modules: {},
});
