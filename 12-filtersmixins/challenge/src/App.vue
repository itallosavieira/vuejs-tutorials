<template>
	<div id="app">
		<h1>Filters & Mixins (Challenge)</h1>
		<p>{{ phraseWithCommas }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import phraseMixins from './phraseMixins'

export default {
	mixins: [phraseMixins],
	filters: {
		spaceToComma(value) {
			return value.replace(/\s/g, ', ')
		}
	},
	data() {
		return {
			text: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
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
