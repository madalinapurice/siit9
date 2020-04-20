  var id = window.location.search.substr(4);
  var produs;
      async function getList(id) {
	  
        var response = await fetch(`https://site-81d77.firebaseio.com/list/${id}.json`);
		window.produs = await response.json();

        var str =`
			<div class="container">
				<div class="smallContainer">
					<img src="${produs.imagine}" class="box">
				</div>
			</div>
			<div class="2Boxes">
				<div class="detaliiProdus ">
					<p class="textContainerTitle"> ${produs.nume}</p>
					<p class="textContainerPret">Pret: ${produs.pret} RON</p>
					<p class="textContainerPret">In stoc: ${produs.stoc} bucati.</p>
					<div class="inputNr">Cantitate <input type="number" name="quantity" value="1" min="1"></div>
					<br>
					<button onclick="adaugaInCos();" class="adaugaCos" class="culoareLink">Adauga in cos</button>
			</div>
			<hr style="max-width:540px; border: 1px solid #D3D3D3;;">
			<div class="descriere">
				<h2 class="textContainerTitle">DESCRIERE</h2><p class="textContainerDescriere" style=" white-space: pre-line;">${produs.detalii}</p>
			</div>
			</div>`;
        document.querySelector(".wrapper").innerHTML = str;
      }
	  
function showMain (){
	setTimeout(function(){
	var main=document.querySelector(".wrapper");
	main.classList.remove("hidden");
	var main=document.querySelector(".loader");
	main.classList.add("hidden");
	}, 
	3000);
 }

function adaugaInCos(){
	let cos;//array cate tine elem din localStorage
	let found = false;//var contor care arata ca produsul exista deja in cos
	let cantitate = parseInt(document.querySelector("[name='quantity']").value);
	let prodStoc=parseInt(window.produs.stoc);
	let cosStr = localStorage.getItem("cart");
	
	if(cosStr===null){
		cos = [];
	}else{
		cos = JSON.parse(cosStr);
	}
	
	
	if(cos.length>0){
		for(let i=0;i<cos.length;i++){
			if(cos[i].id === id){			
				let cantCos=parseInt(cos[i].cantitate);
				let stocCos=parseInt(cos[i].stoc);
				if((cantitate+cantCos)<=stocCos){				
					cos[i].cantitate += cantitate;
					
					found=true;	
					localStorage.setItem("cart", JSON.stringify(cos));
					arataNotificareStoc(produs.nume);					
				}else{
					found=true;
					arataAlertaStoc();
					}
			}
		} 
	}
	
	if(!found){	
		if(cantitate<=prodStoc){			
			var pret=produs.pret;
			var stoc=produs.stoc;
			var nume=produs.nume;
			var produsDeAdaugatInCos = {
				cantitate,
				id,
				pret,
				stoc,
				nume
			}
			cos.push(produsDeAdaugatInCos);
			localStorage.setItem("cart", JSON.stringify(cos));
			arataNotificareStoc(produs.nume);
		}else{
			arataAlertaStoc();
		}
	}
}

function arataAlertaStoc()
{
	document.querySelector(".alertStoc").innerText = `STOCUL ESTE DEPASIT!`;
	document.querySelector(".alertStoc").classList.remove("hidden");
	setTimeout(()=>document.querySelector(".alertStoc").classList.add("hidden"),3000);
	document.querySelector(".alert").classList.add("hidden");
}

function arataNotificareStoc(numeProd)
{
	document.querySelector(".alert").innerText = `${numeProd} A FOST ADAUGATA IN COS!`;
	document.querySelector(".alert").classList.remove("hidden");
	setTimeout(()=>document.querySelector(".alert").classList.add("hidden"),3000);
	document.querySelector(".alertStoc").classList.add("hidden");
}