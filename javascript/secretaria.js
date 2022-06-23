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

function desenhar(){
    const tbody = document.getElementById('listaRegistrosBody')
    if(tbody){
        var data = listaRegistros.usuarios;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.nome ) || expReg.test( usuario.fone )
            } )
        }
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( usuario => {
                return `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.fone}</td>
                        <td>
                            <button onclick='vizualizar("cadastro",false,${usuario.id})'>Editar</button>
                            <button class='vermelho' onclick='perguntarSeDeleta(${usuario.id})'>Deletar</button>
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}
