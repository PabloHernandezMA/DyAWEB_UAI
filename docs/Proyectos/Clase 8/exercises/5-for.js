// 5. For
// a.
var palabrasArray = ["uno", "dos", "tres", "cuatro", "cinco"];
for (var i = 0; i < palabrasArray.length; i++) {
  alert(palabrasArray[i]);
}

// b.
for (var i = 0; i < palabrasArray.length; i++) {
  palabrasArray[i] = palabrasArray[i].charAt(0).toUpperCase() + palabrasArray[i].slice(1);
  alert(palabrasArray[i]);
}

// c.
var sentence = "";
for (var i = 0; i < palabrasArray.length; i++) {
  sentence += palabrasArray[i] + " ";
}
alert(sentence);

// d.
var numerosArray = [];
for (var i = 0; i < 10; i++) {
  numerosArray.push(i);
}
console.log(numerosArray);

