<template>
	<div id="app" class="container-fluid">
		<h1>Animations</h1>
		<hr>
		<b-button
			variant="primary" class="mb-4"
			@click="show = !show">Show Message</b-button>

		<!--
		<transition name="fade">
			<b-alert
				variant="info" show
				v-if="show">{{ message }}</b-alert>
		</transition>
		-->
		<transition name="slide" mode="out-in">
			<b-alert variant="info" show v-if="show" key="info">{{ message }}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{ message }}</b-alert>
		</transition>

		<hr>


		<button @click="show2 = !show2">Action</button>
		<transition>

			<div v-if="show2" class="box"></div>
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			message: 'An info message for the user',
			show: false,
			show2: false
		}
	},
	methods: {
		beforeEnter(el) {
		},
		enter(el, done) {

		},
		afterEnter(el) {
		},
		enterCancelled(el) {
		},
		beforeLeave(el) {
		},
		leave(el, done) {
		},
		afterLeave(el) {
		},
		leaveCancelled(el) {
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

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

hr {
	margin: 50px 0;
}

.box {
	margin: 20px auto;
	height: 100px;
	width: 300px;
	background-color: lightgreen;
}

</style>
