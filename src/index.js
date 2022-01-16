module.exports = function toReadable(number) {
    let alphabeticNumbers = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    if (number === 0) {
        return 'zero';
    }
    if (number <= 19) {
        return alphabeticNumbers[number];
    }

    const strNumber = String(number).split('');
    const hundred = 'hundred';

    if (number >= 20 && number <= 99) {
        if (+strNumber[1] === 0) {
            return alphabeticNumbers[+(strNumber[0] + 0)];
        }
        return `${alphabeticNumbers[+(strNumber[0] + 0)]} ${
            alphabeticNumbers[+strNumber[1]]
        }`;
    }

    if (+strNumber[1] === 0) {
        if (+strNumber[2] === 0) {
            return `${alphabeticNumbers[+strNumber[0]]} ${hundred}`;
        }

        return `${alphabeticNumbers[+strNumber[0]]} ${hundred} ${
            alphabeticNumbers[+strNumber[2]]
        }`;
    }

    if (
        (+(strNumber[1] + strNumber[2]) >= 10 &&
            +(strNumber[1] + strNumber[2]) <= 20) ||
        +strNumber[2] === 0
    ) {
        return `${alphabeticNumbers[+strNumber[0]]} ${hundred} ${
            alphabeticNumbers[+(strNumber[1] + strNumber[2])]
        }`;
    }

    return `${alphabeticNumbers[+strNumber[0]]} ${hundred} ${
        alphabeticNumbers[+(strNumber[1] + 0)]
    } ${alphabeticNumbers[+strNumber[2]]}`;
};