//Como executar query para filtrar dados
//http://localhost:3000/alunos?q=iphone

var main = document.getElementsByTagName('main')[0];

var btnAPI = document.getElementById('btnAPI');
var btnalunos = document.getElementById('btnalunos');

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

            var txtNome = document.getElementById('nome');
            var txtMateria1 = document.getElementById('materia1');
            var nomeForm = txtNome.value;
            var materia1Form = txtMateria1.value;

            var json = {
                "nome": nomeForm,
                "materia1": materia1Form
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

function configurarForm(aluno){
    carregarHtml('javascript/aluno/form.html', main, aluno);
}

var listaDealunos;

function gerarTabela(url){
    main.innerHTML = '';

    var btnIncluir = document.createElement('button');
    btnIncluir.innerText = "Incluir";
    btnIncluir.onclick = ()=> {
        configurarForm();
    }

    main.appendChild(btnIncluir);

    fetch(url)
    .then((resposta)=> {
        return resposta.json();
    })
    .then((alunos)=>{
        listaDealunos = alunos;

        //Código de geração da tabela
        var table = document.createElement('table');
        table.setAttribute('id', 'table')
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
            var txt = document.createTextNode(aluno.campo1);
            td.appendChild(txt);
            tr.appendChild(td);

            //2a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.campo2);
            td.appendChild(txt);
            tr.appendChild(td);

            //3a coluna
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.campo3);
            td.appendChild(txt);
            tr.appendChild(td);

            //4a
            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.campo4);
            td.appendChild(txt);
            tr.appendChild(td);

            var td = document.createElement('td');
            var txt = document.createTextNode(aluno.campo5);
            td.appendChild(txt);
            tr.appendChild(td);

         
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
        }
            tr.appendChild(td);
            tbody.appendChild(tr);

        }

        table.appendChild(tbody);


        main.appendChild(table);

    })
}



btnAPI.onclick = ()=>{
    main.innerHTML = '';
    gerarLista('http://localhost:3000/alunos');
}

btnalunos.onclick = ()=>{
    main.innerHTML = '';
    gerarTabela('http://localhost:3000/alunos');
}

