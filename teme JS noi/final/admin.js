var list = {};

async function getList() {
	var response = await fetch("https://site-81d77.firebaseio.com/list/.json");
	window.list = await response.json();
	draw();
}

function draw() {
	var str = "";
	for (var i in list) {
		str += `
			<tr>
			  <td data-label=""><img class="imagineAdmin" src="${list[i].imagine}"></td>
			  <td data-label="Produs"><a href="Admin formular.html?id=${i}">${list[i].nume}</a></td>
			  <td data-label="Pret">${list[i].pret} RON</td>
			  <td data-label="Stoc">${list[i].stoc}</td>
			  <td data-label=""><a href="#" onclick="del('${i}');">Remove</a></td>
			</tr>`;
	}
	document.querySelector("table tbody").innerHTML = str;
	}

function showMain (){
	setTimeout(function(){
	var main=document.querySelector(".Admin");
	main.classList.remove("hidden");

	var main=document.querySelector(".loader");
	main.classList.add("hidden");
}, 2000);
}


async function del(idx) {
	if(confirm(`Esti sigur ca vrei sa stergi ${list[idx].nume} ?`)){
		var response = await fetch(`https://site-81d77.firebaseio.com/list/${idx}.json`,{
		method:"DELETE"
	});
	await getList();
	}
}
