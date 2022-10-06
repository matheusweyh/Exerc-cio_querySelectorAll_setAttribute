//01

const listaCards = document.getElementsByClassName('card')

for (const card of listaCards){
    card.setAttribute('style', 'background-color: #E16E0E;')
    
    card.children[0].innerHTML = 'Meu card'
    card.children[0].setAttribute('style', 'color: #2B385B; margin-bottom: 30px;')

    card.children[1].innerHTML = 'Descrição modificada pelo JavaScript'
    card.children[1].setAttribute('style', 'color: #FFFFFF; margin-bottom: 30px;')

    card.children[2].setAttribute('style', 'color: #FFFF; border-radius: 20px; width: 70px; heigth: 35px; border: none; background-color: green')
    card.children[3].setAttribute('style', 'color: #FFFF; border-radius: 20px; width: 70px; heigth: 35px; border: none; background-color: red')
}

const listaBtnEditar = document.querySelectorAll('.botao-editar')
const listaBtnApagar = document.querySelectorAll('.botao-apagar')

for(const btn of listaBtnEditar){
    btn.setAttribute('onclick', 'editarCard()')
}

for(const btn of listaBtnApagar){
    btn.setAttribute('onclick', 'apagarCard()')
}

function editarCard(){
    alert("Clicou!")
}

function apagarCard(){
    const confirma = confirm("Tem certeza que deseja excluir o card?")

    confirma ? alert('Confirmado!') : alert('Cancelou!')

}
