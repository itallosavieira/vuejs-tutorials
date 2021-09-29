<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-family: Arial, Helvetica, sans-serif;
}
</style>
