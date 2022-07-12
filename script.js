const [input0, input1] = document.querySelectorAll("input");
const imagem = document.querySelectorAll("image 1");
const botao = document.querySelectorAll(button);

function habilitar(){
    if(input0.value && input1.value.length >= 8){
        botao.removeAttribute("disabled");
    } else{
        botao.setAttribute("disabled", "disabled");
    }
}
input0.addEventListener("input", habilitar);
input1.addEventListener("input", habilitar);