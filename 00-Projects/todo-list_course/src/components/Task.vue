<template>
	<div
		@click="$emit('taskStateChanged', task)"
		class="task"
		:class="stateClass">
		<span
			@click="$emit('taskDeleted', task)"
			class="close">x</span>

		<p>{{ task.name }}</p>
	</div>
</template>

<script>
export default {
	props: {
		task: { type: Object, required: true}
	},
	computed: {
		stateClass() {
			return {
				pending: !this.task.done,
				done: this.task.done
			}
		}
	}
}
</script>

<style>
	.task {
		box-sizing: border-box;
		width: 350px;
		height: 150px;
		padding: 10px;
		border-radius: 8px;
		font-size: 2rem;
		font-weight: 300;
		cursor: pointer;
		user-select: none;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.pending {
		border-left: 12px solid #b73229;
		background-color: #f44336;
	}

	.done {
		color: #ddd;
		border-left: 12px solid #088f40;
		background-color: #1fa054;
		text-decoration: line-through;
	}

	.pending .close {
		background-color: #b73229;
	}

	.done .close {
		background-color: #088f40;;
	}

	.close {
		position: absolute;
		right: 10px;
		top: 10px;
		font-size: 0.9rem;
		height: 20px;
		width: 20px;
		border-radius: 10px;
		display: flex;
		justify-content: center;
	}
</style>
