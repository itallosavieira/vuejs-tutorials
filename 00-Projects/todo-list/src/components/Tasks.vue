<template>
	<div class="tasks">
		<ul>
			<li class="task" v-for="task in tasks" :key="task">
				<span> {{ task }} </span>
				<span @click="removeTask(task)" class="remove-btn"> x </span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
		border: 1px solid #3498db;
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
