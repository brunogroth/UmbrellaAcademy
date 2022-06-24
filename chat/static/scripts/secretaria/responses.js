function getBotResponse(input) {

    // Resposta simples
    if (input == "1") {
        return "Para exportar consulta de nota dos alunos clique no botão exportar na tela </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";

    }
    else if(input == "Sim" || (input == "S") || (input =="s") || input =="sim"){
        return "1 - Emitir consulta de nota dos alunos </br> 2 - Situação dos alunos cadastrados </br> 3 - Outros assuntos";
    }
    else if(input == "Não" || (input == "Nao") || (input =="nao") || (input =="não") || (input =="n") || (input =="N")){
        return "Ok, estou à disposição";
    }

    else if (input == "2") {
        return "Para consultar a situação dos alunos cadastrados olhe a tabela da tela</br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
    else if (input == "3") {
        return "Para outros assunto favor ir presencial a secretaria </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
    {
        return "Não entendi, tente digitar algumas das opções do nosso menu! </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
}