const mockData = [
	{
		name: 'General Infos',
		tasks: [
			{
				id: 1,
				description: 'Add name and surname',
				value: 10,
				checked: true
			},
			{
				id: 2,
				description: 'Add email',
				value: 15,
				checked: false
			},
			{
				id: 3,
				description: 'Add linkedin profile',
				value: 8,
				checked: false
			},
			{
				id: 4,
				description: 'Provide websites page url',
				value: 5,
				checked: true
			}
		]
	},
	{
		name: 'Accomiplishment',
		tasks: [
			{
				id: 5,
				description: 'Wrote a small poem about the birthdate',
				value: 23,
				checked: false
			},
			{
				id: 6,
				description: 'Jump three time with one leg',
				value: 32,
				checked: true
			},
			{
				id: 7,
				name: 'Avoid the annoying neighbor',
				value: 2,
				checked: false
			},
			{
				id: 8,
				name: 'Say hello to a random person',
				value: 21,
				checked: false
			},
			{
				id: 9,
				name: 'Fill the description in at least 3 places',
				value: 12,
				checked: true
			}
		]
	},
	{
		name: 'Personal retrospective',
		tasks: [
			{
				id: 10,
				description: 'Remember a dream',
				value: 15,
				checked: true
			},
			{
				id: 11,
				description: 'Have a crush',
				value: 7,
				checked: true
			}
		]
	},
	{
		name: 'Things before leaving',
		tasks: [
			{
				id: 12,
				description: 'Tell what you feel to all the people you know',
				value: 42,
				checked: false
			},
			{
				id: 13,
				description: 'Have a pet',
				value: 23,
				checked: false
			},
			{
				id: 14,
				description: 'Buy a fashion shirt',
				value: 12,
				checked: false
			}
		]
	}
];

export default mockData;
