//Função para validar o input

document.querySelector(".submit").onclick = function validateInput(){
if( document.querySelector("input").value==""
   || document.querySelector("input").value.indexOf('@')==-1
     || document.querySelector("input").value.indexOf('.')==-1 )
	{
    var input = document.querySelector(".email");
    var errorMessage = document.querySelector("h6");
    input.classList.add("error");
    errorMessage.style.display = "block";
	  return false;
	}
}
