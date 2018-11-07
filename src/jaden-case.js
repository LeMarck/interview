/* eslint newline-per-chained-call: ["error", { "ignoreChainWithDepth": 3 }] */
'use strict';

/**
 * Проверяет являются ли слова анаграммами
 * @param {string} str массив
 * @returns {string} Являются ли эти слова анаграммами
 */
function toJadenCase(str) {
    return str
        .split(' ')
        .reduce((arr, word) =>
            arr.concat(word[0].toUpperCase() + word.slice(1)),
        [])
        .join(' ');
}

module.exports = toJadenCase;