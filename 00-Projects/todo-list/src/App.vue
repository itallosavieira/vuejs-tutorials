<template>
	<div id="app">
		<app-header :title="title"></app-header>

		<div class="input">
			<input v-model="task" @keydown.enter="addTask()" type="text">
		</div>

		<div class="tasks">
			<ul>
				<li class="task" v-for="task in tasks" :key="task">
					<span> {{ task }} </span>
					<span @click="removeTask(task)" class="remove-btn"> x </span>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
import AppHeader from '@/components/Header'

export default {
	components: {
		AppHeader,
	},
	data() {
		return {
			title: 'Tasks',
			tasks: [],
			task: ''
		}
	},
	methods: {
		resetTaskInput() {
			this.task = ''
		},
		addTask() {
			this.tasks.push(this.task)
			this.resetTaskInput();
		},
		removeTask(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1);
		}
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
		background-color: #f5f7fb;
		color: #413D55;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.input input {
		border: 0;
		border-bottom: 1px solid #3498db;
		outline: none;
		width: 100%;
		text-align: center;
		font-size: 26px;
		background-color: transparent;
		color: #2c3e50;
	}

	.tasks {
		display: flex;
		justify-content: center;
		background: #fff;
		width: 80%;
		margin: 2rem 0;
	}
	.tasks ul {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.task {
		list-style: none;
		border: 1px solid #413D55;
		border-radius: 10px;
    	height: 100px;
    	width: 250px;
		position: relative;
		padding: 1rem;
	}

	.task .remove-btn {
		top: 0;
		right: .5rem;
		position: absolute;
	}
</style>
