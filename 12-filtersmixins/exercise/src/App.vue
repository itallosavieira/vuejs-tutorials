<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<h2>{{ myCpf | cpf }}</h2>
	</div>
</template>

<script>
export default {
	filters: {
		cpf(value) {
			const arr = value.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			myCpf: '44333309867'
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
