function pesquisar() {
    // Esta função é acionada quando o botão "Pesquisar" é clicado.

   

    // Obtém a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Verifica se a seção foi encontrada.

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // auxiliado pelo Gemini. Caso aperte somente espaço ou em branco
    if (campoPesquisa.trim() === "") {
        section.innerHTML = "<p>Mama mia! Você precisa digitar algo!</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase();
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo ="";
    let descricao = "";

    // Itera sobre cada jogo no array de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        data = dado.data.toLowerCase();
        tags = dado.tags.toLowerCase();
    //se titulo incluir palavra algo acontece
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || data.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
        // Cria uma string com a estrutura HTML para cada jogo.
        resultados += `
        <div class="item-resultado">
            <h2><a href=${dado.link} target="_blank">
                ${dado.titulo}
            </a></h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <p class="descricao-meta">
                ${dado.data}
            </p>
            <p>
            <a href=${dado.link} target="_blank"> Mais informações </a></p>
        </div>
    
        `
        };
    }

    if (!resultados) {
        resultados = "<p>Oh não! Tente de novo, pois nada foi encontrado!</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
}