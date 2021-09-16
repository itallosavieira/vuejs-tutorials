<template>
	<h2>{{ finalCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['finalCounter']),
	},
};
</script>
