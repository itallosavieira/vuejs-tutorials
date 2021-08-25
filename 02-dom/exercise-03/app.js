new Vue({
    el: '#challenge',
    data: {
        value: 0
    },
    watch: {
        result() {
            console.log('change...')
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    },
    computed: {
        result() {
            return this.value !== 37 ?
                'different' : 'equal'
        }
    }
});
