
function enviadorDeMsg(){
    document.getElementById("enviarmsg").addEventListener("click", function(){
        var chat =document.getElementById('chat');
        var texto = document.getElementById('textomsg')
        var div = document.createElement('div');
        div.classList.add("card", "text-end", "mt-1", "col", "align-self-end", "px-4", "py-2");
        div.textContent=texto.value;
        
        
        chat.appendChild(div);
        texto.value="";
        texto.focus();

    });
}

window.addEventListener("load", enviadorDeMsg);
