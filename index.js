let submitele = document.getElementById('submit');


function resetproblems(){
	 start.innerHTML="";
 }
	 
let
   touch = function () {
      function para() {
         const paraele = document.createElement("p");
         paraele.setAttribute('class', 'text' + i);
         const node = document.createTextNode("This is new.");
         paraele.appendChild(node);
         const element = document.getElementById("start");
	      element.appendChild(paraele);
		paraele.myparam=i;
		paraele.addEventListener('click',onClickForP,false);
	  
	  }
       resetproblems();
      for (i = 1; i <= 8; i++) {
         para();
		 
		  }	 
   }

function onClickForP(evt){
	     alert("u touched the para", + evt.currentTarget.myparam);
      }
submit.addEventListener('click', touch);