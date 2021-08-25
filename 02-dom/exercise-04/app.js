new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		class3: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque'
					? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {

		}
	}
})
