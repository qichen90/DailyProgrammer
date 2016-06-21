$(document).ready(function(){
	// let name = prompt("What's your name?");
	// let age = prompt("How old are you?");
	// let username = prompt("What's your username?");
	// let res = `Your name is ${name}, you are ${age} years old, and your username is ${username}.`;
	// confirm(res);

	$('button').click(function(){
		let name = $('textarea#name').val();
		let age = $('textarea#age').val();
		let username = $('textarea#username').val();
		confirm( `Your name is ${name}, you are ${age} years old, and your username is ${username}.`);
		$('.ans').append(`<p>Your name is ${name}, you are ${age} years old, and your username is ${username}.</p>`);
	});
});