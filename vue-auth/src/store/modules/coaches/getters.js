export default {
	coaches(state) {
		return state.coaches; //list of coaches
	},
	hasCoaches(state) {
		return state.coaches && (state.coaches.length > 0); //true or false
	},
	isCoach(_, getters, _2, rootGetters) {
		const coaches = getters.coaches;
		const userId = rootGetters.userId;
		return coaches.some(coach => coach.id === userId);
	},
	shouldUpdate(state) {
		const lastFetch = state.lasFetch;
		if (!lastFetch) {
			return true
		}
		const currentTimeStamp = new Date().getTime();
		return (currentTimeStamp - lastFetch) / 1000 > 60;
	}
};
