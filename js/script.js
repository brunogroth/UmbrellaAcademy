
jQuery(init);

function init($) {

    let $getUsersButton = document.querySelector('#getusers');
    let $addUserButton = document.querySelector('#add-user');
    let $table = document.querySelector("#example"); // document.querySelectorAll();
    let $tbody = $table.querySelector("tbody");
    let options = {
        url: "http://localhost:3000/alunos/",
        success: handleResponse,
    }

    

    // chama a tabela inteira de alunos
    document.querySelector("table")
        .addEventListener("click", clickHandler);

    function clickHandler(event) {

        let $tr = event.target.parentElement;
        let id = $tr.firstElementChild.textContent;
        let type = event.target.className;

        if (type === "delete") {
            console.log($tr);
            console.log(id);

            console.log("tentativa delete");

            delUser(id);

        } else if (type === "update") {

            editUser(id);

        }
    }

    // funcao de editar/atualizar usuarios
    function editUser(id) {
        let $tr = event.target.parentElement;
        let nomeAluno = $tr.children[1].firstElementChild.value;
        let situacaoFinanceiro = $tr.children[2].firstElementChild.value;
        let extraFinanceiro = $tr.children[3].firstElementChild.value;
        let mensalidade = $tr.children[4].firstElementChild.value;
         
        let editOptions = {
            url: "http://localhost:3000/alunos/" + id,
            method: 'PUT',
            data:  {
                nomeAluno: nomeAluno,
                situacaoFinanceiro : situacaoFinanceiro,
                extraFinanceiro: extraFinanceiro,
                mensalidade: mensalidade,
            },
            success: function (result) {
                console.log("Sucesso!");
                alert("Aluno atualizado.");
                location.reload();
            }
        }
        $.ajax(editOptions);


    }

    // funcao de deletar usuarios
    function delUser(id) {

        let delOptions = {
            url: "http://localhost:3000/alunos/" + id,
            method: 'DELETE',
            success: function (result) {
                alert("Aluno deletado.");
                location.reload();
            }
        }
        if (confirm("Deletar aluno?")) {
            $.ajax(delOptions);
        }
    }

    // funcao de adicionar usuarios pelo form
    function addUser() {
        let $nomeAluno = document.querySelector("#inputNome");
        let $id = document.querySelector("#inputID")
        let $situacaoFinanceiro = document.querySelector("#inputSituacao")
        let $extraFinanceiro = document.querySelector("#inputExtra");
        let $mensalidade = document.querySelector("#inputMensalidade");
        let nomeAluno = $nomeAluno.value;
        let id = $id.value;
        let situacaoFinanceiro = $situacaoFinanceiro.value;
        let extraFinanceiro = $extraFinanceiro.value;
        let mensalidade = $mensalidade.value;
        let addOptions = {
            url: "http://localhost:3000/alunos/",
            method: 'POST',
            data: {
                situacaoFinanceiro: situacaoFinanceiro,
                nomeAluno: nomeAluno,
                id : id,
                extraFinanceiro: extraFinanceiro,
                mensalidade: mensalidade,
            },
            success: handleAddUser,
            success: function (result) {
                alert("Aluno adicionado.");
                location.reload();
            }
        }
        $.ajax(addOptions);
    }
    
    // puxar todos usuarios:
    function getUsers() {
        $.ajax(options);
        $tbody.innerHTML = "";
    }

    function handleAddUser() {
        console.log("Usuário adicionado com sucesso.");
    }

    // criar as linhas da tabela dinamicamente
    function createRow(alunos) {

        let $tr = document.createElement("tr");
        $tr.innerHTML = `
                        <td id="id">${alunos.id}</td>
                        <td id="name"><input type="text" value="${alunos.nomeAluno}"></td>
                        <td id="username"><input type="text" value="${alunos.situacaoFinanceiro}"></td>
                        <td id="email"><input type="text" value="${alunos.extraFinanceiro}"></td>
                        <td id="email"><input type="text" value="${alunos.mensalidade}"></td>
                        <td class="update">Atualizar</td>
                        <td class="delete">Deletar</td>
                        `;

        $tbody.appendChild($tr);
    }

    function handleResponse(data) {
        
        let nomeAluno = data[0];
        // criar rows;
        if (data instanceof Array) {
            data.map(createRow);
        } else {
            createRow(data);
        }

    }

    // evento dos botoes 
    $getUsersButton.addEventListener("click", getUsers);
    $addUserButton.addEventListener("click", addUser);
    
}

















$(document)
            .ready(function() {
                $.ajax({
                    url: 'http://localhost:3000/alunos',
                    method: 'get',
                    dataType: 'json',
                    success: function(data) {
                        var exampleTable = $('#example')
                            .DataTable({
                                data: data,
                                'aaSorting': [[0, 'asc']],
                                dom: "<'row'<'col-md-6 text-left'T><'col-md-6 text-right'f>>" +
                                    "<'row'<'col-md-12't>>" +
                                    "<'row'<'col-md-10'i><'col-md-6'p>>",
                                'columnDefs': [
                                    { 'width': '25px', 'targets': [0] },
                                    { 'sortable': false, 'targets': [0] }
                                ],
                                
                                'columns': [
                                    { 'data': 'id'},
                                    { 'data': 'nomeAluno'},
                                    { 'data': 'situacaoFinanceiro' },
                                    { 'data': 'extraFinanceiro'},
                                    
                                    // {
                                    //     //'data': 'email',
                                    //     'render': function(data, type, full, meta) {
                                    //         return '<a href="mailto:' + full.email + '?">E-Mail</a>';
                                    //     }
                                    // },
                                    { 'data': 'mensalidade' },
                                  
                                    
                                ]
                            });
                    }
                });
                
            });
                    
        