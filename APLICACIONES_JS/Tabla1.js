var f=document.querySelector("#fila");
var c=document.querySelector("#columna");
var t=document.querySelector("#tabla");

f.oninput=()=>{
let n=parseInt(f.value);
document.querySelector("#vfila").innerHTML=n;
updateTable();
}

c.oninput=()=>{
let n=parseInt(c.value);
document.querySelector("#vcolumna").innerHTML=n;
updateTable();
}


    function updateTable() {
        let filas = f.value;
        let columnas = c.value;
        let html = "";
        for (let i = 0; i < filas; i++) {
            html += "<tr>";
            for (let j = 0; j < columnas; j++) {
                html += "<td>Fila " + (i + 1) + ", Columna " + (j + 1) + "</td>";
            }
            html += "</tr>";
        }
        t.innerHTML = html;
    }

    // Mostrar la tabla inicial
    updateTable();