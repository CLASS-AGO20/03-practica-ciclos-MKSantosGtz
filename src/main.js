export default class App {
  factorial(numero) {
    let resultado = numero;

    for (let i = numero - 1; i >= 1; i--) {
      resultado = resultado * i;
    }

    return resultado;
  }
  convertirAString(numero) {
    let i = numero;
    let asterisco = "*";
    while (i <= numero) {
      asterisco++;
    }
    return asterisco;
  }
}

let app = new App();

console.log(app.factorial(5));

console.log(app.convertirAString(6));
