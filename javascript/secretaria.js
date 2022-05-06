function mensagem() {

    var mens = document.getElementById("preparo").value;

    window.alert('A mensagem a ser enviada para todos os pais por e-mail e SMS será: ' + mens );

}

var select = document.querySelector('select');

var para = document.querySelector('h4');


select.addEventListener('change', obterPai);


function obterPai() {

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