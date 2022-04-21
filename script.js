function iniciaJogo() {
    removeTagSeExistir('#escolhe-modo')
    
    // Removendo o atributo 'hidden' da div
    document.getElementById('rodando-jogo').removeAttribute('hidden')
}


function removeTagSeExistir(nomeClasseOuId) {
    if(!!document.querySelector(nomeClasseOuId)) {
        document.querySelector(nomeClasseOuId).remove()
    }
}


function criaOption(nomeValue, texto='') {
    let option = document.createElement('option')
    option.value = nomeValue
    option.innerHTML = texto

    return option
}

// Criando tags HTML
let divDificuldade = document.createElement('div') // <div></div>
divDificuldade.id = 'escolhe-dificuldade'

let criaLabel = document.createElement('label') // <label></label>
criaLabel.for = 'dificuldade' // <label for='dificuldade'></label>
criaLabel.innerHTML = 'Escolha a dificuldade:'

let criaSelect = document.createElement('select') //<select></select>
criaSelect.id = 'dificuldade' //<select id='dificuldade'></select>
criaSelect.name = 'dificuldade' //<select id='dificuldade' name='dificuldade'></select>

let criaOption1 = criaOption('facil', 'Fácil')
let criaOption2 = criaOption('medio', 'Médio')
let criaOption3 = criaOption('dificik', 'Difícil')

let button = document.createElement('button')
button.classList.add('inicia-jogo')
button.textContent = 'Iniciar'
button.addEventListener('click', iniciaJogo)

let divEscolheModo = document.querySelector('#selecao')


function addTags(value) {
    if(value === 'CPU') {
        removeTagSeExistir('.inicia-jogo') 
        
        // Adicionando as tags criadas no documento HTML
        divEscolheModo.appendChild(divDificuldade)
        
        let divEscolheDificuldade = document.querySelector('#escolhe-dificuldade')
        divEscolheDificuldade.appendChild(criaLabel)
        divEscolheDificuldade.appendChild(criaSelect)
        divEscolheDificuldade.appendChild(button)
        
        let selectDificuldade = document.querySelector('#dificuldade')
        selectDificuldade.appendChild(criaOption1)
        selectDificuldade.appendChild(criaOption2)
        selectDificuldade.appendChild(criaOption3)

    }

    if(value === 'escolha') {
        removeTagSeExistir('#escolhe-dificuldade')
        removeTagSeExistir('.inicia-jogo')
    }

    if(value === 'amigo') {
        removeTagSeExistir('#escolhe-dificuldade')

        let divEscolheModo = document.querySelector('#escolhe-modo')
        divEscolheModo.appendChild(button)

    }
}


const player1 = 'x'
const player2 = 'o'
let playerTime = player1
let gameOver = false

atualizaMostrador()
inicializarEspaco()

function atualizaMostrador() {
    if(gameOver) {return}

    let player = document.getElementById('image')

    if(playerTime === player1) {
        player.setAttribute('src', 'images/x.png')
    }
    else {
        player.setAttribute('src', 'images/bolinha.png')
    }
}

function inicializarEspaco() {
    let espaco = document.getElementsByClassName('espaco')

    for(let i = 0; i < espaco.length; i++) {
        espaco[i].addEventListener('click', function() {
            if(gameOver) {return}

            if(this.getElementsByClassName('images').length == 0) {                
                if(playerTime === player1) {
                    this.innerHTML = '<img class="images" src="images/x.png">'
                    playerTime = player2
                }
                else {
                    this.innerHTML = '<img class="images" src="images/bolinha.png">'
                    playerTime = player1
                }
            }

            atualizaMostrador()
        })
    }
}




