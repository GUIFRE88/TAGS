let tags = []
let tagContainer = document.querySelector('.tag-container')
let input = tagContainer.querySelector('input')

// Adiciona Evento de adicionar e sair do input
input.addEventListener('keyup', addTags)

function addTags(event){

	// Verifica se o valor adicionado � Enter
	const keyPressedIsEnter = event.key == 'Enter'

	if(keyPressedIsEnter){

		// Faz a separa��o por virgulas
		input.value.split(',').forEach( tag => {

			// Retira valores vazios
			if(tag){
				// Salva no array de tags
				tags.push(tag.trim()) // trim - retira espa�os em branco
			}
		})

		//
		updateTags()

		// Limpa o campo em tela
		input.value = ""
	}
	//console.log(input.value)
}

function updateTags(){

	clearTags()

	tags.slice().reverse().forEach(tag =>{

		// Adiciona o valor no elemento do Html
		tagContainer.prepend(creatTag(tag))

	})

}

function creatTag(tag){

	// Cria elemento em Html
	const div = document.createElement('div')
	div.classList.add('tag')

	// Cria span que conter� o valor
	const span = document.createElement('span')
	span.innerHTML = tag // Adiciona o valor ao span
	div.append(span) // Coloca o span dentro da DIV

	// Cria bot�o para deletar uma tag
	const i = document.createElement('i')
	i.classList.add('close') // Adiciona a clase ao bot�o
	i.setAttribute('data-id', tag) // Adiciona um identificador para cada TAG
	i.onclick = removeTag // Adiciona fun��o de remover a TAG
	span.append(i) // Adiciona dentro do Span

	return div
}

function removeTag(event){

	const buttonX = event.currentTarget // Identifica que foi clicado no bot�o
	const id = buttonX.dataset.id // Identifica a TAG que foi clicada
	const index = tags.indexOf(id) // Busca o ID no array de tags

	// Retira a tag do array de tags
	tags.splice(index, 1,)

	updateTags()

}

function clearTags(){
	tagContainer
		.querySelectorAll('.tag')
		.forEach(tagElement => tagElement.remove())
}