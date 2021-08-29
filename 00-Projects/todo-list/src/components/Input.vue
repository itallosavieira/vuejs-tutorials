<template>
  <div class="input">
    <input v-model="task" @keydown.enter="addTask()" type="text" />
  </div>
</template>

<script>
export default {
	data() {
		return {
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

<style scoped>
	.input input {
		border: 0;
		border-bottom: 1px solid #3498db;
		outline: none;
		width: 100%;
		text-align: center;
		font-size: 26px;
		background-color: transparent;
		padding: 10px;
	}
</style>
