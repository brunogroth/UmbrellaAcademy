function preparar() {

    var prep = document.getElementById("preparo").value;

    var paragrafo  = document.getElementById("paragrafo").innerHTML;

    window.alert('A mensagem a ser enviada para todos os pais por e-mail e SMS será: ' + prep );

    document.getElementById("paragrafo").innerHTML = paragrafo;

}

var select = document.querySelector('select');

var para = document.querySelector('h4');


select.addEventListener('change', obterClima);


function obterClima() {

    var opcao = select.value;


    if (opcao === 'joania') {

        para.textContent = 'Gostaria de marcar uma reunião com a professora Marcia de Historia';

    } else if (opcao === 'marcos') {

        para.textContent = 'Preciso do Historico do ano passado do meu filho João Felipe';

    } else if (opcao === 'lara') {

        para.textContent = 'Gostaria de saber qual o cronograma de aulas do meu filho';

    } else if (opcao === 'marcio') {

        para.textContent = 'Gostaria de receber o controle de faltas do meu filho';

    } else {

        para.textContent = '';

    }

}