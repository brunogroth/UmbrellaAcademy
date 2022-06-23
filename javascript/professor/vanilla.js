//Como executar query para filtrar dados
//http://localhost:3000/alunos?q=iphone

var main = document.getElementsByTagName('main')[0];

var btnalunos = document.getElementById('btnprofessors');



function criarLista(alunos){
    const lista = document.createElement('ul');
    for (const aluno of alunos) {
        const item = document.createElement('li');
        item.innerText = aluno.nome;
        lista.appendChild(item);
    }
    main.appendChild(lista);
}

function gerarLista(url){
    fetch(url)
    .then((resposta)=> {
        return resposta.json();
    })
    .then((json)=>{
        criarLista(json);
    })
}

function enviar(aluno, url, method, json){
    fetch(url, {
        method: method,
        body: JSON.stringify(json),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(()=> {
        gerarTabela('http://localhost:3000/alunos');
    });
}

/*

function carregarHtml(url, elemento, aluno){
    fetch(url)
    .then((resposta)=> {
        return resposta.text();
    })
    .then((html)=>{
        elemento.innerHTML = html;
    })
    .then(()=>{
        var txtNome = document.getElementById('nome');
        var txtMateria1 = document.getElementById('materia1');

        if (aluno != null){
            txtNome.value = aluno.nome;
            txtMateria1.value = aluno.materia1;
        }

        var btnSalvar = document.getElementById('btnSalvar');
        btnSalvar.onclick = ()=>{

            var txtNome = document.getElementById('notas');
            var txtMateria1 = document.getElementById('aluno');
            var nomeForm = txtNome.value;
            var materia1Form = txtMateria1.value;

            var json = {
                "notas": nomeForm,
                "aluno": materia1Form
            }

            var url = 'http://localhost:3000/alunos'

            if (aluno != null){
              enviar(aluno, url + '/' + aluno.id, 'PUT', json);
            } else {
               enviar(aluno, url, 'POST', json);
            }
        }

        var btnVoltar = document.getElementById('btnVoltar');
        btnVoltar.onclick = ()=>{
            gerarTabela('http://localhost:3000/alunos');
        };

    });
}
*/

function configurarForm(aluno){
    carregarHtml('javascript/aluno/form.html', main, aluno);
}

var listaDealunos;



function gerarTabela(url){
    main.innerHTML = '';

    var btnIncluir = document.createElement('button');
    btnIncluir.innerText = "";
    btnIncluir.onclick = ()=> {
        configurarForm();
    }

  

    fetch(url)
    .then((resposta)=> {
        return resposta.json();
    })
    .then((alunos)=>{
        listaDealunos = alunos;

        //Código de geração da tabela
        var table = document.createElement('table');
        table.setAttribute('id', 'table');
        table.classList.add('table');

        var tbody = document.createElement('tbody');


        // // dias da semana
        // var tr = document.createElement('tr');
        // var th = document.createElement('th');
        // var txt = document.createTextNode('Segunda-feira');
        // theader.appendChild(txt);
        // tr.appendChild(theader);

        // //1a coluna
        // var materias = document.createElement('tr');
        // var txt1 = document.createTextNode('Matérias');
        // theader.appendChild(txt1);
        // theader.appendChild(th);

        // var provas = document.createElement('tr');
        // var txt2 = document.createTextNode('Provas');
        // theader.appendChild(txt2);
        // theader.appendChild(theader);

        // var ativextras = document.createElement('tr');
        // var txt3 = document.createtext('Ativ Extras');
        // td.appendChild(txt3);
        // theader.appendChild(td);


        var qtdeLinhas = alunos.length;

        for(var i = 0; i < qtdeLinhas; i++){
            var aluno = alunos[i];

            //Linha
            var tr = document.createElement('tr');

            //1a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.aluno1);
            td.appendChild(txt);
            tr.appendChild(td);

            //2a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.notas);
            td.appendChild(txt);
            tr.appendChild(td);

            //3a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.faltas);
            td.appendChild(txt);
            tr.appendChild(td);

            //4a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.ativextra);
            td.appendChild(txt);
            tr.appendChild(td);

            

        
          

            
            //5a coluna
            

            if(i>0)//validação pra não pegar o primeiro "aluno" que são os dias da semana
            {

                
                //Link editar
                var linkEditar = document.createElement('a');
                linkEditar.href = '#' + alunos.id;
                linkEditar.setAttribute("id", alunos.id);
                var txt = document.createTextNode('');
                linkEditar.appendChild(txt);            
                linkEditar.onclick = (event)=> {
                    var id = event.target.id;               
                    var alunos = listaDealunos.find(alunos => alunos.id == id);      
                    configurarForm(alunos);
                }
                td.appendChild(linkEditar);
                
                
            //Link excluir
            var linkExcluir = document.createElement('a');
            linkExcluir.href = '#' + aluno.id;
            linkExcluir.setAttribute("id", aluno.id);
            var txt = document.createTextNode('');
            linkExcluir.appendChild(txt);
            linkExcluir.onclick = (event)=> 
            {
                var id = event.target.id;
                var aluno = listaDealunos.find(aluno => aluno.id == id);
                
                if (confirm('Deseja excluir todos os registros?')) {
                    fetch('http://localhost:3000/alunos/' + event.target.id, {
                        method: "DELETE"
                    })
                    .then(()=> {
                        gerarTabela('http://localhost:3000/alunos');
                    });
                }else{
                    configurarForm(aluno);
                }
            }
            td.appendChild(linkExcluir);
        }
            tr.appendChild(td);
            tbody.appendChild(tr);

        }

        table.appendChild(tbody);


        main.appendChild(table);

    })
}



btnalunos.onclick = ()=>{
    main.innerHTML = '';
    gerarTabela('http://localhost:3000/alunos');
}

