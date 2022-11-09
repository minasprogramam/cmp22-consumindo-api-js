const container = document.getElementById('demo')

async function buscarCartas() {
  try {
    const resposta = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    const json = await resposta.json()
    const cartas = json.data
    const nossasCartas = cartas.slice(600, 605)
    nossasCartas.map((carta) => {
      return container.innerHTML += `
        <div class="card">
          <img class='image' src=${carta.card_images[0].image_url}>
          <h1 class='title'>${carta.name}</h1>
          <p class='type'>${carta.type}</p>
          <p class='description'>${carta.desc}</p>
        </div>
      `
    })
  }
  catch(erro) {
    console.error('Capturei um erro: ', erro)
  }
}

buscarCartas()
