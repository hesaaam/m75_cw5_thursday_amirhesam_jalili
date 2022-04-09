const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let newArry = [];

for (let i = 0; i < alphabet.length; i += 2) {
    newArry.push(alphabet[i]);
}
console.log(newArry);