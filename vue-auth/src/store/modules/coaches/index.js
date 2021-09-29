import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
	namespaced: true,
	state() {
		return {
			lastFetch: null,
			coaches: [
				{
					id: 'c1',
					firstName: 'Rick',
					lastName: 'Sanchez',
					areas: ['frontend', 'backend', 'career'],
					description:
						"I'm Rick and I've worked as a backend for years.",
					hourlyRate: 30
				},
				{
					id: 'c2',
					firstName: 'Morty',
					lastName: 'Smith',
					areas: ['frontend', 'career'],
					description:
						"I'm Morty and I've worked as a frontend for years.",
					hourlyRate: 50
				},
			]
		}
	},
	mutations,
	actions,
	getters
}
