<template>
  <div class="tasks">
    <ul>
      <li
        @click="doneTask(i)"
        class="task"
        :class="[task.done ? 'done' : 'default']"
        v-for="(task, i) in tasks"
        :key="i"
      >
        <span> {{ task.title }} </span>
        <div @click="deleteTask(task, i)" class="remove-btn">
          <span>+</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from "@/bus";

export default {
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    bus.onInputedTask((task) => {
      this.tasks.push({ title: task, done: false });
    });
  },
  methods: {
    deleteTask(task, i) {
      setTimeout(() => {
        this.tasks.splice(this.tasks.indexOf(task), 1);
      }, 100);
    },
    doneTask(i) {
      console.log(this.tasks[i].done, this.tasks[i].title);
      this.tasks[i].done
        ? (this.tasks[i].done = false)
        : (this.tasks[i].done = true);
      console.log(this.tasks[i].done, this.tasks[i].title);
    },
  },
};
</script>

<style scoped>
.tasks {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 3rem 0;
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
  border-radius: 10px;
  height: 100px;
  width: 250px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  padding: 0 2rem 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: break-all;
  position: relative;
  font-size: 1.15rem;
  cursor: pointer;
  transition: all .25s;
}

.task:hover {
  box-shadow: rgb(0 0 0 / 20%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
}

.task:active {
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
}

.default {
  background-color: #fff;
}
.done {
  text-decoration: line-through;
  background-color: rgb(141, 228, 141);
}

.remove-btn {
  right: 0;
  height: 100%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: 1px solid transparent;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  position: absolute;
  transition: all 0.25s;
}

.remove-btn span {
  font-weight: 600;
  transform: rotate(45deg);
}

.task .remove-btn:hover {
  background: #ff5a5a;
  color: #fff;
}
</style>
