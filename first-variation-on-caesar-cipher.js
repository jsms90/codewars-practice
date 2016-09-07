function movingShift(text, shift) {
  lowerAsciis = [];
	for (lowerNum=97; lowerNum<=122; lowerNum++) {
		lowerAsciis.push(lowerNum);
	}
	upperAsciis = [];
	for (upperNum=65; upperNum<=90; upperNum++) {
		upperAsciis.push(upperNum);
	}
	if (text === null){
	  	return '';
	  }
	textAsciis =  [];
	for (var letter = 0; letter < text.length; letter++) {
			textAsciis.push(text[letter].charCodeAt());
	}
	
	for (var i = 0; i<textAsciis.length; i++) {
		if (text[i].toLowerCase() === text[i]){
			if (lowerAsciis.includes(textAsciis[i])){
				shifted_index = lowerAsciis.indexOf(textAsciis[i])+(shift+i);
				indexOfNewLetter = shifted_index % 26;
				if (indexOfNewLetter < 0){
					indexOfNewLetter += 26;
				}
				textAsciis[i] = lowerAsciis[indexOfNewLetter];
			}
		}
		else if (text[i].toUpperCase() === text[i]){
			if (upperAsciis.includes(textAsciis[i])){
				shifted_index = upperAsciis.indexOf(textAsciis[i])+(shift+i);
				indexOfNewLetter = shifted_index % 26;
				if (indexOfNewLetter < 0){
					indexOfNewLetter += 26;
				}
				textAsciis[i] = upperAsciis[indexOfNewLetter];
			}
		}
	}
  
	for (i = 0; i <textAsciis.length; i++) {
			textAsciis[i] = String.fromCharCode(textAsciis[i]);
	}
  
	encodedString =  '';
	for (i = 0; i <textAsciis.length; i++) {
			encodedString += textAsciis[i];
	}
	lengthOfMessages = Math.ceil(encodedString.length/5);
	newArray = []
	for (i=0; i<5;i++){
		message = encodedString.substring(lengthOfMessages*i, lengthOfMessages*(i+1));
		newArray.push(message);
	}
	 return newArray;
}


function demovingShift(arr, shift) {
  output = "";
	for (i = 0; i <arr.length; i++) {
		output += arr[i];
	}
	lowerAsciis = [];
	for (lowerNum=97; lowerNum<=122; lowerNum++) {
		lowerAsciis.push(lowerNum);
	}
	upperAsciis = [];
	for (upperNum=65; upperNum<=90; upperNum++) {
		upperAsciis.push(upperNum);
	}
	textAsciis =  [];
	for (var letter = 0; letter < output.length; letter++) {
			textAsciis.push(output[letter].charCodeAt());
	}
	for (var i = 0; i<textAsciis.length; i++) {
		if (output[i].toLowerCase() === output[i]){
			if (lowerAsciis.includes(textAsciis[i])){
				shifted_index = lowerAsciis.indexOf(textAsciis[i])-(shift+i);
				indexOfNewLetter = shifted_index % 26;
				if (indexOfNewLetter < 0){
					indexOfNewLetter += 26;
				}
				textAsciis[i] = lowerAsciis[indexOfNewLetter];
			}
		}
		else if (output[i].toUpperCase() === output[i]){
			if (upperAsciis.includes(textAsciis[i])){
				shifted_index = upperAsciis.indexOf(textAsciis[i])-(shift+i);
				indexOfNewLetter = shifted_index % 26;
				if (indexOfNewLetter < 0){
					indexOfNewLetter += 26;
				}
				textAsciis[i] = upperAsciis[indexOfNewLetter];
			}
		}
	}
	for (i = 0; i <textAsciis.length; i++) {
			textAsciis[i] = String.fromCharCode(textAsciis[i]);
	}	
	decodedString =  '';
	for (i = 0; i <textAsciis.length; i++) {
			decodedString += textAsciis[i];
	}
	last = decodedString;
//  for (i=0; i<last.length; i++){
//    if (whatever[i] !== last[i]){
//      console.log(`"${whatever[i]}", "${whatever[i].charCodeAt()}", "${last[i]}", "${last[i].charCodeAt()}", ${i}`);
 //   }
//   }
  return last;
  
}