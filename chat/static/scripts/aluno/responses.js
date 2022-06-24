function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "1") {
        return "Para obter mais informações sobre boleto ligue 3030-3030";
    } else if (input == "2") {
        return "Para rematricula acesse o painel dos responsáveis e clique em <strong>rematricula</strong>";
    } else {
        return "Olá Adriana!";
    }
}