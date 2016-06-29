$(document).ready(function(){
	// let name = prompt("What's your name?");
	// let age = prompt("How old are you?");
	// let username = prompt("What's your username?");
	// let res = `Your name is ${name}, you are ${age} years old, and your username is ${username}.`;
	// confirm(res);
	$('a').css({'text-decoration': 'none', 'color': 'black'});
	$('.submit').click(function(){
		let name = $('textarea#name').val();
		let age = $('textarea#age').val();
		let username = $('textarea#username').val();
		confirm( `Your name is ${name}, you are ${age} years old, and your username is ${username}.`);
		$('.ans').append(`<p>Your name is ${name}, you are ${age} years old, and your username is ${username}.</p>`);
	});
	// $('.export').click(function(){
		$('a').click(function(){
			// let name = $('textarea#name').val();
			// let age = $('textarea#age').val();
			// let username = $('textarea#username').val();
			this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`${name}, ${age}, ${username}`);
			this.download = 'export.txt';
		});
	// });
});