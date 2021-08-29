import Vue from 'vue'

export default new Vue({
	methods: {
		setInputedTask(task) {
			this.$emit('inputedTask', task)
		},
		onInputedTask(callback) {
			this.$on('inputedTask', callback)
		}
	}
})
