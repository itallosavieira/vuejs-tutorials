<template>
	<div id="app">
		<h1>{{ title }}</h1>
		<button @click="title += ' # ' "> ala </button>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			title: 'Hello VueJS!'
		}
	}
};
</script>
