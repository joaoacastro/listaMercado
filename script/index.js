function addItem(){
    var listaItem = document.getElementById("listaItem");
    var listaQuantidade = document.getElementById("listaQuantidade");
    var listaVlrUnit = document.getElementById("listaVlrUnit");
    var listaTotalProduto = document.getElementById("listaTotalProduto");

    var totalCompra = document.getElementById("valorTotalCompra");

    var produto = {
        item: document.getElementById("item").value,
        quantidade: document.getElementById("qtdeInput").value,
        valorUnitario: document.getElementById("vlrUnitInput").value,
        totalItem:
            document.getElementById("qtdeInput").value *
            document.getElementById("vlrUnitInput").value
    };

    console.log(produto)

    var item = '<li>' + produto.item + '</li>';
    var quantidade = '<li>' + produto.quantidade + '</li>';
    var valorUnitario = '<li> R$ ' + produto.valorUnitario + '</li>';
    var subTotal = '<li> R$ ' + produto.totalItem + '</li>';
    
    listaItem.innerHTML += item;
    listaQuantidade.innerHTML += quantidade;
    listaVlrUnit.innerHTML += valorUnitario;
    listaTotalProduto.innerHTML += subTotal;

    totalCompra.innerHTML += produto.totalItem;

}
