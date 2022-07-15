const digitOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const digitTwo = ['ten', 'eleven', 'twelve', 'thirteen', '' , 'fifteen', '', '', 'eighteen', '']
const digitTen = ['', '','twenty', 'thirty', 'forty', 'fifty', '', '', 'eighty']
const digitHigher = ['', 'hundred', 'thousand', 'million', 'billion']

function tenСategory (number){
	let stringTenDighit = String(number);
	let tenDigits = parseInt(stringTenDighit[stringTenDighit.length - 2]);
	let stringUnitsDigit = String(number);
	let unitsDigit = parseInt(stringUnitsDigit[stringUnitsDigit.length - 1]);
	if (digitTen[tenDigits]){
		return digitTen[tenDigits];
	} else if (tenDigits === 1){
		if (digitTwo[unitsDigit]){
			return digitTwo[unitsDigit] 
		 } else return digitOne[unitsDigit] + 'teen'
	} else if (!tenDigits){
		return ''
	}else return digitOne[tenDigits] + 'ty'
}

function twoDigitNumber(number){
	let stringUnitsDigit = String(number);
	let unitsDigit = parseInt(stringUnitsDigit[stringUnitsDigit.length - 1]);
	let twoPastDigit = parseInt(stringUnitsDigit.slice(stringUnitsDigit.length - 2));
	if (twoPastDigit > 20 && digitOne[unitsDigit]){
		return tenСategory(number) + ' ' + digitOne[unitsDigit]
	} else if(!twoPastDigit){
		return ''
	} return tenСategory(number)
}

function hundredDigit(number){
	let stringHundredDigit = String(number);
	let hundredDigit = parseInt(stringHundredDigit[stringHundredDigit.length - 3]);
	let stringTenDighit = String(number);
	let tenDigits = parseInt(stringTenDighit[stringTenDighit.length - 2]);
	let stringUnitsDigit = String(number);
	let unitsDigit = parseInt(stringUnitsDigit[stringUnitsDigit.length - 1]);
	if (tenDigits){
		return digitOne[hundredDigit] + ' hundred '
	} else if(unitsDigit){
		return digitOne[hundredDigit] + ' hundred ' + digitOne[unitsDigit]
	}return digitOne[hundredDigit] + ' hundred'
}

module.exports = function toReadable (number) {
	if (number === 0){
		return 'zero'
	} else {
		const numberDigit = ('' + number).length;
		switch (numberDigit){
			case 1 :
				return digitOne[number]
			case 2 :
				return twoDigitNumber(number)
			case 3 :
				return hundredDigit(number) + twoDigitNumber(number)
		}
   }  
}
