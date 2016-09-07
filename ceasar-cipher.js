lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
uppercaseLetters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

function CaesarCryptoEncode(text, shift) {
	asciiNums = [];
	for (lowerNum=97; lowerNum<=122; lowerNum++) {
		asciiNums.push(lowerNum);
	}
	for (upperNum=65; upperNum<=90; upperNum++) {
		asciiNums.push(upperNum);
	}
	if (text === null){
	  	return '';
	  }
	asciisOfText =  [];
	for (var letter = 0; letter < text.length; letter++) {
			asciisOfText.push(text[letter].charCodeAt());
	}
	for (var i = 0; i<asciisOfText.length; i++) {
		if (asciiNums.includes(asciisOfText[i])){
			shifted_index = asciiNums.indexOf(asciisOfText[i])+shift;
			indexOfNewLetter = shifted_index % 52;
			if (indexOfNewLetter < 0){
				indexOfNewLetter += 52;
			}
			asciisOfText[i] = asciiNums[indexOfNewLetter];
		}
	}
  
	for (i = 0; i <asciisOfText.length; i++) {
			asciisOfText[i] = String.fromCharCode(asciisOfText[i]);
	}
  
	output =  '';
	for (i = 0; i <asciisOfText.length; i++) {
			output += asciisOfText[i];
	}
	return output.trim();
}
1 month agoRefactor
function CaesarCryptoEncode(text, shift) {
	asciiNums = [];
	for (lowerNum=97; lowerNum<=122; lowerNum++) {
		asciiNums.push(lowerNum);
	}
	for (upperNum=65; upperNum<=90; upperNum++) {
		asciiNums.push(upperNum);
	}
	if (text === null){
	  	return '';
	  }
	asciisOfText =  [];
	for (var letter = 0; letter < text.length; letter++) {
			asciisOfText.push(text[letter].charCodeAt());
	}
	for (var i = 0; i<asciisOfText.length; i++) {
		if (asciiNums.includes(asciisOfText[i])){
			shifted_index = asciiNums.indexOf(asciisOfText[i])+shift;
			indexOfNewLetter = shifted_index % 52;
			if (indexOfNewLetter < 0){
				indexOfNewLetter += 52;
			}
			asciisOfText[i] = asciiNums[indexOfNewLetter];
		}
	}
  
	for (i = 0; i <asciisOfText.length; i++) {
			asciisOfText[i] = String.fromCharCode(asciisOfText[i]);
	}
  
	output =  '';
	for (i = 0; i <asciisOfText.length; i++) {
			output += asciisOfText[i];
	}
	return output.trim();
}