let rojo = document.getElementById("rojo");
let amarillo = document.getElementById("amarillo");
let verde = document.getElementById("verde");

function changelights() {
    setTimeout(function () {
        rojo.style.backgroundColor = "red";
        amarillo.style.backgroundColor = "gray";
        verde.style.backgroundColor = "gray";

        setTimeout(function () {
            rojo.style.backgroundColor = "gray";
            amarillo.style.backgroundColor = "gray";
            verde.style.backgroundColor = "green";


            setTimeout(function () {
                rojo.style.backgroundColor = "gray";
                amarillo.style.backgroundColor = "yellow";
                verde.style.backgroundColor = "gray";


             changelights();
            }, 2000);

        }, 2000);

    }, 2000);

}
changelights();