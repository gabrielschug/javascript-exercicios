
// Trazendo as Entradas 
let num = document.querySelector('input#fnum') // Número
let lista = document.querySelector('select#lista') // Lista
let resultado = document.querySelector('div#resultado') // Div__Resultado

// Array que será analisado os dados
let valores = [] // Vetor

// Verificar se o num é maior que 1 e menor que 100:
function isNumero(n) { if(Number(n) > 0 && Number(n) < 101 ) {return true} else {return false}
}

// Verificar se o num não está contido no Vetor:
function inValores(n, l) { if( valores.indexOf(Number(n)) != -1 ) {return true} else {return false}
}


// Adicionar o num no Vetor, se passar nas condições:
function adicionar() {
    if (isNumero(num.value) && !inValores(num.value, valores)) {  // Se num foi valor e não está no Vetor

        valores.push(Number(num.value)) // Adiciona o num no Vetor
        
        let adicionarOpcao = document.createElement('option') // Criar elemento Option
        adicionarOpcao.text = `Valor ${num.value} adicionado` // Incluir texto no Option
        lista.appendChild(adicionarOpcao) // Adicionar option na lista
        
    } else{
        alert(`[ERRO] Valor Adicionado Inválido!`) // se não... Informa erro
        
    }
    res.innerHTML = ""
    num.value = "" // apagar último valor do input
    num.focus() // leva o cursor pra dentro do input
}

function finalizar(){
    if (valores.length == 0) { 
        alert("[ERRO] Adicione números antes de Finalizar")
    } else{
        let cont = valores.length

        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let posicao in valores){
            soma += valores[posicao]

            if (valores[posicao] > maior)
                maior = valores[posicao]

            if (valores[posicao] < menor)
                menor = valores[posicao]
        }

        let media = (soma / cont)
        
        res.innerHTML = ""
        res.innerHTML = `Ao todo, temos ${cont} números cadastrados.<br>` +
        `O maior valor informado foi ${maior}<br>` + 
        `O menor valor informado foi ${menor}.<br>` +
        `Somando todos valores temos ${soma}.<br>` + 
        `A média dos valores digitados é ${media}.`
    }
}