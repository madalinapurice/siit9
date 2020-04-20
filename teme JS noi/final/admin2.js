async function add(event){
	event.preventDefault();	
		var newLink = {
			imagine:document.querySelector("[name='imagine']").value,
			nume:document.querySelector("[name='nume']").value,
			detalii:document.querySelector("[name='descriere']").value,
			pret:document.querySelector("[name='pret']").value,
			stoc:document.querySelector("[name='stoc']").value
		};
				
		var response = await fetch(`https://site-81d77.firebaseio.com/list/.json`,{
			method:"POST",
			body:JSON.stringify(newLink)
		});
		window.location.href = "Admin.html";
}
			
	var idx=window.location.search.substr(4);
	
	async function loadEdit(idx){
		if(idx===""){
			return;
		}
		var response = await fetch(`https://site-81d77.firebaseio.com/list/${idx}.json`);
			window.list = await response.json();
				document.querySelector("[name='imagine']").value=list.imagine,
				document.querySelector("[name='imagine']").value=list.imagine,
				document.querySelector("[name='nume']").value=list.nume,
				document.querySelector("[name='descriere']").value=list.detalii,
				document.querySelector("[name='pret']").value=list.pret,
				document.querySelector("[name='stoc']").value=list.stoc
			}
			
	async function edit(event){
		event.preventDefault();
			var newLink = {
				imagine:document.querySelector("[name='imagine']").value,
				nume:document.querySelector("[name='nume']").value,
				detalii:document.querySelector("[name='descriere']").value,
				pret:document.querySelector("[name='pret']").value,
				stoc:document.querySelector("[name='stoc']").value
			};
				
			var response = await fetch(`https://site-81d77.firebaseio.com/list/${idx}.json`,{
				method:"PUT",
				body:JSON.stringify(newLink)
			});
			window.location.href = "Admin.html";
	}