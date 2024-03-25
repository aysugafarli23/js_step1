// 1.İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın.


let name = prompt(" Please enter your name: ");
// let numbers = "The length of this word is " + name.length;

// console.log(numbers);



// 2.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?.

// let symbol = prompt("Please enter  a symbol: ");

// console.log(name.includes(symbol));

// 3.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?.

// console.log(name.startsWith(symbol));

// 4.İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?.

// console.log(name.endsWith(symbol));

// 5.İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın.

// console.log(name.indexOf(symbol));

// 6.İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın.
// HELLO -> true
// HELLo -> false
// hello -> false
// heLLo -> false
function isUppercase(name) {
    return name === name.toUpperCase();
  }
  console.log(isUppercase(name));