function pesquisar(){

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campo-pesquisa").value // Camel Case
if (!campoPesquisa){
  section.innerHTML = '<p class="item-resultado">Busca vazia</p>'
  return
}

campoPesquisa = campoPesquisa.toLowerCase()
console.log(dados)
let resultados = "";
let titulo = "";
let tags = "";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  tags = dado.tags.toLowerCase()
  

  if(dado.titulo.includes(campoPesquisa) || dado.tags.includes(campoPesquisa) || dado.requisitos.some(req => req.includes(campoPesquisa))){
  resultados += `
    <div class="item-resultado">
      <h2>${dado.titulo}                    
      
</h2>
<p class="descricao-meta">${dado.descricao}</p>
      <p class="descricao-meta">
       
      <ul>
          ${dado.requisitos.slice(0).map(req => `<li><strong>${req}</strong></li>`).join('')}
          </ul>
        </ul>
      </p>
      <a href="${dado.link}" target="_blank">Participe da live</a>
            <a href=${dado.curriculo} target="_blank" class="logo">
            Envie seu currículo

</a>
    </div>
  `;}
 
}


if (!resultados){
resultados = '<p class="item-resultado">Nada foi encontrado</p>'
}

section.innerHTML = resultados
}