let txtnum = document.querySelector('#txtnum')      // numero digitado na caixa de texto
let lista = document.querySelector('#lista')        // esse é o select
let res = document.querySelector('#res')            // texto no fim

let valores = []                                    // cria o array vazio de nome 'valores'


function adicionar() {
    if (Number(txtnum.value) >= 1 && Number(txtnum.value) <= 100) { //vê se o número está entre 1 e 100
        valores.push(Number(txtnum.value))                  // adiciona o elemento ao array 'valores'
        let item = document.createElement('option')     // cria o item option dentro do select
        item.text = `Valor ${txtnum.value} adicionado.` // cria o texto a ser exibido dentro do select
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('ERRO! Número precisa estar entre 1 e 100.')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar() {   // ao clicar no botão, imprime na tela as informações de dentro do array
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let quantidade = valores.length
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${quantidade} números cadastrados</p>`

        let maiorNumero = Math.max(...valores)
        res.innerHTML += `<p>O maior valor informado foi ${maiorNumero}</p>`

        let menorNumero = Math.min(...valores)
        res.innerHTML += `<p>O menor valor informado foi ${menorNumero}</p>`

        let soma = 0;
        for (let c = 0; c < valores.length; c++) {
            soma += valores[c];
        }
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        let media = soma / valores.length
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }

}