const btnCriptograr = document.querySelector(".btn_criptografar");
const textCriptografar = document.querySelector(".input_campo");
const alerta = document.querySelector(".alerta_texto");
const resposta = document.querySelector(".avaliar");
const cartao = document.querySelector(".cartao_container");
const btnCopiar = document.querySelector(".btn_copiar");
const btnDescriptografar = document.querySelector(".btn_descriptografar");

btnCriptograr.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        alerta.style.background = "#AFAFAF";
        alerta.style.color = "#FFFFFF";
        alerta.style.fontweigth = "800";
        alerta.textContent = "O campo de texto não deve estar vazio.";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    } 

    else if(texto !== txt){
        alerta.style.background = "#AFAFAF";
        alerta.style.color = "#FFFFFF";
        alerta.style.fontweigth = "800";
        alerta.textContent = "Não deve conter acentos e caracteres especiais.";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#AFAFAF";
        alerta.style.color = "#FFFFFF";
        alerta.style.fontweigth = "800";
        alerta.textContent = "O texto deve ser todo em minúsculo.";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        cartao.remove();
    }
});

btnDescriptografar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        alerta.style.background = "#AFAFAF";
        alerta.style.color = "#FFFFFF";
        alerta.style.fontweigth = "800";
        alerta.textContent = "O campo de texto não deve estar vazio.";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    } 

    else if(texto !== txt){
        alerta.style.background = "#AFAFAF";
        alerta.style.color = "#FFFFFF";
        alerta.style.fontweigth = "800";
        alerta.textContent = "Não deve conter acentos e caracteres especiais.";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#AFAFAF";
        alerta.style.color = "#FFFFFF";
        alerta.style.fontweigth = "800";
        alerta.textContent = "O texto deve ser todo em minúsculo.";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        cartao.remove();
    }
});


btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resposta;
    copiar.select();
    document.execCommand("copy");
});