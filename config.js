// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'CafecitoHippo',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '69fde5a4383272f5c5b218021a150dcc', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '40.039398',
	defaultLongitude: '-76.307083',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/#inbox',
		},
		{
			id: '2',
			name: 'Keep',
			icon: 'list-todo',
			link: 'https://keep.google.com/u/1/',
		},
		{
			id: '3',
			name: 'Indeed',
			icon: 'glasses',
			link: 'https://www.indeed.com/',
		},
		{
			id: '4',
			name: 'ESPN',
			icon: 'trophy',
			link: 'https://www.espn.com/',
		},
		{
			id: '5',
			name: 'SoFi',
			icon: 'piggy-bank',
			link: 'https://www.sofi.com/',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'dices',
			id: '1',
			links: [
				{
					name: 'PokeDoku',
					link: 'https://pokedoku.com/',
				},
				{
					name: 'Crossword',
					link: 'https://www.washingtonpost.com/games/crossword/',
				},
				{
					name: 'Connections',
					link: 'https://www.nytimes.com/games/connections',
				},
				{
					name: 'Sports Connection',
					link: 'https://www.nytimes.com/athletic/connections-sports-edition/',
				},
			],
		},
		{
			icon: 'cake-slice',
			id: '2',
			links: [
				{
					name: 'Reddit',
					link: 'https://www.reddit.com/',
				},
				{
					name: 'BlueSky',
					link: 'https://bsky.app/',
				},
				{
					name: 'LinkedIn',
					link: 'https://www.linkedin.com/feed/',
				},
				{
					name: 'GolfWRX',
					link: 'https://forums.golfwrx.com/forum/12-equipment/?_fromLogin=1',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'trophy',
			id: '1',
			links: [
				{
					name: 'MLB Bite',
					link: 'https://mlbbite.net/',
				},
				{
					name: 'NFL Bite',
					link: 'https://www.nflbite.is/',
				},
				{
					name: 'NBA Bite',
					link: 'https://v2.nbabite.ai/live2',
				},
				{
					name: 'NHL Bite',
					link: 'https://reddit.nhlbite.com/',
				},
			],
		},
		{
			icon: 'arrow-big-down-dash',
			id: '2',
			links: [
				{
					name: 'qBT',
					link: 'http://192.168.4.185:1791/',
				},
				{
					name: 'BTN',
					link: 'https://broadcasthe.net/',
				},
				{
					name: 'PTP',
					link: 'https://passthepopcorn.me/',
				},
				{
					name: 'GGn',
					link: 'https://gazellegames.net/index.php',
				},
			],
		},
	],
};
