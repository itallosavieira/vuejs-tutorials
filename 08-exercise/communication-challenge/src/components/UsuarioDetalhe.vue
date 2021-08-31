<template>
  <div class="usuario-detalhe">
    <h2 v-if="!user">Usuário não selecionado!</h2>
    <div v-else>
      <h2>ID: {{ user.id }}</h2>
      <h2>Nome: {{ user.nome }}</h2>
      <h2>Idade: {{ user.idade }}</h2>
    </div>
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
	bus.onInputedTask(task => {
      this.tasks.push(task)
    });
  },
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
