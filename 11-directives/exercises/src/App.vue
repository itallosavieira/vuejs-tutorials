<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-destaque:bg="color" v-text="'teste teste teste'"></p>
		<p v-destaque.delay="color" v-text="'teste teste teste'"></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			color: 'lightgreen'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
