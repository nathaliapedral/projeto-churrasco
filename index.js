// Carne: 400gr por pessoa   +6 horas: 650gr
// Cerveja: 1200ml por adulto +6 horas: 2000ml
// Refrigerante/agua: 1000ml por pessoa +6 horas: 1500ml






function calcularPorcoes(qtdAdultos, qtdCriancas,duracao) {

    let churrasco = [];

    if(duracao < 6){
        churrasco[0] = 400 * qtdAdultos +  200 * qtdCriancas;
        churrasco[1] = 1200 * qtdAdultos;
        churrasco[2] = 1000 * qtdAdultos + 500 * qtdCriancas;
    } else {
        churrasco[0] = 650 * qtdAdultos + 375 * qtdCriancas;
        churrasco[1] = 2000 * qtdAdultos;
        churrasco[2] = 1500 * qtdAdultos +  750 * qtdCriancas;
    }

    return churrasco;
}


function montarDivResultado(resultado){
    
    let carneKg = resultado[0] / 1000;
    let cervejaL = resultado[1] / 1000;
    let refrigeranteL = resultado[2] / 1000;
    
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `
    <p>${carneKg} kg de carne </p>
    <p>${cervejaL} L de cerveja </p>
    <p>${refrigeranteL} L de refrigerante/água</p>
    
    `;
}

let calcular = document.getElementById("btn-calcular");

calcular.addEventListener("click", () => {
    
    let qtdAdultos = document.getElementById("qtd-adultos").value;
    let qtdCriancas = document.getElementById("qtd-criancas").value;
    let duracao = document.getElementById("duracao").value;

    let resultado = calcularPorcoes(qtdAdultos,qtdCriancas,duracao);

    montarDivResultado(resultado);

    


});