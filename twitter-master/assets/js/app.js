
function add(){
	//tenemos que tomar el texto en el text area.
	var comments= document.getElementById("comment").value;

	//limpiar el textarea
	document.getElementById("comment").value="";

	//contenedor que esta en el html
	var cont=document.getElementById("cont");

	//creamos el div que contiene cada comentario
	var newComments=document.createElement("div");

	//validar que textarea tenga un mensaje
	if(comments.length == 0 || comments == null){
		container.removeChild(button);
}else if(comments.length > 140){
	container.removeChild(button);
}

 var counter = function(){
var max = 140
var count = comments.length
var countChar = (count - max);
 };

	//nodos de texto de textarea
	var textNewComment = document.createTextNode(comments);
    var contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);
}







