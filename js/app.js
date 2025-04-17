let amigos = [];

function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let nome = nomeAmigo.value.trim();

    // Validação: impede nome vazio ou repetido
    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse nome já foi adicionado!');
        return;
    }

     // Validação: limite máximo de 8 nomes
     if (amigos.length >= 8) {
        alert('Limite de 8 participantes atingido!');
        return;
    }
    
    amigos.push(nomeAmigo.value);

    if(lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 participantes para sortear.');
        return;
    }

    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    listaSorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let sorteado = (i === amigos.length - 1) ? amigos[0] : amigos[i + 1];
        listaSorteio.innerHTML += `${amigos[i]} ---> ${sorteado}<br>`;
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}

function limparCampo() {
    document.getElementById('nome-amigo').value = '';
}