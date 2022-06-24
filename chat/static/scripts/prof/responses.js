function getBotResponse(input) {

    // Resposta simples
    if (input == "1") {
        return "Para emitir calendário de aulas por favor contate o coordenador Diogo no e-mail <strong>diogo.deconto@up.edu.br</strong> </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    
    }   
            else if(input == "Sim" || (input == "S") || (input =="s") || input =="sim"){
            return "1 - Emitir calendário de aulas </br> 2 - Suporte técnico para reabrir nota de aluno </br> 3 - Atestados/Afastamento médico </br> 4 - Abrir reclamação do chefe </br> 5 - Outros assuntos";
            }
            else if(input == "Não" || (input == "Nao") || (input =="nao") || (input =="não") || (input =="n") || (input =="N")){
                return "Ok, estou à disposição";
            }

    else if (input == "2") {
        return "Não há como reabrir notas de alunos </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    } 
    else if (input == "3") {
        return "Por favor arraste o arquivo de atestado/afastamento para o chat </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
    else if (input == "4") {
        return "Ops, era pegadinha passe no RH acertar sua demissão </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
    else if (input == "5") {
        return "Para outros assunto favor contatar a secretaria </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
    {
        return "Não entendi, tente digitar algumas das opções do nosso menu! </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
}