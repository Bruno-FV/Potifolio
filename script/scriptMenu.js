document.addEventListener("DOMContentLoaded", function () {
    let sobreMimLink = document.getElementById("linkSobreMim");
    let pRealizadoLink = document.getElementById("linkpRealizado");
    let skillLink = document.getElementById("linkskill");

    let divsobreMim = document.getElementById("sobreMim");
    let divpRealizado = document.getElementById("pRealizado");
    let divskill = document.getElementById("skill");

    // Inicialmente, oculta todas as divs
    divsobreMim.style.display = "none";
    divpRealizado.style.display = "none";
    divskill.style.display = "none";

    // Adiciona eventos de clique aos links do menu
    sobreMimLink.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        divsobreMim.style.display = "block";
        divpRealizado.style.display = "none";
        divskill.style.display = "none";
    });

    pRealizadoLink.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        divsobreMim.style.display = "none";
        divpRealizado.style.display = "block";
        divskill.style.display = "none";
    });

    skillLink.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        divsobreMim.style.display = "none";
        divpRealizado.style.display = "none";
        divskill.style.display = "block";
    });
});