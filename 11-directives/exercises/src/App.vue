<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p
			v-destaque-local:bg="{color1: color}"
			v-text="'teste teste teste'"></p>
		<p
			v-destaque-local.delay.alternate="{color1: 'lightgreen', color2: 'purple', delay: 5000, interval: 200}"
			v-text="'teste teste teste'"></p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			color: 'lightgreen'
		}
	},
	directives: {
		'destaque-local': {
			bind(el, binding) {
				let delay = 0
				if(binding.modifiers['delay']) delay = binding.value.delay

				const color1 = binding.value.color1
				const color2 = binding.value.color2
				let currentColor = color1

				function applyColor(color) {
					if(binding.arg === 'bg') {
						el.style.backgroundColor = color
					} else {
						el.style.color = color
					}
				}

				setTimeout(() => {
					if(binding.modifiers['alternate']) {
						setInterval(() => {
							currentColor = currentColor === color1 ? color2 : color1
							applyColor(currentColor)
						}, binding.value.interval)
					} else {
						applyColor(color1)
					}
				}, delay);
			}
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
