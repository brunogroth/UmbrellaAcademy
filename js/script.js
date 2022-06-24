// 1. Check that jQuery library is loaded:
// console.log(jQuery);

//2.1) Load App code after document is ready:
jQuery(init);
// 2.2) jQuery(function ($){/* App Code here */})

//--------------//

// 3) App logic goes here:
function init($) {
    // jQuery.ajax(); --> $.ajax(); // $ alias for jQuery

    let $getUsersButton = document.querySelector('#getusers');
    let $addUserButton = document.querySelector('#add-user');
    let $table = document.querySelector("#example"); // document.querySelectorAll();
    let $tbody = $table.querySelector("tbody");
    let options = {
        url: "http://localhost:3000/alunos/",
        success: handleResponse,
    }

    

    //add a click that refers to the whole table:
    document.querySelector("table")
        .addEventListener("click", clickHandler);

    function clickHandler(event) {

        //targets the element that clicked:
        let $tr = event.target.parentElement;
        let id = $tr.firstElementChild.textContent;
        let type = event.target.className;

        if (type === "delete") {
            console.log($tr);
            //console.log(type);
            console.log(id);

            console.log("delete attempt");

            delUser(id);

        } else if (type === "update") {

            editUser(id);

        }
    }

    // edit user when click on update:
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
            }
        }
        $.ajax(editOptions);


    }

    // delete user when click on delete:
    function delUser(id) {

        let delOptions = {
            url: "http://localhost:3000/alunos/" + id,
            method: 'DELETE',
            success: function (result) {
                alert("Aluno deletado.");
            }
        }
        if (confirm("Deletar aluno?")) {
            $.ajax(delOptions);
        }
    }

    // add new user details:
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
            }
        }
        $.ajax(addOptions);
    }
    
    // get all users:
    function getUsers() {
        $.ajax(options);
        $tbody.innerHTML = "";
    }

    function handleAddUser() {
        console.log("Usuário adicionado com sucesso.");
    }

    //dynamically create table rows:
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
        /* to see the keys of an object:
            let keys = Object.keys(data[0]);
            console.log(keys);
        */
        let nomeAluno = data[0];
        // createRow(alunos1);
        if (data instanceof Array) {
            data.map(createRow);
        } else {
            createRow(data);
        }

    }

    // add event Listeners to buttons get & add:
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
                                    {
                                        //'data': 'email',
                                        'render': function(data, type, full, meta) {
                                            return '<a href="http://www.sicadi.com.br/mhouse/boleto/geraboleto.php'  + '"target=_blank">Emitir Boleto</a>';
                                        }
                                    },
                                    
                                ]
                            });
                    }
                });
                
            });
                    
        