import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';

import App from './App.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/users/',
			component: UsersList
		},
		{
			name: 'teams',
			path: '/teams',
			component: TeamsList,
			alias: '/',
			children: [
				{
					name: 'team-members',
					path: ':teamId',
					component: TeamMembers,
					props: true
				},
			]
		},
		{
			path: '/:notFound(.*)', redirect: '/teams'
		}
	]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
