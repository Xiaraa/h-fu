function eliminarclass(){
    element.classList.remove("submit2");
    element.classList.add("submit");
}
function crearcomentario(texto,texto2){
    element = document.getElementById('submit');
    element.style.setProperty("color", "");
    element.classList.remove("submit2");
if(texto.length>=1 && texto2.length>=1){

element.classList.remove("submit2");
a1= "ya te mandaremos un mensaje " + texto;
document.getElementById("capa").innerHTML=a1;
element.classList.add("submit");
element.style.setProperty("color", "green");



}else{
    if(texto.length<1){
    element.classList.remove("submit");
    a1= "no introdujo nombre";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    setTimeout(eliminarclass,100);

    
    
    }else{
    element.classList.remove("submit2");
    element.classList.remove("submit");
    a1= "no introdujo numero";
    document.getElementById("capa").innerHTML=a1;
    element.classList.add("submit2");
    setTimeout(eliminarclass,100);
    }
}

}