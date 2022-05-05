function preparar() {

    var prep = document.getElementById("preparo").value;

    var paragrafo  = document.getElementById("paragrafo").innerHTML;

    window.alert('Olá ' + prep + ', é um prazer te ver!');

    //paragrafo = paragrafo +"<p>"+prep+"</p>";



    document.getElementById("paragrafo").innerHTML = paragrafo;

}

var select = document.querySelector('select');

var para = document.querySelector('p');


select.addEventListener('change', obterClima);


function obterClima() {

    var opcao = select.value;


    if (opcao === 'sol') {

        para.textContent = 'Está quente e ensolarado hoje. Use short e camiseta! Vá a praia ou ao parque e tome uma cerveja!';

    } else if (opcao === 'chuva') {

        para.textContent = 'Está chovendo muito hoje!. Fique em casa, escolha um bom filme ou estude javascript! Ah, não esqueça da pipoca.';

    } else if (opcao === 'neve') {

        para.textContent = 'E não é que está nevando em Curitiba? Aproveite essa raridade, tire fotos e deixe sua roupa ficar branquinha. Ninguem sabe quando isso vai ocorrer novamente!';

    } else if (opcao === 'ameno') {

        para.textContent = 'Hoje não está nem quente e nem frio! É aquele dia típico de outono, com céu azul e clima agradável! Vá jogar frescobol no parque, é uma boa pedida!';

    } else {

        para.textContent = '';

    }

}