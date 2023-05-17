function exemploSwitchCase1() {
    let numero = parseInt(prompt("Digite um número :"))
    switch (numero) {
        case 1:
            alert("Domingo")
            exibirDados();
            break;
        case 2:
            alert("Segunda")
            break;
        case 3:
            alert("Terça")
            break;
        case 4:
            alert("Quarta")
            break;
        case 5:
            alert("Quinta")
            break;
        case 6:
            alert("Sexta")
            break;
        case 7:
            alert("Sabádo")
            break;
        default:
            alert("Não há dia correspondente")
            break;
    }
}

function exemploSwitchCase2(){
    let mes = parseInt(prompt("Digite um número."))
    switch(mes){
        case 1:
            alert("Janeiro")
            break;
        case 2:
            alert("Fevereiro")
            break;
        case 3:
            alert("Março")
            break;
        case 4:
            alert("Abril")
            break;
        case 5:
            alert("Maio")
            break;
        case 6:
            alert("Junho")
            break;
        case 7:
            alert("Julho")
            break;
        case 8:
            alert("Agosto")
            break;
        case 9:
            alert("Setembro")
            break;
        case 10:
            alert("Outubro")
            break;
        case 11:
            alert("Novembro")
            break;
        case 12:
            alert("Dezembro")
            break;
        default:
            alert("Não há mês correspondente com esse número")
            break;

    }
}
