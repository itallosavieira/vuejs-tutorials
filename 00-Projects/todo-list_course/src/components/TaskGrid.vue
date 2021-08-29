<template>
	<div
		class="tasks task-grid">
		<template v-if="tasks.length">
			<Task
				v-for="(task, i) in tasks"
				@taskStateChanged="$emit('taskStateChanged', i)"
				@taskDeleted="$emit('taskDeleted', i)"
				:key="task.name"
				:task="task" />
		</template>

		<p v-else
			class="no-task">Your life is up to date! :)</p>
	</div>
</template>

<script>
import Task from './Task.vue'

export default {
	components: {
		Task,
	},
	props: {
		tasks: { type: Array, required: true },
	}
}
</script>

<style>
	.task-grid {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.task-grid .task {
		margin: 10px;
	}

	.no-task {
		color: #aaa;
		font-size: 1.74rem;
	}
</style>
