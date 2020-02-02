 function validare(event) {
        event.preventDefault();

        var validat = true;

        var nume1 = document.querySelector("[name='fname']").value;
        if (nume1.length < 3) {
	validat = false;
          document.querySelector("[name='fname']").classList.add("invalid");
        } else if (validat === true) {
          document.querySelector("[name='fname']").classList.remove("invalid");
        }

        var nume2 = document.querySelector("[name='lname']").value;
        if (nume2.length < 3) {
	validat = false;
        document.querySelector("[name='lname']").classList.add("invalid");
        } else if (validat === true) {
          document.querySelector("[name='lname']").classList.remove("invalid");
        }

        var text = document.querySelector("[name='message']").value;
        if (text.length < 1) {
	validat = false;
        document.querySelector("[name='message']").classList.add("invalid");   
        } else if (validat === true) {
          document.querySelector("[name='message']").classList.remove("invalid");
        }

	var gender=document.getElementsByName('gender');
	var genValue = false;

        for(var i=0; i<gender.length;i++){
            if(gender[i].checked == true){
                genValue = true;    
            }
        }
        if(!genValue){
           alert("Please choose the gender");
            return false;
        }

        if (validat===true) {
          document.querySelector(".alert").innerText = "Thank you for contacting us, " + nume1 + "!";
          document.querySelector(".alert").classList.remove("hidden");
        }
      }
