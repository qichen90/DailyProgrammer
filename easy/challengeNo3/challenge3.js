$(document).ready(function(){
	$('button #encrypt').click(function(){
		let input = $('#org').val();
		let output = encrypt(input);
		$('div').append(`<p>Encryption: ${output}</p>`);
	});
	$('button #decrypt').click(function(){
		let input = $('#org').val();
		let output = decrypt(input);
		$('div').append(`<p>Decryption: ${output}</p>`);
	});
});

function encrypt(input){

	return output;
}

function decrypt(input){
	return output;
}