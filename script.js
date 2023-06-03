const botoes = document.querySelectorAll(".principal__botao")
let jogadorDaVez = 'X'

const mensagemJogadorAtual = document.querySelector('.jogador__atual') 
const jogadorAtualNaMensagem = document.querySelector('.jogador__atual > span') 

const mensagemJogadorVencedor = document.querySelector('.mensagem__resultado')
const jogadorVencedorNaMensagem = document.querySelector('.mensagem__resultado > span') 

botoes.forEach(botao => botao.addEventListener("click", evento => alteraConteudo(evento)))

function alteraConteudo (elemento) {

    let textoDoBotao = elemento.target.innerHTML

    if(textoDoBotao === '') {
        textoDoBotao = jogadorDaVez
        elemento.target.innerHTML = textoDoBotao
        
        if (jogadorDaVez === 'X') {
            verificaResultado()
            jogadorDaVez = 'O'
            jogadorAtualNaMensagem.innerHTML = 'O'
        } else {
            verificaResultado()
            jogadorDaVez = 'X'
            jogadorAtualNaMensagem.innerHTML = 'X'
        }
    }

    let botoesPreenchidos = 0
    for (let cont = 0; cont < botoes.length; cont++) {

        if (botoes[cont].innerHTML != '') {
            botoesPreenchidos++
        }

        if (botoesPreenchidos === 9) {
            mensagemJogadorVencedor.innerHTML = 'O JOGO DEU VELHA!'

            mensagemJogadorAtual.style.display = 'none'
            mensagemJogadorVencedor.style.display = 'block'
            botaoJogarNovamente.style.display = 'block'
            botoes.forEach(botao => botao.disabled = true)
        }
    }

}

function mudaCor (posicao) {
    botoes[posicao].style.color = 'lime'
}

function verificaResultado () {
    if (botoes[0].innerHTML === botoes[1].innerHTML && botoes[1].innerHTML === botoes[2].innerHTML && botoes[0].innerHTML != '') {
        [0,1,2].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[3].innerHTML === botoes[4].innerHTML && botoes[4].innerHTML === botoes[5].innerHTML && botoes[3].innerHTML != '') {
        [3,4,5].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[6].innerHTML === botoes[7].innerHTML && botoes[7].innerHTML === botoes[8].innerHTML && botoes[6].innerHTML != '') {
        [6,7,8].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[0].innerHTML === botoes[3].innerHTML && botoes[3].innerHTML === botoes[6].innerHTML && botoes[0].innerHTML != '') {
        [0,3,6].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[1].innerHTML === botoes[4].innerHTML && botoes[4].innerHTML === botoes[7].innerHTML && botoes[1].innerHTML != '') {
        [1,4,7].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[2].innerHTML === botoes[5].innerHTML && botoes[5].innerHTML === botoes[8].innerHTML && botoes[2].innerHTML != '') {
        [2,5,8].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[0].innerHTML === botoes[4].innerHTML && botoes[4].innerHTML === botoes[8].innerHTML && botoes[0].innerHTML != '') {
        [0,4,8].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

    if (botoes[2].innerHTML === botoes[4].innerHTML && botoes[4].innerHTML === botoes[6].innerHTML && botoes[2].innerHTML != '') {
        [2,4,6].map(posicao => mudaCor(posicao))
        jogadorVencedorNaMensagem.innerHTML = jogadorDaVez

        mensagemJogadorAtual.style.display = 'none'
        mensagemJogadorVencedor.style.display = 'block'
        botaoJogarNovamente.style.display = 'block'
        botoes.forEach(botao => botao.disabled = true)
    }

}

const botaoJogarNovamente = document.querySelector('.jogar__novamente')
botaoJogarNovamente.addEventListener('click', evento => jogarNovamente(evento))

function jogarNovamente (evento) {
    evento.preventDefault()

    location.reload()
}
