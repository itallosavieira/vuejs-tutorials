<template>
	<div id="app">
		<app-header :title="title"></app-header>

		<app-input></app-input>

		<app-tasks></app-tasks>
	</div>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import AppInput from '@/components/Input.vue'
import AppTasks from '@/components/Tasks.vue'

export default {
	components: {
		AppHeader,
		AppInput,
		AppTasks
	},
	data() {
		return {
			title: 'Tasks',
			tasks: [],
		}
	},
	methods: {

	}
}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-family: 'Lato', sans-serif;
		background: rgb(255,255,255);
		background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(231,231,255,1) 35%, rgba(213,248,255,1) 100%);
		color: #413D55;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
