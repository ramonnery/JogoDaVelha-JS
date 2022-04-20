// Criando tags HTML
let divDificuldade = document.createElement('div') // <div></div>
divDificuldade.id = 'escolhe-dificuldade'

let criaLabel = document.createElement('label') // <label></label>
criaLabel.for = 'dificuldade' // <label for='dificuldade'></label>
criaLabel.innerHTML = 'Escolha a dificuldade:'

let criaSelect = document.createElement('select') //<select></select>
criaSelect.id = 'dificuldade' //<select id='dificuldade'></select>
criaSelect.name = 'dificuldade' //<select id='dificuldade' name='dificuldade'></select>

let criaOption1 = document.createElement('option') // <option></option>
criaOption1.value = 'facil'
criaOption1.innerHTML = 'Fácil'

let criaOption2 = document.createElement('option')
criaOption2.value = 'medio'
criaOption2.innerHTML = 'Médio'

let criaOption3 = document.createElement('option')
criaOption3.value = 'dificil'
criaOption3.innerHTML = 'Difícil'

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


function iniciaJogo() {
    // removeTagSeExistir('#escolhe-modo')
    console.log('O jogo começou...')
}

function removeTagSeExistir(nomeClasseOuId) {
    if(!!document.querySelector(nomeClasseOuId)) {
        document.querySelector(nomeClasseOuId).remove()
    }
}




