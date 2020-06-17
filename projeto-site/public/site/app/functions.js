function closeNav(){
    document.getElementById("mySidebar").style.width = "0";
}

function openNav(){
    document.getElementById("mySidebar").style.width = "250px"
}



function entrar() {
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        
        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.email_usuario;
                sessionStorage.nome_usuario_meuapp = json.nome_usuario;
                
                window.location.href = 'index.html';
            });

        } else {

            console.log('Erro de login!');

            response.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}


function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    img_aguarde.style.display= 'none';
    div_erro.style.display = 'block';
    div_erro.innerHTML = resposta;
}