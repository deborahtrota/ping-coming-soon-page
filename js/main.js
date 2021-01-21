document.querySelector(".submit").onclick = function checarEmail(){
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

/* Ativar função ao pressionar enter 

var keyElement = document.querySelector('.submit');
keyElement.addEventListener("onkeypress", keyFunction(e));

function keyFunction(e){
  var key = e.keyCode;
  if (key == 13) {
    alert("sopa");
  }
}

*/
