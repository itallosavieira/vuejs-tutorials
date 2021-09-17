<template>
	<section>
		<base-card>
			<header>
				<h2>Requests Received</h2>
			</header>
			<ul>
				<request-item
					v-for="req in receivedRequests"
					:key="req.id"
					:message="req.userMessage"
					:email="req.userEmail"
				>
				</request-item>
			</ul>
			<h3>You have not received any requests yet.</h3>
		</base-card>
	</section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
	components: { RequestItem },
	computed: {
		receivedRequests() {
			return this.$store.getters['req/requests'];
		},
		hasRequests() {
			return this.$store.getters['req/hasRequests'];
		},
	},
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
