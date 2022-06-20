const bancoDeDados = require('./data/db.json');

/*
Na primeira execução vai criar automaticamente um banco 
chamado database.sqlite na raiz do projeto e realizar todos 
os passos do CRUD. Na segunda execução, considerando que
o banco de dados já foi criado e o id já foi criado é preciso
incrementá-lo para pegar um id existente no banco.
*/
(async () => {
    const database = require('./javascript/aluno/connect');
    const Aluno = require('./javascript/aluno/aluno_json');
    try {
        const resultado = await database.sync();
        //console.log(resultado);

        //Create
        const resultadoCreate = await Aluno.create({
            nome: 'Lucas',
            preco: 5000,
            descricao: 'Um iPhone'
        })
        //console.log(resultadoCreate);

        var id = 1;

        //Retreive (all)
        const alunos = await Aluno.findAll();  
        console.log('-----> Retreive (all)');
        for(var alunoDb of alunos){
            id = alunoDb.id;
            console.log('-----> ' + alunoDb.nome);
        }   
        
        //Retreive (byPk)        
        var aluno = await Aluno.findByPk(id);
        console.log('-----> Retreive (byPk)');

        //Update        
        aluno.materia1 = "teste";
        const resultadoSave = await aluno.save();
        console.log('-----> Update');
        console.log('-----> ' + resultadoSave.materia1);

        //Delete opção 1
        console.log('-----> Delete opção 1');
        Aluno.destroy({ where: { id: id }});

        console.log('-----> CRUD realizado com sucesso!');

    } catch (error) {
        console.log(error);
    }
})();







console.log("Servidor iniciado...");



module.exports = ()=>{
    return bancoDeDados;
};