import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'
import requestsModule from './modules/requests/index.js'

const store = createStore({
	modules: {
		coaches: coachesModule,
		req: requestsModule
	},
	state() {
		return {
			userId: 'c3'
		}
	},
	getters: {
		userId(state) {
			console.log(state.userId)
			return state.userId;
		}
	}
})

export default store
