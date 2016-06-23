$(document).ready(function(){
	
	$('button#encrypt').click(function(){
		let input = $('textarea.org').val();
		let direction = rotation();
		let num = $('textarea.num').val();
		if(direction === "-"){
			num = -num;
		}
		let output = encrypt(input, num);
		$('div.res').append(`<p>Encryption: ${output}</p>`);
	});
	$('button#decrypt').click(function(){
		let input = $('textarea.org').val();
		let direction = rotation();
		let num = $('textarea.num').val();
		if(direction === "-"){
			num = -num;
		}
		let output = decrypt(input, num);
		$('div.res').append(`<p>Decryption: ${output}</p>`);
	});
	$('button#clear').click(function(){
		$('p').remove();
	});
	$('button#reset').click(function(){
		$('.org, .num').val("");
	});
});

function encrypt(input, num){
	let output = "";
	let len = input.length;
	for(let i = 0; i < len; i++){
		let cur = input.charAt(i).charCodeAt(0);
		if(cur >= 65 && cur <= 90){
			let char = (cur - 65 + num) % 26;
			char = char >= 0? char : char + 26;
			console.log(cur + " " + num + " " + char);
			output += String.fromCharCode(char + 65);
		}else{
			output += input.charAt(i);
		}
	}
	return output;
}

function decrypt(input, num){
	let output = "";
	let len = input.length;
	for(let i = 0; i < len; i++){
		let cur = input.charAt(i).charCodeAt(0);
		if(cur >= 65 && cur <= 90){
			let char = (cur - 65 - num) % 26;
			char = char >= 0? char : char + 26;
			console.log(cur + " " + num + " " + char);
			output += String.fromCharCode(char + 65);
		}else{
			output += input.charAt(i);
		}
	}
	return output;
}

function rotation(){
	let checked = "+";//default settings
	if($('#left').is(':checked')){
		checked = "-";
	}else if($('#right').is(':checked')){
		checked = "+";
	}
	return checked;
}