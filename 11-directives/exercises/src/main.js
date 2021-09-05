import Vue from 'vue'
import App from './App.vue'

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		let delay = 0;
		if(binding.modifiers['delay']) delay = 3000

		setTimeout(() => {
			if(binding.arg === 'bg') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, delay);

	}
})

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
