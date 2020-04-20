let listaCos;
var produs;
let subtotal;

function getList() {
	let cosStr = localStorage.getItem("cart");
	if(cosStr===null){
		listaCos = [];
	}else{
		listaCos = JSON.parse(cosStr);
	}
        draw(listaCos);
		drawTotal(listaCos);
}

function draw(list) {
    var str = "";
    for (var i in list) {
		subtotal=parseInt(list[i].pret)*parseInt(list[i].cantitate);
            str += `
				<tr>
				  <td data-label="Nume"><a href="Detalii.html?id=${list[i].id}">${list[i].nume}</a></td>
				  <td data-label="Pret">${list[i].pret} RON</td>
				  <td data-label="Cantitate"><button class="plusMinus" onclick="scadeCantitate(${i})">-</button>${list[i].cantitate}<button onclick='maresteCantitate(${i})' class="plusMinus">+</button></td>
				  <td data-label="Subtotal">${subtotal}</td>
				  <td data-label=""><a href="#" onclick="deleteItem(${i});">Remove</a></td>	
				</tr>
			`;
      }
      document.querySelector("table tbody").innerHTML = str;
    }

function drawTotal(list) {
	var total=0;
    var str = "";
    for (var i in list) {
		var sub=parseInt(list[i].pret)*parseInt(list[i].cantitate);
		total+=sub;	
	}
	str += `
		<h3>Produse : ${listaCos.length}</h3>
		<h3>Total : ${total} RON</h3>
		<h3><button class="cumparaBtn">Cumpara</button></h3>
	`;
      document.querySelector(".cumpara").innerHTML = str;
}

function maresteCantitate(i){
	let cantCos=parseInt(listaCos[i].cantitate);
	let cantStoc=parseInt(listaCos[i].stoc);
		if(cantCos+1<=cantStoc){
			listaCos[i].cantitate++;
			localStorage.setItem("cart", JSON.stringify(listaCos));
			draw(listaCos);
			drawTotal(listaCos);
		}else{
			alert("Cantitatea depaseste stocul");
	}
}

function scadeCantitate(i){
	let cantCos=parseInt(listaCos[i].cantitate);
	let cantStoc=parseInt(listaCos[i].stoc);
		if(cantCos-1>0){
			listaCos[i].cantitate--;
			localStorage.setItem("cart", JSON.stringify(listaCos));
			draw(listaCos);
			drawTotal(listaCos);
		}else{
		alert("Cantitatea nu poate fi 0");
	}
}
	
function deleteItem(i) {
listaCos.splice(i,1);
  localStorage.setItem("cart", JSON.stringify(listaCos));
	draw(listaCos);
	drawTotal(listaCos);
}
