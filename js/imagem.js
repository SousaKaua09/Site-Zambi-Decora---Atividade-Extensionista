const imagemGrande = document.getElementById("imagemGrande");

const modal = document.getElementById("modal");

const imagemModal = document.getElementById("imagemModal")

imagemGrande.addEventListener("click", () => {
    modal.style.display = "flex";

    imagemModal.src = imagemGrande.src;
});

modal.addEventListener("click", () => {
    modal.style.display = "none";
})

function trocarImagem(imagem){

    const imagemGrande = document.getElementById("imagemGrande");

    imagemGrande.src = imagem.src;

    const miniaturas = document.querySelectorAll(".miniaturaImgProduto img");

    miniaturas.forEach(img => {
        img.classList.remove("ativa");
    });


    imagem.classList.add("ativa");


}