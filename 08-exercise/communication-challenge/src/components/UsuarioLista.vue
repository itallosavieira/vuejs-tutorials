<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id"
                    @click="setSelectedUser(user)">
                    <td>{{ user.id }}</td>
                    <td>{{ user.nome }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import bus from '@/bus'

export default {
    props: { users: Array },
    methods: {
        setSelectedUser(user) {
            bus.setSelectedUser(user)
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
