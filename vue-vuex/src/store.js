import { setTimeout } from 'core-js';
import { createStore } from 'vuex';

const counterModule = {
	namespaced: true,
	state() {
		return {
			counter: 0,
		};
	},
	mutations: {
		increment(state) {
			state.counter = state.counter + 1;
		},
		increase(state, payload) {
			state.counter = state.counter + payload.value;
		},
	},
	getters: {
		finalCounter(state) {
			return state.counter * 3;
		},
		normalizedCounter(_, getters) {
			const finalCounter = getters.finalCounter;
			if (finalCounter < 0)
				return 0;
			if (finalCounter > 100)
				return 100;
			return finalCounter;
		},
	},
	actions: {
		increment(context) {
			setTimeout(() => {
				context.commit('increment');
			}, 2000);
		},
		increase(context, payload) {
			context.commit('increase', payload)
		},
	}
}

const authModule = {
	namespaced: true,
	state() {
		return {
			isLoggedIn: false
		};
	},
	mutations: {
		setAuth(state, payload) {
			state.isLoggedIn = payload.isAuth;
		}
	},
	getters: {
		userIsAuthenticated(state) {
			return state.isLoggedIn;
		}
	},
	actions: {
		login(context) {
			context.commit('setAuth', { isAuth: true })
		},
		logout(context) {
			context.commit('setAuth', { isAuth: false })
		}
	}
}

const store = createStore({
	modules: {
		numbers: counterModule,
		auth: authModule
	}
})

export default store
