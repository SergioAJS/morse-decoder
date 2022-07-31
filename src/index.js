const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letterLength = 10;
    const dots = /(10)/g;
    const dash = /(11)/g;
    const space = /\u002A+/g;
    const arr = expr.split('');
    MORSE_TABLE[' '] = ' ';
    let chunks = [];
    while (arr.length > 0) {
        chunks.push(arr.splice(0, letterLength)); //split arr into groups the length of letterLength
    }
    const cutZero = chunks.map(item => item.join('').replace(/^0*/, '')); //remove zeros from start
    const dotDash = cutZero.map(letter => letter.replace(dots, '.').replace(dash, '-').replace(space, ' ')); //replace numbers to dots and dashes
    const result = dotDash.map(item => MORSE_TABLE[item]).join(''); // matching with Morse code and outputting the result
    return result;
}

console.log(decode('000010101000001111110000101010'));

module.exports = {
    decode
}