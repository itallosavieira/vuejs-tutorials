import Vue from 'vue'
import App from './App.vue'

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		let delay = 0
		let interval = 1000

		const color1 = binding.value
		const color2 = 'purple'
		let currentColor = color1

		function applyColor(color) {
			if(binding.arg === 'bg') {
				el.style.backgroundColor = color
			} else {
				el.style.color = color
			}
		}

		if(binding.modifiers['delay']) delay = 3000

		if(binding.modifiers['alternate']) {
			setTimeout(() => {
				setInterval(() => {
					currentColor = currentColor === color1 ? color2 : color1
					applyColor(color)
				}, interval)
				applyColor(color)
			}, delay);
		}


	}
})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
