# amigo-secreto
<h1 align="center">🎁 Projeto do amigo secreto. </h1>

**📋 Objetivo: Este projeto tem como objetivo simular um sorteio de amigo secreto, onde o usuário pode:**

* Adicionar os nomes dos participantes.

* Visualizar a lista de amigos.

* Sortear os pares de forma aleatória e justa.

* Exibir o resultado do sorteio na tela.

* Reiniciar o sorteio quando desejar.

**🧩 Funcionalidades:**

* ✅ Adição dinâmica de participantes;

* ✅ Armazenamento dos nomes em um array;

* ✅ Embaralhamento justo com algoritmo de Fisher-Yates;

* ✅ Sorteio em formato circular (último tira o primeiro);

* ✅ Exibição clara dos pares na tela;

* ✅ Reinicialização da lista e do sorteio com um clique.

* ✅ Impedir: Nome em branco, Nome já existente na lista.

* ✅ Limpar: Um botão que limpa apenas o campo de input (nome-amigo), sem apagar a lista ou o sorteio.

<h2 align="center"> 📚 Aulas e Etapas do Desenvolvimento. </h2>

<h3 align="center"> 📘 Primeira aula: Adicionando Participantes. </h3>

**📌 Objetivo: Criar a função adicionar() para inserir nomes na lista de participantes e exibir os nomes na tela.**

**💻 Código:**

```function adicionar () {```

```    let nomeAmigo = document.getElementById('nome-amigo');```

```   let lista = document.getElementById('lista-amigos');```

```    amigos.push(nomeAmigo.value);```

```    if (lista.textContent == '') {```

```        lista.textContent = nomeAmigo.value;```

```    } else {```

```        lista.textContent += ', ' + nomeAmigo.value;```

```    }```

```    nomeAmigo.value = '';```

```}```


**🧠 Explicação:**

1. O nome digitado é capturado e adicionado ao array amigos.

2. A lista exibida na tela é atualizada com o novo nome, separado por vírgulas.

3. O campo de input é limpo após cada adição.

<h3 align="center"> 📘 Segunda Aula: Embaralhando os Nomes. </h3>

**📌 Objetivo: Criar uma função para embaralhar aleatoriamente os nomes no array.**

**💻 Código:**

```function embaralha(lista) {```

```    for (let indice = lista.length; indice; indice--) {```

```        const indiceAleatorio = Math.floor(Math.random() * indice);```

```        [lista[indice - 1], lista[indiceAleatorio]] =```

```            [lista[indiceAleatorio], lista[indice - 1]];```

```    }```

```}```

**🧠 Explicação:**

1. A função embaralha() aplica o algoritmo de Fisher-Yates para garantir um embaralhamento justo.

2. Utiliza destructuring assignment para trocar posições entre os elementos do array.

3. Garante que a ordem dos nomes seja totalmente aleatória.

<h3 align="center"> 📘 Terceira Aula: Realizando o Sorteio </h3>

**📌 Objetivo: Sortear os pares de amigo secreto e exibir o resultado.**

**💻 Código:**

```function sortear() {```

```    embaralha(amigos);```

```    let listaSorteio = document.getElementById('lista-sorteio');```

```    for (let i = 0; i < amigos.length; i++) {```

```        if (i == amigos.length - 1) {```

```            listaSorteio.innerHTML += amigos[i] + ' ---> ' + amigos[0] + '<br>';```

```        } else {```

```            listaSorteio.innerHTML += amigos[i] + ' ---> ' + amigos[i + 1] + '<br>';```

```        }```

```    }```

```}```

**🧠 Explicação:**

1. A lista de nomes é embaralhada antes do sorteio;

2. Cada pessoa sorteia a próxima da lista;

3. O último da lista sorteia o primeiro, formando um ciclo;

4. Os pares são exibidos no elemento HTML com ID lista-sorteio.

<h3 align="center"> 📘 Quarta Aula: Reiniciando o Sorteio. </h3>

**📌 Objetivo: Permitir que o usuário possa reiniciar o sorteio e limpar todos os dados.**

**💻 Código:**

```function reiniciar () {```

```    amigos = [];```

```    document.getElementById('lista-amigos').innerHTML = '';```

```    document.getElementById('lista-sorteio').innerHTML = '';```

```}```

**🧠 Explicação:**

1. O array amigos é esvaziado;

2. As áreas da tela que exibem a lista de amigos e os resultados do sorteio são limpas;

3. Permite um novo sorteio do zero.

<h3 align="center"> 🧼 Desafio: Validações e Botão de Limpeza. </h3>

**📌 Objetivo: Adicionar melhorias à usabilidade do projeto:**

1. Impedir que nomes vazios ou repetidos sejam inseridos.

2. Adicionar um botão para limpar apenas o campo de entrada, sem afetar a lista de amigos ou o sorteio.

**💻 Código:**

```function adicionar () {```

```    let nomeAmigo = document.getElementById('nome-amigo');```

```    let lista = document.getElementById('lista-amigos');```

```    let nome = nomeAmigo.value.trim();```

```    // Validação: impede nome vazio ou repetido```

```    if (nome === '') {```

```        alert('Digite um nome válido!');```

```        return;```

```    }```

```    if (amigos.includes(nome)) {```

```        alert('Este nome já foi adicionado!');```

```        return;```

```    }```

```    amigos.push(nome);```

```    if (lista.textContent === '') {```

```        lista.textContent = nome;```

```    } else {```

```        lista.textContent += ', ' + nome;```

```    }```

```    nomeAmigo.value = '';```

```}```

```function limparCampo() {```

```    document.getElementById('nome-amigo').value = '';```

```}```

**🧠 Explicação:**

1. A função adicionar() agora verifica se o nome está em branco ou já existe no array amigos antes de adicionar;

2. A função limparCampo() limpa apenas o campo de input de nome, sem afetar a lista ou os resultados do sorteio.

**🔘 Botões no HTML:**

```<input type="text" id="nome-amigo" placeholder="Digite o nome do amigo">```

```<button onclick="adicionar()">Adicionar</button>```

```<button onclick="limparCampo()">Limpar Campo</button>```

```<button onclick="sortear()">Sortear</button>```

```<button onclick="reiniciar()">Reiniciar</button>```

**🧠 Limite maximo de nomes adicionado:**

```if (amigos.length >= 8) {```
```    alert('Limite de 8 participantes atingido!');```
```    return;```
```}```

* Essa verificação é feita para garantir que nunca ultrapasse 8 nomes.
