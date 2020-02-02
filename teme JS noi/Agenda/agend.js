var contacts = [];
    var indexEdit;

    function draw() {
      var str = "";
      for (var i = 0; i < contacts.length; i++) {
        var contactDeAfisat = contacts[i];

        str += `
						<tr>
							<td>${contactDeAfisat.nume}</td>
							<td>${contactDeAfisat.telefon}</td>
							<span class="editLinks">
							<td><a href="#" onclick="edit(${i});" class="editLinks">Modifica</a></td>
							<td><a href="#" onclick="del(${i});" class="editLinks">Sterge</a></td>
							</span>
						</tr>
					`;
      }
      if (str !== "") {
        document.querySelector("table tbody").innerHTML = str;
        document.querySelector(".secondBox").classList.remove("hidden");
      } else {
        document.querySelector(".secondBox").classList.add("hidden");
      }
    }

    function addOrEditContact() {
      var numeIntrodus = document.querySelector("[name='nume']").value;
      var telefonIntrodus = document.querySelector("[name='telefon']").value;
      if (numeIntrodus.length > 0 && telefonIntrodus.length > 0) {
        var contactCitit = {
          nume: numeIntrodus,
          telefon: telefonIntrodus
        }
        if (indexEdit === undefined) {
          contacts.push(contactCitit);
        } else {
          contacts[indexEdit] = contactCitit;
        }
        draw();
        document.querySelector("[name='nume']").value = "";
        document.querySelector("[name='telefon']").value = "";
      }

    }

    function del(idx) {
      if (confirm(`Esti sigur ca vrei sa stergi contactul?`)) {
        contacts.splice(idx, 1);
        draw();
      }
    }

    function edit(idx) {
      document.querySelector("[name='nume']").value = contacts[idx].nume;
      document.querySelector("[name='telefon']").value = contacts[idx].telefon;
      window.indexEdit = idx;
    }