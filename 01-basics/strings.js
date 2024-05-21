const name = "Umair"
let repoCount = 50

//console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`);

const game = new String('umair-hc-com');
console.log(game[0]);
// console.log(game[1]);
// console.log(game[2]);
// console.log(game[3]);
// console.log(game[4]);
// console.log(game[5]);
// console.log(game[6]);
// console.log(game.__proto__);
// console.log(game.length);
// console.log(game.toUpperCase);
// console.log(game.charAt('3'));
// console.log(game.indexOf('i'));

const newString = game.substring(0, 4);
// console.log(newString);

const strings = game.slice(0, 3)
// console.log(strings);

const one = "     ALI.   "
// console.log(one);
console.log(one.trim());
console.log(one.trimStart());
console.log(one.trimEnd());

const url = "https://umair.com/umair%20ali"
console.log(url.replace('%20', ('-')));
console.log(url.includes('ali')); //true
console.log(game.split('-'));

