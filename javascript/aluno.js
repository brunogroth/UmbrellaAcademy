function inicia(){
    var table = document.getElementById('table');
    var defaultterca = "Visita Museu";
    var defaultsexta = "Ativ Extensão I";

    table.rows[3].cells[2].innerHTML = defaultterca;
    table.rows[3].cells[5].innerHTML = defaultsexta;
}


function AddAtvExtra(){
    var table = document.getElementById('table');
    var atvextra = document.getElementById('atv-extra').value;
    var dataatv = document.getElementById('data').value;
    

    table.rows[3].cells[dataatv-1].innerHTML = atvextra;
} 

