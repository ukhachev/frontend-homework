'use strict'

function format(input, colls) {
    const strings = input.map(number => number.toString());

    const maxLength = strings.reduce(function(max, str, index) {
        const curCol = index % colls;
        if (!max[curCol]) {
            max[curCol] = 0;
        }
        max[curCol] = Math.max(max[curCol], str.length);
        
        return max;
    }, new Array(colls));

    let result = strings.reduce(function(outText, number, index) {
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