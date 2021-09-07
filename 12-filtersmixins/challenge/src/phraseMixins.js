export default {
	computed: {
		phraseWithCommas() {
			return this.text.replace(/\s/g, ',')
		}
	}
}
