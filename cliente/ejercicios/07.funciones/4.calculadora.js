  // https://www.aulascript.com/retos/calculadora.html

  // 1. Planteamiento

  // Se recibe dos número y el operador de las operaciones:

  // + - * / % (resto: a % b -> el resto de dividir a / b entero, 
  // ej: 5 % 3 -> 5 / 3 = 1 y R = 2 ==> 5 % 3 = 2
  // ej: 4 % 2 -> 4 / 2 = 2 y R = 0 ==> 4 % 2 = 0 (división exacta) )

  // 2. Lógica

  // A partir del operador que recibimos, selecionamos la operación a realizar 
  // con los números con las funciones:

  // sumar(), restar(), multiplicar(), dividir() y resto() => swith o bucle if

  // 3. Sintáxis 

  /**
   * Pseudocódigo:
   * 
   * function calcular(number a, number b, string operador){
   * // operador debe ser: '+', '-', '*', '/' '%'
   * switch (operador){
   * let resultado = 0;
   * case '+':
   *  resultado = sumar(a, b)
   *  break;
   * case '-':
   *  resultado = restar(a, b)
   *  break;
   * etc...
   * }
   *  return resultado;
   * }
   */

  function sumar(a, b){
    return a + b;
  }
  function restar(a, b){
    return a - b;
  }
  function multiplicar(a, b){
    return a * b;
  }
  function dividir(a, b){
    return b != 0 ? a / b : Number.NaN;
  }
  function resto(a, b){
    return a % b;
  }

  function calcular(a, b, op){
    // TODO: validar que op es un valor de la lista:
    // '+', '-', '*', '/' '%'
    let resultado = 0;
    switch(op){
      case '+':
        resultado = sumar(a, b);
        break;
      case '-':
        resultado = restar(a, b);
        break;
      case '*':
        resultado = multiplicar(a, b);
        break;
      case '/':
        resultado = dividir(a, b);
        break;
      case '%':
        resultado = resto(a, b);
        break;
    }
    return resultado;
  }

// Pruebas:
calcular(1, 2, '+'); // 3
calcular(1, 2, '-'); // -1
calcular(1, 2, '/'); // 0.5
calcular(1, 2, '2'); // 2
calcular(4, 2, '%'); // 0
calcular(5, 3, '%'); // 2