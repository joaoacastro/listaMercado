var produtos = [];
var quantItens = [];

function addItem(){
    var item = document.getElementById("item").value;
    var qtdeInput = document.getElementById("qtdeInput").value;
    var vlrUnitInput = document.getElementById("vlrUnitInput").value;

    if (!item || !qtdeInput || !vlrUnitInput){
        var alerta = alert("Ops, parece que faltou algo. 🤔 \n Por gentileza, preencha todos os campos!")
    } else {
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
        
        quantItens.push(produto.quantidade);

        var item = '<li>' + produto.item + '</li>';
        var quantidade = '<li>' + produto.quantidade + '</li>';
        var valorUnitario = '<li> R$ ' + produto.valorUnitario + '</li>';
        var subTotal = '<li> R$ ' + produto.totalItem.toFixed(2) + '</li>';

        listaItem.innerHTML += item.toUpperCase();
        listaQuantidade.innerHTML += quantidade;
        listaVlrUnit.innerHTML += valorUnitario;
        listaTotalProduto.innerHTML += subTotal;

        totalProdutos.innerHTML = produtos.length;
        
        var total = produtos.reduce(getTotal, 0);
        function getTotal(total, item){
            return total + (item.valorUnitario * item.quantidade);
        }

        var quantTotalItens = quantItens.reduce(getTotalItens, 0);
        function getTotalItens(valorAcumulado, produto){
            return parseFloat(valorAcumulado) + parseFloat(produto);
        }

        totalItens.innerHTML = quantTotalItens;

        totalCompra.innerHTML = ''
        totalCompra.innerHTML = total.toFixed(2);

        document.getElementById("item").value = '';
        document.getElementById("item").focus();

        document.getElementById("qtdeInput").value = '';
        document.getElementById("vlrUnitInput").value = '';
    }
}

function delItem(){
    alert('Opa, vamos com calma 😅 \n Como o site ainda está em versão de testes, este botão ainda está em desenvolvimento!')
}

addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        addItem();
    };
});
