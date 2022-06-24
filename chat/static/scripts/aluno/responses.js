function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Resposta simples
    if (input == "1") {
        return 'Para consultar seu calendário de aulas, visite o Portal do Aluno como Aluno/Estudante e vá até "Calendário Escolar".</br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>';
    
    }   else if (input == "2") {
        return 'Para realizar a sua matrícula em uma Atividade Extra, visite o Portal do Aluno como Aluno/Estudante e vá até "Atividade Extra" Selecione a data desejada e informe a matéria a sua escolha.</br>Posso te ajudar em mais alguma questão?<strong>Sim/Não</strong>';
    } 
    else if (input == "3") {
        return 'Para consultar os conteúdos de aula, visite o Portal do Aluno como Aluno/Estudante e vá até "Material de Estudos" e selecione a matéria desejada para acessar o arquivo .PDF e o conteúdo em vídeo da matéria selecionada. </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>';
    }
    else if (input == "4") {
        return "Digite em uma frase como eu posso ajudá-lo. </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
    if(input == "Sim" || (input == "S") || (input =="s") || input =="sim"){
        return "1 - Como encontrar meu calendário de aulas </br> 2 - Apoio com Matrícula em Atividade Extra </br> 3 - Como ver os conteúdos de aula </br> 4 - Outros assuntos";
    }
    if(input == "Não" || (input == "Nao") || (input =="nao") || (input =="não") || (input =="n") || (input =="N")){
        return "Ok, estou à disposição";
    }   
    {
        return "Não entendi, tente digitar algumas das opções do nosso menu! </br>Posso te ajudar em mais alguma questão?</br><strong>Sim/Não</strong>";
    }
}