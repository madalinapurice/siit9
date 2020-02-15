
	var produse = [];
    var indexEdit;
	
	window.onload=function(){
	document.querySelector("[name='produs']").addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.querySelector(".addItem").click();
  }
});
}
     function add() {
        var produsIntrodus = document.querySelector("[name='produs']").value;
        if (produsIntrodus.length > 0) {
          var produsCitit = {
            produs: produsIntrodus,
            cumparat: false
          };
          produse.push(produsCitit); 
          draw();
          document.querySelector("[name='produs']").value = "";
        }
      }

      function draw() {
        var str = "";
        for (var i = 0; i < produse.length; i++) {
          var produsDeAfisat = produse[i];
          if (produsDeAfisat.cumparat === true) {
            str += `
					<tr>
							<td class="crossed">${produsDeAfisat.produs}</td>
							<td><button id="bought" onclick="markedAsBought(${i});">Marked as Bought</button></td>
					</tr>
				`;
          } else {
            str += `
					<tr>
							<td>${produsDeAfisat.produs}</td>
							<td><button id="bought" onclick="markedAsBought(${i});">Marked as Bought</button></td>
					</tr>
				`;
          }
        }

        if (str !== "") {
          document.querySelector("table tbody").innerHTML = str;
          document.querySelector(".tabel").classList.remove("hidden");
        }
      }

      function markedAsBought(idx) {
        var produsDeMarcat = produse[idx];
        produsDeMarcat.cumparat = true; 
        draw();
      }

      function sortAsc() {
        var produseSortateAsc = [];
        for (var i = 0; i <= produse.length - 1; i++) {
          for (j = i + 1; j < produse.length; j++) {
            if (produse[j].produs.toLowerCase() < produse[i].produs.toLowerCase()) {
              produseSortateAsc = produse[i];
              produse[i] = produse[j];
              produse[j] = produseSortateAsc;
            }
          }
        }
        draw();
      }

      function sortDesc() {
        var produseSortateDesc = [];
        for (var i = 0; i <= produse.length - 1; i++) {
          for (j = i + 1; j < produse.length; j++) {
            if (produse[j].produs.toLowerCase() > produse[i].produs.toLowerCase()) {
              produseSortateDesc = produse[i];
              produse[i] = produse[j];
              produse[j] = produseSortateDesc;
            }
          }
        }
        draw();
      }
	  