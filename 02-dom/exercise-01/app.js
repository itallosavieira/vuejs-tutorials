const vm = new Vue({
	el: '#challenge',
	data: {
		name: 'Itallo',
		age: 25,
		imgSrc: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg',
	},
	methods: {
		multiplyAge() {
			return this.age * 3;
		},
		getRandomNumber() {
			return Math.round(Math.random() * 100);
		}
	}
});
