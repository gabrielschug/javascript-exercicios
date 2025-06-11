// Trazendo as Entradas
let res = document.querySelector('#res')
let num1 = Number(document.querySelector('#nota1').value)
let num2 = Number(document.querySelector('#nota2').value)

let media

// FUNÇÃO
function verificar (){
    
    if (num1.length == 0 || num2.length == 0) {
        alert('[ERRO] Verifique os dados!')
        
    } else {
        res.innerHTML=""
        media = (num1 + num2) / 2

        res.innerHTML=`${num1} e ${num2}`
    }
}