<template>
	<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
		<p>{{ error }}</p>
	</base-dialog>
	<section>
		<base-card>
			<header>
				<h2>Requests Received</h2>
			</header>
			<base-spinner v-if="isLoading"></base-spinner>
			<ul v-else-if="hasRequests && !isLoading">
				<request-item
					v-for="req in receivedRequests"
					:key="req.id"
					:message="req.userMessage"
					:email="req.userEmail"
				>
				</request-item>
			</ul>
			<h3 v-else>You have not received any requests yet.</h3>
		</base-card>
	</section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
	components: { RequestItem },
	data() {
		return {
			isLoading: false,
			error: null
		}
	},
	computed: {
		receivedRequests() {
			return this.$store.getters['req/requests'];
		},
		hasRequests() {
			return this.$store.getters['req/hasRequests'];
		},
	},
	created() {
		this.loadRequests();
	},
	methods: {
		async loadRequests() {
			this.isLoading = true;
			try {
				await this.$store.dispatch('req/fetchRequests');
			} catch (error) {
				this.error = error.message || 'Something Failed';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		}
	}
};
</script>

<style scoped>
header {
	text-align: center;
}

ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 30rem;
}

h3 {
	text-align: center;
}
</style>
