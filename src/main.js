export default class App {
  factorial(numero) {
    let resultado = numero;

    for (let i = numero - 1; i >= 1; i--) {
      resultado = resultado * i;
    }

    return resultado;
  }
  convertirAString(numero) {
    let s = "";
    let i = 1;

    while (i <= numero) {
      s = s + "*";
      i = i + 1;
    }
    return s;
  }
}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(6));
