async function buscaEndereco(cep) {
    divErro = document.getElementById('erro')
    divErro.innerHTML = "";
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro){
            throw Error('CEP não Existente!');
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')
        var numero = document.getElementById('numero')

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        numero.value = `(${consultaCEPConvertida.ddd})`;
         
        
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro){
        divErro.innerHTML = "<p> Cep inválido, Tente Novamente! </p>";
    }
}
var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
