const name = "anuj patwal"
const count = 20

console.log(name+count);

console.log(`${name} ${count}`);

const player = new String("playerone")

console.log(player);

console.log(player[1]);
console.log(player.length);
console.log(player.toUpperCase());
console.log(player.toLowerCase());
console.log(player.charAt(3));

const newstring = player.substring(0,5);
console.log(newstring)

const ns1 = player.substring(-8,4); // won't give error but still starts from 0
console.log(ns1)

const ns2 = player.slice(-8,6); // will start in reverse order
console.log(ns2)

const ts = new String("   anuj   ");
console.log(ts.trim());

const url = "https://anuj.com/anuj@12patwal/"
console.log(url.replace('@12','-'));
console.log(url.includes('anuj'));

const ts1 = "hello world this is prac session"
console.log(ts1.split(' '));