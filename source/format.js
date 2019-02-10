'use strict'

function format(input, colls) {
    var strings = input.map(function(number) {
        return number.toString()
    });

    var maxLength = strings.reduce(function(max, str, index) {
        var curCol = index % colls;
        if (!max[curCol]) {
            max[curCol] = 0;
        }
        max[curCol] = Math.max(max[curCol], str.length);
        
        return max;
    }, new Array(colls));

    var result = strings.reduce(function(result, number, index) {
        if (result && index % colls == 0) {
            result += '\n';
        } else if (result) {
            result += ' '
        }
        var spaces = (
            new Array(maxLength[index % colls] - number.length + 1)
        ).join(' ');

        return result + spaces + number;
    }, '');
    return result;
    
}