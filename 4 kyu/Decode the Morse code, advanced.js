var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    bits = bits.replace(/^0+|0+$/g, '');
    var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(item => item.length));
    return bits.replace(new RegExp('1{' + 3 * rate + '}', 'g'), '-').replace(new RegExp('1{' + rate + '}', 'g'), '.').replace(new RegExp('0{' + 7 * rate + '}', 'g'), '   ').replace(new RegExp('0{' + 3 * rate + '}', 'g'), ' ').replace(/0+/g, '');
}

var decodeMorse = function(morseCode){
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.trim().split('   ').map(it => it.split(' ').map(item => MORSE_CODE[item]).join('')).join(' ');
}