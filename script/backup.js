var listaProduto = document.querySelector('#listaProduto');
var listaQuantidade = document.querySelector('#listaQuantidade');
var listaVlrUnit = document.querySelector('#listaVlrUnit');
var listaTotalProduto = document.querySelector('#listaTotalProduto');

var produto = document.querySelector('#produto').value;
var quantidade = document.querySelector('#qtdeInput').value;
var vlrUnit = document.querySelector('#vlrUnitInput').value;

var subTotalUnit = vlrUnit * quantidade;

var botao = document.querySelector('#btn');

botao.addEventListener('click', function() {
    var item = '<li>' + listaProduto + '</li>';
    var quantidade = '<li>' + listaQuantidade + '</li>';
    var valorUnitario = '<li>' + listaVlrUnit + '</li>';
    
    var subTotal = '<li>' + subTotalUnit + '</li>';

    listaProduto.innerHTML += item;
    listaQuantidade.innerHTML += quantidade;
    listaVlrUnit.innerHTML += valorUnitario;
    listaSubTotalUnit.innerHTML += subTotal;
})