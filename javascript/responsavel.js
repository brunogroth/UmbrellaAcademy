let ano_letivo = document.getElementById('ano_letivo');
let cad_atv_extra = document.getElementById('cad_atv_extra');
let provas = document.getElementById('provas');
let notas = document.getElementById('notas');
let ver_atv_extra = document.getElementById('ver_atv_extra');
let faltas = document.getElementById('faltas');
let contato = document.getElementById('contato');
let consulta_disc = document.getElementById('consulta_disc');

function mudaTela(value){
    
    if(value.value == 'ano_letivo'){
        ano_letivo.style.display = 'block';
    }
    else{
        ano_letivo.style.display = ''
    }


    if(value.value == 'cad_atv_extra'){
        cad_atv_extra.style.display = 'block';
    }
    else{
        cad_atv_extra.style.display = '';
    }

    if(value.value == 'provas'){
        provas.style.display = 'block';
    }
    else{
        provas.style.display = '';
    }

    if(value.value == 'notas'){
        notas.style.display = 'block';
    }
    else{
        notas.style.display = '';
    }

    if(value.value == 'ver_atv_extra'){
        ver_atv_extra.style.display = 'block';
    }
    else{
        ver_atv_extra.style.display = '';
    }

    if(value.value == 'faltas'){
        faltas.style.display = 'block';
    }
    else{
        faltas.style.display = '';
    }

    if(value.value == 'contato'){
        contato.style.display = 'block';
    }
    else{
        contato.style.display = '';
    }

    if(value.value == 'consulta_disc'){
        consulta_disc.style.display = 'block';
    }
    else{
        consulta_disc.style.display = '';
    }
}