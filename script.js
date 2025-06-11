// Trazendo as Entradas
let titulo = document.querySelector('.titulo')
let subtitulo = document.querySelector('.subtitulo')
let exercicios = document.querySelector('#exercicios')
let resultado = document.querySelector('#resultado')

// Título da página
titulo.innerHTML= "Execícios de JavaScript"
subtitulo.innerHTML = "Estes exercícios foram realizados por mim no decorrer da disciplina de Lógica de Programação, 1º semestre da faculdade.Estou disponibilizando para todos que quiserem treinar seus códigos e aprender, até mesmo colaborar com este projeto. Bons estudos!"

// Criando DESCRIÇÃO
let descricao = document.createElement('h3')
descricao.setAttribute('id','descricao')
exercicios.appendChild(descricao)
descricao.innerHTML = 'Elaborar um programa que leia 2 notas de um aluno. <br>Calcule e mostre a média das notas.'

// Criando RESULTADO
let res = document.createElement('h4')
res.setAttribute('id','res')
resultado.appendChild(res)
res.innerHTML = 'Informe os dados e clique em <u>Enviar</u>'

// Criando ENTRADAS
let label = document.createElement('p')
exercicios.appendChild(label)
label.innerText='Informe o valor da primeira avaliação:'

let num1 = document.createElement('input')
num1.setAttribute('type','number')
num1.setAttribute('placeholder','Avaliação 1')
num1.setAttribute('id','num1')
exercicios.appendChild(num1)


let label2 = document.createElement('p')
exercicios.appendChild(label2)
label2.innerText='Informe o valor da segunda avaliação:'

let num2 = document.createElement('input')
num2.setAttribute('type','number')
num2.setAttribute('placeholder','Avaliação 2')
num2.setAttribute('id','num1')
exercicios.appendChild(num2)

let quebradelinha = document.createElement('p')
exercicios.appendChild(quebradelinha)

let enviar = document.createElement('button')
enviar.setAttribute('onclick','enviar()')
exercicios.appendChild(enviar)
enviar.innerHTML='<b>ENVIAR</b>'

function enviar (){
    if (num1.value.length == 0 || num2.value.length == 0) {
        alert('[ERRO] Verifique os dados!') 
    } else {}
}