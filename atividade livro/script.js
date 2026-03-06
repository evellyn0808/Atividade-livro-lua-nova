function mostrar(secao,botao){

document.querySelectorAll(".section").forEach(s=>{
s.classList.remove("active")
})

document.getElementById(secao).classList.add("active")

document.querySelectorAll("nav button").forEach(b=>{
b.classList.remove("menuAtivo")
})

botao.classList.add("menuAtivo")

}

/* GALERIA */

const imagens = document.querySelectorAll(".galeria img")
const lightbox = document.getElementById("lightbox")
const imgGrande = document.getElementById("imgGrande")

imagens.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex"
imgGrande.src=img.src

})

})

lightbox.addEventListener("click",()=>{

lightbox.style.display="none"

})