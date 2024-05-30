// 3. Arrays
// a.
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4], meses[10]);

// b.
meses.sort();
console.log(meses);

// c.
meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

// d.
meses.shift();
meses.pop();
console.log(meses);

// e.
meses.reverse();
console.log(meses);

// f.
var mesesUnidos = meses.join("-");
console.log(mesesUnidos);

// g.
var copiaMeses = meses.slice(4, 11);
console.log(copiaMeses);

