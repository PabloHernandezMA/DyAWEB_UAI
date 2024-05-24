// a
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("A: Mes 5 (Mayo): " + meses[4] + ", mes 11 (Noviembre): " + meses[10]);

// b
var mesesOrdenadosAlfabeticamente = meses.slice().sort();
console.log("B: " + mesesOrdenadosAlfabeticamente);

// c
var mesesCD = meses.slice();
mesesCD.unshift("String al comienzo");
mesesCD.push("String al final");
console.log("C: " + mesesCD);

// d 
mesesCD.shift();
mesesCD.pop();
console.log("D: " + mesesCD);

// e
console.log("E: " + meses.slice().reverse());

// f
console.log("F: " + meses.join("-"));

// g
console.log("G: " + meses.slice(4,11));