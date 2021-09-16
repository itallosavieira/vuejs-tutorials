import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue'


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			name: 'users',
			path: '/users/',
			components: { default: UsersList, footer: UsersFooter },
		},
		{
			name: 'teams',
			path: '/teams',
			components: { default: TeamsList, footer: TeamsFooter },
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
	],
	scrollBehavior(_, _2, savedPosition) {
		if (savedPosition) {
			return savedPosition
		}
		return { left: 0, top: 0 }
	}
});

export default router
