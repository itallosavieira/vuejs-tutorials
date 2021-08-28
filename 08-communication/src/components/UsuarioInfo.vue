<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuario <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import bus from '@/bus'

export default {
    props: {
        nome: {
            type: String,
            //default: function() {
            //    return Array(5).fill(0).join('-')
            //}
            // required: true
            default: 'Anonimo'
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            this.$emit('nomeMudou', 'Itallo')
        }
    },
    created() {
        bus.quandoIdadeMudar(idade => {
            this.idade = idade
        })
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
