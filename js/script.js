


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

            // var exampleTable = $('#example')
            // .Tabledit({

            //     columns: {
            //       identifier: [0, 'id'],                    
            //       editable: [[1, 'nomeAluno'], [2, 'situacaoFinanceiro'], [3,'extraFinanceiro']]
            //     },
                    