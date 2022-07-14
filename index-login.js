function validaLogin(login, password) {
  const usuario = "xxxxx.xxxxx",
    senha = "123456";

  if (senha == password && usuario == login) {
    return true;
  } else {
    return false;
  }
}

/*
function registraLogin() {
  let usuario = document.getElementById("inputUsuario").value,
    senha = document.getElementById("inputSenha").value,
    logar = validaLogin(usuario, senha);

  if (!logar) {
    document.getElementById("mensagem").innerHTML =
      "Você digitou dados inválidos!";
  } else {
    document.getElementById("mensagem").innerHTML = "Você logou!";
  }
}
*/

$(document).ready(function () {

    // retorno booleano no qual true o formulário é enviando com sucesso
    //e false é paresentado erro no formulário.
    $("#logar").submit(function(event){
        let usuario = $("#inputUsuario").val();
        let senha = $("#inputSenha").val();
        let logar = validaLogin(usuario, senha);

        if (!logar) {
            $("#mensagem").text("Você digitou dados inválidos!");
        } else {
            $("#mensagem").text("Você logou!");
        }

        return logar;
    });

});
//console.log(validaLogin("daniela.leguari", "123456"));
