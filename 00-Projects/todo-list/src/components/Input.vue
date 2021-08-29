<template>
  <div class="input">
    <input v-model="task"
		 @keydown.enter="setInputedTask(task)"
		 type="text"
		 autofocus/>
  </div>
</template>

<script>
import bus from '@/bus'

export default {
	props: {
		tasks: Array
	},
	data() {
		return {
			task: '',
		}
	},
	methods: {
		resetTaskInput() {
			this.task = ''
		},
		setInputedTask(task) {
			task ? bus.setInputedTask(task) :
				window.alert('Empty Input')
			this.resetTaskInput()
		},
		removeTask(task) {
			this.tasks.splice(this.tasks.indexOf(task), 1);
		},
		setTasks() {

		}
	}
}
</script>

<style scoped>
	.input {
		display: flex;
    	justify-content: center;
	}

	.input input {
		border: 0;
		border-radius: 10px;
		outline: none;
		width: 90%;
		text-align: center;
		box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
		font-size: 26px;
		background-color: #fff;
		padding: 1rem;
		color: #413d55c4;
		font-weight: 100;

	}
</style>
