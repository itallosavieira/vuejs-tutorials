export default {
	async contactCoach(context, payload) {
		const newRequest = {
			userEmail: payload.email,
			userMessage: payload.message
		};

		const response = await fetch(`https://vue-test-f3770-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
			method: 'POST',
			body: JSON.stringify(newRequest)
		});

		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to send request.');
			throw error;
		}

		newRequest.id = responseData.name;


		context.commit('addRequest', newRequest);
	},
	async fetchRequests(context) {
		const coachId = context.rootGetters.userId;
		const response = await fetch(`https://vue-test-f3770-default-rtdb.firebaseio.com/requests/${coachId}.json`);
		const responseData = await response.json();

		if (!response.ok) {
			const error = new Error(responseData.message || 'Failed to fetch request.');
			throw error;
		}

		const requests = [];
		
		for (const key in responseData) {
			const request = {
				id: key,
				coachId: coachId,
				userEmail: responseData[key].userEmail,
				userMessage: responseData[key].userMessage
			};
			requests.push(request);
		}

		context.commit('setRequests', requests);
	}
};
