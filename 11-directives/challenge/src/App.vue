<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<h2> {{ counter }} </h2>
		<button v-when:mouseenter='add'> + </button>
		<h2> {{ counter }} </h2>
		<button v-when:click='add'> + </button>
	</div>
</template>

<script>
export default {
	directives: {
		'when': {
			bind(el, binding) {
				const type = binding.arg
				const fn = binding.value
				el.addEventListener(type, fn)
			}
		}
	},
	data() {
		return {
			counter: 0
		}
	},
	methods: {
		add() {
			this.counter++;
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
