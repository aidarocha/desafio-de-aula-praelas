const cart = require('./cart.json')
//console.log(Cart);
// 1. calcular a quantidade de produtos no objeto cart.
// 2. somar o valor total do cart.
// 3. imprimir o nome de cada produto no cart.

var total = 0;
var valor = 0;
var products = "";

for (let i = 0; i < cart.items.length; i++) {
    total += cart.items[i].quantity;

valor += cart.items[i].price * cart.items[i].quantity;
pagarValor = valor/100

products += cart.items[i].title + "";
}

        

console.log("Produto(s) adicionado(s): " + products);
console.log("Quantidade de itens: " + total + "");
console.log("Valor Total: " + "R$" + pagarValor.toFixed(2) + "");

