<template>
	<base-container title="Vuex" v-if="userIsAuthenticated">
		<the-counter></the-counter>
		<button @click="increment">increment</button>
		<button @click="increase({ value: 10 })">increase</button>
	</base-container>
	<base-container title="Auth">
		<user-auth></user-auth>
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	components: {
		BaseContainer,
		TheCounter,
		UserAuth,
	},
	methods: {
		...mapActions('numbers', ['increment', 'increase']),
	},
	computed: {
		...mapGetters('auth', ['userIsAuthenticated']),
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
