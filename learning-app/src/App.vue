<template>
	<the-header title="RememberMe"></the-header>
	<the-resources></the-resources>
	<stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';
import TheResources from './components/learning-resources/TheResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
	components: {
		StoredResources,
		TheHeader,
		TheResources
	},
	data() {
		return {
			storedResources: [
				{
					id: 'official-guide',
					title: 'Official Guide',
					description: 'The official Vue.js documentation',
					link: 'https://vuejs.org',
				},
				{
					id: 'google',
					title: 'Google',
					description: 'Search engine google',
					link: 'https://google.com',
				},
			],
		};
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Arial, Helvetica, sans-serif ;
}
</style>
