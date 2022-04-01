var produtos = [];

function addItem(){
    var listaItem = document.getElementById("listaItem");
    var listaQuantidade = document.getElementById("listaQuantidade");
    var listaVlrUnit = document.getElementById("listaVlrUnit");
    var listaTotalProduto = document.getElementById("listaTotalProduto");

    var totalCompra = document.getElementById("valorTotalCompra");

    var totalProdutos = document.getElementById("quantTotalProdutos");

    var totalItens = document.getElementById("quantTotalItens");

    var produto = {
        item: document.getElementById("item").value,
        quantidade: document.getElementById("qtdeInput").value,
        valorUnitario: document.getElementById("vlrUnitInput").value,
        totalItem:
            document.getElementById("qtdeInput").value *
            document.getElementById("vlrUnitInput").value
    };

    produtos.push(produto);
    
    var item = '<li>' + produto.item + '</li>';
    var quantidade = '<li>' + produto.quantidade + '</li>';
    var valorUnitario = '<li> R$ ' + produto.valorUnitario + '</li>';
    var subTotal = '<li> R$ ' + produto.totalItem.toFixed(2) + '</li>';

    listaItem.innerHTML += item.toUpperCase();
    listaQuantidade.innerHTML += quantidade;
    listaVlrUnit.innerHTML += valorUnitario;
    listaTotalProduto.innerHTML += subTotal;

    totalProdutos.innerHTML = produtos.length;

    console.log(typeof(subTotal));
    
    var total = produtos.reduce(getTotal, 0);
    function getTotal(total, item){
        return total + (item.valorUnitario * item.quantidade);
    }

    // fazer a soma da quantidade

    var totalQuantidade = 0;
    totalQuantidade += parseFloat(produto.quantidade);

    totalCompra.innerHTML = ''
    totalCompra.innerHTML = total.toFixed(2);

    totalItens.innerHTML = totalQuantidade;

    document.getElementById("item").value = '';
    document.getElementById("item").focus();

    document.getElementById("qtdeInput").value = '';
    document.getElementById("vlrUnitInput").value = '';

    console.log(produtos)
}
