'use strict'

function format(input, colls) {
    if (!Array.isArray(input) || 
            !(Number.isInteger(colls) && colls > 0)){
        return null;
    }
    const strings = input.map(number => number.toString());

    const maxLength = strings.reduce((max, str, index) => {
        const curCol = index % colls;
        if (!max[curCol]) {
            max[curCol] = 0;
        }
        max[curCol] = Math.max(max[curCol], str.length);
        
        return max;
    }, new Array(colls));

    const result = strings.reduce((outText, number, index) => {
        if (outText && index % colls == 0) {
            outText += '\n';
        } else if (outText) {
            outText += ' '
        }
        const spaces = ' '.repeat(maxLength[index % colls] - number.length);
        return outText + spaces + number;
    }, '');
    return result;
    
}