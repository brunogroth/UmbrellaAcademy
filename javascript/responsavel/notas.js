//Como executar query para filtrar dados
//http://localhost:3000/alunos?q=iphone

var main = document.getElementsByTagName('main')[0];

var btnAPI = document.getElementById('btnAPI');
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

function configurarForm(aluno){
    carregarHtml('javascript/aluno/form.html', main, aluno);
}

var listaDealunos;

function gerarTabela(url){
    main.innerHTML = '';

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

        for(var i = 0; i < 2; i++){
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

            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.mensalidadeResponsavel);
            td.appendChild(txt);
            tr.appendChild(td);

            /*
            //5a coluna
            var td = document.createElement('td');

            //Link editar
            if(i>0)//validação pra não pegar o primeiro "aluno" que são os dias da semana
            {
            var linkEditar = document.createElement('a');
            linkEditar.href = '#' + aluno.id;
            linkEditar.setAttribute("id", aluno.campo5);
            var txt = document.createTextNode('Editar');
            linkEditar.appendChild(txt);
            linkEditar.onclick = (event)=> {
                var id = event.target.id;
                var aluno = listaDealunos.find(aluno => aluno.id == id);
                configurarForm(aluno);
            }
            td.appendChild(linkEditar);

            //Link excluir
            var linkExcluir = document.createElement('a');
            linkExcluir.href = '#' + aluno.id;
            linkExcluir.setAttribute("id", aluno.id);
            var txt = document.createTextNode('Excluir');
            linkExcluir.appendChild(txt);
            linkExcluir.onclick = (event)=> {
                if (confirm('Tem certeza que deseja excluir ?')) {
                    fetch('http://localhost:3000/alunos/' + event.target.id, {
                        method: "DELETE"
                    })
                    .then(()=> {
                        gerarTabela('http://localhost:3000/alunos');
                    });
                }
            }
            td.appendChild(linkExcluir);
        }*/
            tr.appendChild(td);
            tbody.appendChild(tr);

        }

        table.appendChild(tbody);


        main.appendChild(table);

    })
}


main.innerHTML = '';
    gerarTabela('http://localhost:3000/alunos');
