document.querySelectorAll('.dice-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        const sides = parseInt(button.id.slice(1)); // Extrai o número do ID do botão
        const result = Math.floor(Math.random() * sides) + 1; // Gera um número aleatório
        const outputElement = document.getElementById('output');

        // Atualiza o resultado na tela
        outputElement.innerText = result; 

        // Verifica se o resultado é o máximo
        if (result === sides) {
            outputElement.classList.add('max-result');
        } else {
            outputElement.classList.remove('max-result'); // Remove a classe se não for crítico
        }
    });
});
