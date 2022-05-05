let actions = [
        'ano_letivo',
        'cad_atv_extra',
        'provas',
        'notas',
        'ver_atv_extra',
        'faltas',
        'contato',
        'consulta_disc',
];

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