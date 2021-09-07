<template>
	<div id="app" class="container-fluid">
		<h1>Animations</h1>
		<hr>
		<b-button
			variant="primary" class="mb-4"
			@click="show = !show">Show Message</b-button>

		<transition name="fade">
			<b-alert
				variant="info" show
				v-if="show">{{ message }}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			message: 'An info message for the user',
			show: false
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
	font-size: 1.5rem;
}

.fade-enter {

}
.fade-enter-active {

}
.fade-enter-to {

}
.fade-leave {

}
.fade-leave-active {

}
.fade-leave-to {

}
</style>
