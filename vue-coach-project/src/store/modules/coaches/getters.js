export default {
	coaches(state) {
		return state.coaches; //list of coaches
	},
	hasCoaches(state) {
		return state.coaches && (state.coaches.length > 0); //true or false
	}
};
