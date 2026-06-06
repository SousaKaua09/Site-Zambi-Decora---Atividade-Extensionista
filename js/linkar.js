function abrirProduto(){
    window.location.href = "modeloProduto.html"
}

function abrirCatalogo(){
    window.location.href = "catalogo.html"
}

function voltarPagina(){
    if(history.length > 1){
        history.back();
    }else{
        window.location.href = "index.html";
    }
}