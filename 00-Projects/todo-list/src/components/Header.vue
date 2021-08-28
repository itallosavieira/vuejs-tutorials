<template>
	<div class="header">
		<h1> {{ title }} </h1>
	</div>
</template>

<script>

export default {
	props: {
		title: String,
	},
	data() {
		return {
		}
	}
}
</script>

<style>
	.header h1 {
		margin: 2rem 0;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
