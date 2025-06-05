# 🎁 Projeto: Amigo Secreto com JavaScript

Este projeto simula um **sorteio de amigo secreto**, onde usuários podem adicionar participantes, sortear pares aleatórios e visualizar os resultados na tela com validações e reinicialização do sorteio.

---

## 📋 Objetivos Principais

- ✅ Adicionar nomes dinamicamente.
- ✅ Visualizar lista de amigos.
- ✅ Realizar sorteio aleatório e justo.
- ✅ Exibir resultados na tela.
- ✅ Reiniciar sorteio.
- ✅ Impedir entradas inválidas ou duplicadas.
- ✅ Limpar apenas o campo de input.

---

## 🧩 Funcionalidades Implementadas

- 🔹 Lista dinâmica com `push`.
- 🔹 Sorteio justo com algoritmo de **Fisher-Yates**.
- 🔹 Ciclo completo (último sorteia o primeiro).
- 🔹 Exibição clara dos pares.
- 🔹 Botões interativos.
- 🔹 Validação de nomes em branco e duplicados.
- 🔹 Limite de até 8 participantes.

---

## 📚 Aulas e Etapas do Desenvolvimento

### 📘 Primeira Aula: Adicionando Participantes

```js
function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);

    if (lista.textContent == '') {
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent += ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}
```

🧠 **Explicação:**
- Captura o nome do input e adiciona ao array `amigos`.
- Atualiza a lista na tela separando os nomes por vírgula.
- Limpa o campo de input após cada adição.

---

### 📘 Segunda Aula: Embaralhando os Nomes

```js
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice - 1]];
    }
}
```

🧠 **Explicação:**
- Implementa o algoritmo de **Fisher-Yates**, garantindo aleatoriedade real.
- Troca os elementos de lugar com `destructuring`.

---

### 📘 Terceira Aula: Realizando o Sorteio

```js
function sortear() {
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML += amigos[i] + ' ---> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + ' ---> ' + amigos[i + 1] + '<br>';
        }
    }
}
```

🧠 **Explicação:**
- Embaralha os nomes e cria pares circulares.
- O último sorteia o primeiro, formando um ciclo.
- Os pares são exibidos no elemento `lista-sorteio`.

---

### 📘 Quarta Aula: Reiniciando o Sorteio

```js
function reiniciar () {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
```

🧠 **Explicação:**
- Zera o array de amigos.
- Limpa as seções da lista e do sorteio na tela.
- Permite reiniciar um novo sorteio do zero.

---

### 🧼 Desafio: Validações e Limpeza

```js
function adicionar () {
    let nomeAmigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    let nome = nomeAmigo.value.trim();

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    if (amigos.length >= 8) {
        alert('Limite de 8 participantes atingido!');
        return;
    }

    amigos.push(nome);

    if (lista.textContent === '') {
        lista.textContent = nome;
    } else {
        lista.textContent += ', ' + nome;
    }

    nomeAmigo.value = '';
}
```

```js
function limparCampo() {
    document.getElementById('nome-amigo').value = '';
}
```

🧠 **Explicação:**
- Impede nomes em branco, duplicados ou acima do limite de 8.
- `limparCampo()` limpa apenas o input, sem afetar a lista ou o sorteio.

---

## 🔘 Botões HTML

```html
<input type="text" id="nome-amigo" placeholder="Digite o nome do amigo">
<button onclick="adicionar()">Adicionar</button>
<button onclick="limparCampo()">Limpar Campo</button>
<button onclick="sortear()">Sortear</button>
<button onclick="reiniciar()">Reiniciar</button>
```

---

## 🏁 Conclusão

- ✅ Como trabalhar com listas de forma dinâmica;
- ✅ Aplicar embaralhamento com lógica justa;
- ✅ Criar um sorteio circular e imparcial;
- ✅ Validar dados de entrada;
- ✅ Manipular a interface com JavaScript.
