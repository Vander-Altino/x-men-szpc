
/*Objetivo - 1 - quando passar o mouse em cima  do persogem a listagem, 
devemos seleciona-lo 

    passo 1 - pegar os personagens no JS para poder verificar quando
    o usuario passar o mouse em cima de um deles

    passo 2 - verificar se ja exista um personagem selecionado, se sim ,
    devemos remover a selecao dele.

    passo 3 - adicionar a classe selecionado no personagem que o usuario
    passar o cursor do mouse 

    


Objetivo - 2 quando passar o mouse em cima do personagem na listagem, trocar
a imagem, o nome e a descricao do personagem grande

    passo 1 - pegar o elemento do personagem grande para adicionar as informacoe 
    nele.
    passo 2 - alterar a imagem do personagem grande 
    passo 3 - alterar o nome do personagem grande 
    passo 4 - alterar a descricao do personagem grande

    */



//passo 1 - pegar os personagens no JS para poder verificar quando
//o usuario passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');


personagens.forEach((personagem) => {

    personagem.addEventListener('mouseenter', () =>{

        if(window.innerWidth < 450){

            window.scrollTo({top: 0, behavior: 'smooth'});
        }

         //Objetivo - 2 quando passar o mouse em cima do personagem na listagem, trocar
        //a imagem, o nome e a descricao do personagem grande

         //passo 1 - pegar o elemento do personagem grande para adicionar as informacoes 
        //nele.

        removerSelecaoPersonagem();
        
        adcionarSelecaoPersonagem(personagem);
        //passo 2 - alterar a imagem do personagem grande 
        alterarImagemPersonagemSelecionado(personagem);
        //passo 3 - alterar o nome do personagem grande 
        alterarNomePersonagem(personagem);
        //passo 4 - alterar a descricao do personagem grande
        alterarDescricaoPersonagem(personagem);

    })

})
 



function adcionarSelecaoPersonagem(personagem) {
    personagem.classList.add('selecionado');
}

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const idPersonagem = personagem.attributes.id.value;
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

