new Vue({
    el: '#challenge',
    data: {
        value: ''
    },
    methods: {
        showAlert() {
            window.alert('Alerrrrtt')
        },
        updateValue(event) {
            return this.value = event.target.value;
        }
    }
})
