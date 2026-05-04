const countVowels = function(str) {
    let count = 0;

    for (let ch of str) {
        ch = ch.toLowerCase();

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            count++;
        }
    }

    return count;
};
console.log(countVowels("hello"));