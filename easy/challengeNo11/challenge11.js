$(document).ready(function(){
	let month = 'June';
	let day = 28;
	let year = 2016;
	let date = new Date(year, month-1, day);
	console.log(getWeek(month, day, year));
	$('button.calculate').click(function(){
		console.log("test");
		// let month = $('textarea#month').val();
		// let day = $('#day').val();
		// let year = $('#year').val();
		// console.log(month);
		// let week = getWeek(month, day, year);
		// $('#res').append(`<p>Week: ${week}</p>`);
	});
	$('button.reset').click(function(){
		$('.month, .day, .year').val("");
		$('p').remove();
	});
});

function getWeek(month, day, year){
	let weeks = ["Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday", "Sunday"];
	let date;

	if(typeof month === 'number'){
		date = new Date(year, month-1, parseInt(day, 10));// 09 -> 9
	}else{
		date = new Date(month + ' ' + parseInt(day, 10) + ',' + year); // dateString format
	}
	return weeks[date.getDay() - 1];
}