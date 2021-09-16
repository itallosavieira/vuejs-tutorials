<template>
	<base-container title="Vuex">
		<the-counter></the-counter>
		<button @click="addOne">Add 1</button>
		<button @click="addTen">Add 10</button>
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
	components: {
		BaseContainer,
		TheCounter,
	},
	methods: {
		addOne() {
			this.$store.dispatch('increment');
		},
		addTen() {
			this.$store.dispatch({
				type: 'increase',
				value: 10,
			});
		},
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
