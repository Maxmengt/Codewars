 decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(it => it.split(' ').map(item => MORSE_CODE[item]).join('')).join(' ');
}