// modal

function interacao(){
   
   document.getElementById('idmodal').style.display= 'block';
}

function fecharagenda(){
   
   document.getElementById('idmodal').style.display= 'none';
}


function relatorio(){
   
   document.getElementById('modalrelatorio').style.display= 'block';
}

function fecharrelatorio(){
   
   document.getElementById('modalrelatorio').style.display= 'none';
}

function conteudo(){
   
   document.getElementById('modalconteudo').style.display= 'block';
}

function fecharconteudo(){
   
   document.getElementById('modalconteudo').style.display= 'none';
};

function chamada(){
   
   document.getElementById('modalchamada').style.display= 'block';
}

function fecharchamada(){
   
   document.getElementById('modalchamada').style.display= 'none';
};

function nota(){
   
   document.getElementById('modalnota').style.display= 'block';
}

function fecharnota(){
   
   document.getElementById('modalnota').style.display= 'none';
};

function aprovacao(){
   
   document.getElementById('modal-aprovacao').style.display= 'block';
}

function fecharaprovacao(){
   
   document.getElementById('modal-aprovacao').style.display= 'none';
};




function alerta(){


   alert("Enviado com sucesso!");


   

}

function addnota(){
   var table = document.getElementById('table');
   var nota = document.getElementById('notaAluno').value;
   var materia = document.getElementById('materia').value;
   var aluno = document.getElementById('aluno').value;
   

   table.rows[aluno].cells[materia].innerHTML = nota;
} 
