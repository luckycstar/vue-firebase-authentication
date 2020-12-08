import firebase from "firebase"

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
? { status: { loggedIn: true}, user, rememberme: false } 
: { status: {loggedIn: false}, user: null, rememberme: false};

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {

    async login({ commit }, login_user) {      
      return await firebase
        .auth()
        .signInWithEmailAndPassword(login_user.email, login_user.password)
        .then((res) => {
          commit('loginSuccess', res)
          return res
        })
        .catch((err) => {
          commit('login Failed', err)
          return err
        });
    },

    async logout({commit}) {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          commit('RESET_MODULE')
          commit('logoutSuccess')
        })
        .catch((err) => {
          commit('logoutFailed', err)
          return err
        });
    },

    async register({ commit }, register_user) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(register_user.email, register_user.password)
        .then((res) => {
          commit('registerSuccess', res)
          return res
        })
        .catch((err) => {
          commit(' registerFailed', err)
          return err
        });
    },

  },

  getters: {
    user_logged: state=>state.status.loggedIn,
    logged_user: state=>state.user,
    rememberme : state=>state.rememberme
  },

  mutations: {
    loginSuccess(state, res) {
      state.status.loggedIn = true;
      state.user = res.user;
    },

    loginFailed(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerFailed(state) {
      state.status.loggedIn = false;
      state.user = null;
    },

    logoutSuccess(state) {      
      state.status.loggedIn = false;
      state.user = null;
    },

    logoutFailed(err) {      
      console.log(err)

    },

    registerSuccess(state, res) {
      state.status.loggedIn = true;
      state.user = res.user;
    },

    RESET_MODULE (state) {
      
      Object.assign(state, initialState)
    },
    
  }
};