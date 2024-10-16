document.querySelectorAll('.dice-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const sides = parseInt(button.id.slice(1)); // Extrai o número do ID do botão
        const result = Math.floor(Math.random() * sides) + 1; // Gera um número aleatório
        document.getElementById('output').innerText = result; // Atualiza o resultado na tela
    });
});
