function addTags(value) {
    if(value === 'CPU') {
        if(!!document.getElementById('inicia-jogo')) {
            document.getElementById('inicia-jogo').remove()
        }

        // Criando tags HTML
        let criaDiv = document.createElement('div') // <div></div>
        criaDiv.id = 'escolhe-dificuldade'

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

        let criaButton = document.createElement('input')
        criaButton.id = 'inicia-jogo'
        criaButton.type = 'button'
        criaButton.value = 'Iniciar'
        
        // Adicionando as tags criadas no documento HTML
        let divEscolheModo = document.querySelector('#escolhe-modo')
        divEscolheModo.appendChild(criaDiv)
        
        let divEscolheDificuldade = document.querySelector('#escolhe-dificuldade')
        divEscolheDificuldade.appendChild(criaLabel)
        divEscolheDificuldade.appendChild(criaSelect)
        divEscolheDificuldade.appendChild(criaButton)
        
        let selectDificuldade = document.querySelector('#dificuldade')
        selectDificuldade.appendChild(criaOption1)
        selectDificuldade.appendChild(criaOption2)
        selectDificuldade.appendChild(criaOption3)

        // document.querySelector('#inicia-jogo').onclick = iniciaJogo()

    }

    if(value === 'escolha') {
        if(!!document.getElementById('escolhe-dificuldade')) {
            document.getElementById('escolhe-modo').removeChild(document.getElementById('escolhe-dificuldade'))
        }
        if(!!document.getElementById('inicia-jogo')){
            document.getElementById('inicia-jogo').remove()
        }
    }

    if(value === 'amigo') {
        if(!!document.getElementById('escolhe-dificuldade')) {
            document.getElementById('escolhe-dificuldade').remove()
        }

        let criaButton = document.createElement('input')
        criaButton.id = 'inicia-jogo'
        criaButton.type = 'button'
        criaButton.value = 'Iniciar'

        let divEscolheModo = document.querySelector('#escolhe-modo')
        divEscolheModo.appendChild(criaButton)
    }
}

// function iniciaJogo() {
//     document.getElementById('modo-jogo').style.display = 'none'
// }