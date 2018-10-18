var vm = new Vue({
	el: '#app',
	data: {
		header: 'Shopping App',
		newItem: '',
		items: [
			'Buy some coffee',
			'Antivirus Subscription',
			'New mobile phone',
			'Buy a new Car'
		]
	},
	methods: {
		sayHello: function () {
			console.log('Hello');
		}
	}
});
