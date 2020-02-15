class Elev3 {
        constructor(nume) {
          this.nume = nume;
          this.note = [];
        }

        adaugaNota(nota) {
          this.note.push(parseInt(nota));
        }

        get medie() {
          var sum = 0;
          if (this.note.length === 0) {
            return "";
          } else {
            console.log("nr note=" + this.note.length);
            for (var i = 0; i < this.note.length; i++) {
              sum += this.note[i];
              console.log("note=" + this.note[i]);
            }
            console.log("sum=" + sum);
            console.log("media=" + sum / this.note.length);
            return (sum / this.note.length);
          }
        }

      }

      class Catalog {

        constructor() {
          this.elevi = [];
        }

        addElev(str) {
          var elev = new Elev3(str);
          this.elevi.push(elev);
        }

        veziNote(idx) {
          var elev = this.elevi[idx];
          this.elevAscultat = elev;
        }

        sortAsc() {
          this.elevi.sort(function(a, b) {
            return a.medie - b.medie;
          });
        }

        sortDesc() {
          this.elevi.sort(function(a, b) {
            return b.medie - a.medie;
          });
        }

        addNota(str) {
          this.elevAscultat.adaugaNota(str);
        }

        sortAscNote() {
          this.elevAscultat.note.sort(function(a, b) {
            return a - b;
          });
        }

        sortDescNote() {
          this.elevAscultat.note.sort(function(a, b) {
            return b - a;
          });
        }
      }

      var catalog = new Catalog();

      function onClickAddElev() {
        var numeElev = document.querySelector("[name='text']").value

        if (numeElev === "") {
          alert("Introduceti nume!");
        } else {
          catalog.addElev(numeElev);
          drawElevi();
        }
        document.querySelector("[name='text']").value = "";
      }


      function onClickVeziNote(idx) {
        catalog.veziNote(idx);
        drawNote();
        document.querySelector("#note_elev_wrapper").classList.remove("hidden");
        document.querySelector("#note_elev_wrapper").classList.add("wrapperNote");
        document.querySelector("#lista_elevi_wrapper").classList.remove("dimensiuneInit");
        document.querySelector("#lista_elevi_wrapper").classList.add("redimensionare");

      }

      function onClickAscundeNote(idx) {
        catalog.veziNote(idx);
        drawElevi();
        document.querySelector("#note_elev_wrapper").classList.add("hidden");
        document.querySelector("#note_elev_wrapper").classList.remove("wrapperNote");
        document.querySelector("#lista_elevi_wrapper").classList.remove("redimensionare");
        document.querySelector("#lista_elevi_wrapper").classList.add("dimensiuneInit");
      }

      function onClickSortAscMedie(idx) {
        catalog.sortAsc();
        drawElevi();
      }

      function onClickSortDescMedie(idx) {
        catalog.sortDesc();
        drawElevi();
      }

      function onClickAddNota() {
        var notaAdaugata = document.querySelector("[name='notes']").value
        catalog.addNota(notaAdaugata);
        if (notaAdaugata === "") {
          alert("Introduceti nota!");
        } else {
          drawNote();
          drawElevi();
        }
        document.querySelector("[name='notes']").value = "";
      }

      function onClickSortNoteAsc() {
        catalog.sortAscNote();
        drawNote();
      }

      function onClickSortNoteDesc() {
        catalog.sortDescNote();
        drawNote();
      }

      window.onload = function() {
        document.querySelector("[name='text']").addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            document.querySelector(".adaugaElev").click();
          }
        });
        document.querySelector("[name='notes']").addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
            document.querySelector(".adaugare").click();
          }
        });
      }

      function drawElevi() {
        var str = `<tr>
				<th>Nume</th>
				<th>Medie</th>
		  </tr>`;

        for (var i = 0; i < catalog.elevi.length; i++) {
          var elev = catalog.elevi[i];
          str += `
						<tr align="center">
							<td>${elev.nume}</td>
							<td>${elev.medie}</td>
							<td><button onclick="onClickVeziNote(${i})">Vezi Note</button></td>
						</tr>
					`;
        }
        document.querySelector(".tabel tbody").innerHTML = str;
      }

      function drawNote() {
        var note = catalog.elevAscultat.note;
        var str = "";
        var str2 = `Nume elev:${catalog.elevAscultat.nume}`;
        for (var i = 0; i < note.length; i++) {
          var nota = note[i];
          str += `
						<tr>
							<td>${nota}</td>
						</tr>
					`;
        }
        document.querySelector(".tabelNote tbody").innerHTML = str;
        document.querySelector('#numeDivNote').innerHTML = str2;
      }