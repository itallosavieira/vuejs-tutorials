export default {
	namespaced: true,
	state() {
		return {
			isLoggedIn: false,
		}
	},
	mutations: {
		setAuth(state, payload) {
			state.isLoggedIn = payload.isAuth;
		}
	},
	getters: {
		userIsAuth(state) {
			return state.isLoggedIn;
		}
	},
	actions: {
		login(context) {
			context.commit('setAuth', { isAuth: true });
		},
		logout(context) {
			context.commit('setAuth', { isAuth: false });
		}
	}
}
