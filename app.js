function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";

    if (!campoPesquisa || campoPesquisa == " "){
        section.innerHTML = "<p>Digite o campo de pesquisa.</p>";
        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase();
    console.log(typeof sinopse)

    // Itera sobre cada anime na lista de animes populares
    for (let dado of animesPopulares) {        
        titulo = dado.titulo.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();
        tags = dado.genero.toLowerCase();

        // Se titulo includes campoPesquisa, então faça..
        if(titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento de resultado para o anime atual
            resultados += `
                <div class="item-resultado">
                    <h2> 
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">Sobre o anime: ${dado.sinopse}.</p>
                    <p class="descricao-meta">Gênero: ${dado.genero}.</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        };
    };

    //Se não encontrou o nome buscado
    if (!resultados){
        resultados = "<p>Nada foi encontrado.</p>"
    }

    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
};

function limpar(){
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa");
    //Limpa a seção de todos os resultados
    section.innerHTML = "";
    //Limpa campo de pesquisa
    campoPesquisa.value = ""
    //console.log("limpar")
}