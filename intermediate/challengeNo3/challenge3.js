$(document).ready(function(){
	
	$('button#encrypt').click(function(){
		let input = $('textarea.plain').val();
		let cipher = $('textarea.cipher').val();
		let message = $('textarea.message').val();
		let map = getDict(input, cipher);
		let output = encrypt(map, message, "encrypt");
		$('div.res').append(`<p>Encryption: ${output}</p>`);
	});
	$('button#decrypt').click(function(){
		let input = $('textarea.plain').val();
		let cipher = $('textarea.cipher').val();
		let message = $('textarea.message').val();
		let map = getDict(input, cipher);
		let output = encrypt(map, message, "decrypt");
		$('div.res').append(`<p>Decryption: ${output}</p>`);
	});
	$('button#clear').click(function(){
		$('p').remove();
	});
	$('button#reset').click(function(){
		$('.plain, .cipher, .message').val("");
	});
});

function encrypt(map, message){
	let output = "";
	let len = message.length;
	for(let i = 0; i < len; i++){
		let cur = message.charAt(i).toUpperCase();
		if(map.has(cur)){
			output += map.get(cur);
		}else{
			output += cur;
		}
	}
	return output;
}

function decrypt(map, message){
	let output = "";
	let len = message.length;
	for(let i = 0; i < len; i++){
		let cur = message.charAt(i).toUpperCase();
		if(map.has(cur)){
			output += map.get(cur);
		}else{
			output += cur;
		}
	}
	return output;
}

function getDict(plain, cipher, flag){
	let map = new Map();
	let lenP = plain.length;
	let lenC = cipher.length;
	if(flag === "encrypt"){
		for(let i = 0, j = 0; i < lenP && j < lenC; i++, j++){
			map.set(plain.charAt(i), cipher.charAt(j));
		}
	}else{
		for(let i = 0, j = 0; i < lenP && j < lenC; i++, j++){
			map.set(cipher.charAt(i), plain.charAt(j));
		}
	}
	
	return map;
}