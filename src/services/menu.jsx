import users from '../assets/icons/users.svg';
import sessions from '../assets/icons/sessions.svg';
import analytics from '../assets/icons/analytics.svg';
import messages from '../assets/icons/messages.svg';
import chats from '../assets/icons/chats.svg';
import help from '../assets/icons/help.svg';
import settings from '../assets/icons/settings.svg';

import routes from '../routes';

const menu = [
	{
		id: 1,
		title: 'Users',
		icon: users,
		desc: '',
		active: true,
		path: routes.USERS,
	},
	{
		id: 2,
		title: 'Sessions',
		icon: sessions,
		desc: '85',
		active: true,
		path: routes.SESSIONS,
	},
	{
		id: 3,
		title: 'Analytics',
		icon: analytics,
		desc: 'Soon',
		active: true,
		path: routes.ANALYTICS,
	},
	{
		id: 4,
		title: 'Messages',
		icon: messages,
		desc: 'Soon',
		active: true,
		path: routes.MESSAGES,
	},
	{
		id: 5,
		title: 'Chats',
		icon: chats,
		desc: 'Soon',
		active: true,
		path: routes.CHATS,
	},
	{
		id: 6,
		title: 'Help center',
		icon: help,
		desc: 'Soon',
		active: true,
		path: routes.HELP,
	},
	{
		id: 7,
		title: 'Settings',
		icon: settings,
		desc: '',
		active: true,
		path: routes.SETTINGS,
	},
];

export default menu;
