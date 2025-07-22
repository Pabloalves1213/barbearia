function agendar(){ 
    
    const nome = document.getElementById("nome").value;
    const dataHora = document.getElementById("dataHora").value;
    const profissional = document.getElementById("profissional").value;
    const servico = document.getElementById("servico").value;
    const cpf = document.getElementById("cpf").value;

    if (!nome || !dataHora || !servico || !profissional ||!cpf) {
        alert("preencha todos os campos");
        return
    }
    if (cpf.length >11){
       alert("o campo cpf deve conter 11 digitos")
  
    }
    const lista = document.getElementById('listaAgendamentos');
    const item = document.createElement('p')
    item.textContent = `${nome} agendou para ${dataHora} com ${profissional} para ${servico}`;
    lista.appendChild(item)
}
