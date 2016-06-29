$(document).ready(function(){
	$('#reset').click(function(){
		$('#num, #len').val("");
		$('p').remove();
	});
	$('#submit').click(function(){
		let num = parseInt($('#num').val());
		let len = parseInt($('#len').val());
		let pwd = generatePwd(num, len);
		for(let i = 0; i < num; i++){
			let tmp = pwd[i];
			$('div.res').append(`<p>${tmp}</p>`);
		}
		$('a').click(function(){
			this.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`${pwd}`);
			this.download = 'export.txt';
		});
	});
});
function generatePwd(num, len){
	let pwd = [];
	for(let i = 0; i < num; i++){
		let tmp = "";
		for(let j = 0; j < len; j++){
			let int = Math.floor(Math.random() * (126 - 33 + 1) + 33);
			tmp += String.fromCharCode(int);
		}
		pwd.push(tmp);
	}	
	return pwd;
}