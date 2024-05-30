// 6. Funciones
// a.
function suma(a, b) {
    return a + b;
  }
  var resultadoSuma = suma(5, 3);
  console.log(resultadoSuma);
  
  // b.
  function sumaValidada(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      alert("Uno de los parámetros no es un número");
      return NaN;
    }
    return a + b;
  }
  var resultadoSumaValidada = sumaValidada(5, "3");
  console.log(resultadoSumaValidada);
  
  // c.
  function validateInteger(num) {
    return Number.isInteger(num);
  }
  
  // d.
  function sumaValidada2(a, b) {
    if (!validateInteger(a) || !validateInteger(b)) {
      alert("Uno de los números no es un entero");
      return Math.round(a) + Math.round(b);
    }
    return a + b;
  }
  var resultadoSumaValidada2 = sumaValidada2(5.5, 3.2);
  console.log(resultadoSumaValidada2);
  