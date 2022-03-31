function addItem(){
    var listaProduto = document.getElementById("listaProduto");
    var listaQuantidade = document.getElementById("listaQuantidade");
    var listaVlrUnit = document.getElementById("listaVlrUnit");
    var listaTotalProduto = document.getElementById("listaTotalProduto");

    var totalCompra = document.getElementById("valorTotalCompra");
    
    var produto = document.getElementById("produto").value;
    var quantidade = document.getElementById("qtdeInput").value;
    var vlrUnit = document.getElementById("vlrUnitInput").value;

    var subTotalUnit = vlrUnit * quantidade;

    var item = '<li>' + produto + '</li>';
    var quantidade = '<li>' + quantidade + '</li>';
    var valorUnitario = '<li> R$ ' + vlrUnit + '</li>';
    
    var subTotal = '<li> R$ ' + subTotalUnit + '</li>';
    
    listaProduto.innerHTML += item;
    listaQuantidade.innerHTML += quantidade;
    listaVlrUnit.innerHTML += valorUnitario;
    listaTotalProduto.innerHTML += subTotal;
    
    totalCompra.innerHTML += subTotalUnit;
    
    console.log(typeof(totalCompra));
    console.log(Object.values(totalCompra))
}