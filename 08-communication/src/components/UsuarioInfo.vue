<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            //default: function() {
            //    return Array(5).fill(0).join('-')
            //}
            // required: true
            default: 'Anonimo'
        }
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.nome = 'Itallo'
            this.$emit('nomeMudou', this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
