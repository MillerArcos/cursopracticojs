const h1 = document.querySelector("h1");
const imput1 = document.querySelector('#calculo1');
const imput2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');


function btOnClick (){
    const sumaImputs= parseInt(imput1.value) + parseInt(imput2.value);
    result.innerHTML = "Resultado: " + sumaImputs;
}