<template>
	<the-header title="RememberMe"></the-header>
	<the-resources></the-resources>
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
	components: {
		TheHeader,
		TheResources
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
