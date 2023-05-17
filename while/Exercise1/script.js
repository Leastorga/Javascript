function umA(){
console.log("Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")
let numero = parseInt(prompt("Digite o número que quer multiplicar. "))
let multiplicador=1;
let resultado = 0;
    
while (multiplicador < 11){
    resultado = numero * multiplicador
    console.log(numero + " X " + multiplicador + "=" + resultado)
    multiplicador++
    }
}
