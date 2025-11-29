function exibirEmpresas() {
    // 1. Selecionar o contêiner no HTML usando o ID
    const container = document.getElementById('container-empresas');
    
    // Inicializar uma string vazia para armazenar todo o HTML que será gerado
    let htmlConteudo = '';

    // 2. Iterar sobre o array 'empresas'
    dados.forEach(empresa => {
        // 3. Gerar o HTML para cada empresa
        // Aqui, criamos uma 'box' para a logo da empresa
        
        // Usamos template literals (crases `) para facilitar a concatenação de strings e variáveis.
        const empresaHTML = `
            <a href="${empresa.curriculo}" target="_blank" class="empresa-box">
                <img src="./logo/${empresa.logo}" alt="Logo da ${empresa.titulo}">
                <p>${empresa.titulo}</p>
            </a>
        `;
        
        // 4. Adicionar o HTML da empresa à string principal
        htmlConteudo += empresaHTML;
    });

    // 5. Inserir todo o HTML gerado dentro do contêiner
    container.innerHTML = htmlConteudo;
}

// 6. Chamar a função para executar a inserção
exibirEmpresas();