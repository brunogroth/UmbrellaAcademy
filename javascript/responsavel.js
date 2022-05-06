
// array com os nomes dos botões, em que as tabelas contem o mesmo nome
let actions = ['ano_letivo', 'cad_atv_extra', 'provas', 'notas', 'faltas', 'contato', 'consulta_disc'];

// função em que vai receber o valor do botão, verificar se uma table com o mesmo nome, ele vai dar block no display, se não, vai dar '',
// block = visible
// ''    = hide
function mudaTela(value){

    actions.forEach((nome_action, indice) => {

        if(value.value == nome_action){
            document.getElementById(nome_action).style.display = 'block';
        }
        else{
            document.getElementById(nome_action).style.display = '';
        }
    });
}