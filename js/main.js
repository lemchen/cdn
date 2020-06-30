var init_timer = function () {	
	var countdown = CountDown.init({
		startTime: Date.now(),
		endTime: '2020-07-15 09:00:00',
		unit: {
			day: true,
			hour: true,
			minute: true,
			second: true
		},
		onStart: function () {
			console.log('start!');
		},
		onChange: function (value) {
			// console.log(value)
		},
		onStop: function () {
			console.log('stop!');
		}
	});

	countdown.change = function (value) {
		console.log(value);
		document.querySelectorAll('.timer')[0].innerHTML = value.day + '天' + value.hour + '时' + value.minute + '分' + value.second + '秒';
	}
}
