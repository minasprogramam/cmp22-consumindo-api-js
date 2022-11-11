// https://teste-api-lilit.herokuapp.com/

async function buscarIniciantes() {
  try {
    const resposta = await fetch("https://teste-api-lilit.herokuapp.com/beginers", 
                                {
                                  headers : {
                                    'Content-Type': 'application/json', // no GET sem body é opicional
                                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
                                  }
                                })
    const iniciantes = await resposta.json()
    console.log(iniciantes)
  }
  catch(err) {
    console.error('Capturei um erro: ', err)
  }
}

// buscarIniciantes()

async function buscarIniciantePeloId(id) {
  try {
    const resposta = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/${id}`, 
                                {
                                  headers : {
                                    'Content-Type': 'application/json', // no GET sem body é opicional
                                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
                                  }
                                })
    const iniciante = await resposta.json()
    console.log(iniciante)
  }
  catch(err) {
    console.error('Capturei um erro: ', err)
  }
}

// buscarIniciantePeloId('62a944bee682a40004799adf')
// buscarIniciantePeloId('63542663f8e5920004b005fb')

async function deletarPessoaIniciante(id) {
  try {
    const resposta = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/delete/${id}`, 
                                {
                                  method: 'DELETE',
                                  headers : {
                                    'Content-Type': 'application/json', // no DELETE sem body é opicional
                                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
                                  }
                                })
    const deletada = await resposta.json()
    console.log(deletada)
  }
  catch(err) {
    console.error('Capturei um erro: ', err)
  }
}

// deletarPessoaIniciante('62b7b52e816d6d00049f6f7f')

async function cadastrarPessoaIniciante(body) {
  try {
    const resposta = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/register`, 
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
                                  },
                                  body: JSON.stringify(body)
                                })
    const inicianteCriada = await resposta.json()
    console.log(inicianteCriada)
  }
  catch(err) {
    console.error('Capturei um erro: ', err)
  }
}

let pessoa = {
  "name": "Danynha Bond",
  "phone": "82999999999",
  "email": "bondinhadany@hackear.com",
  "linkedin": "https://linkedin.com/in/danybond",
  "github": "https://github.com/danybond",
  "city": "maceió",
  "state": "alagoas",
  "studyTime": 2,
  "stacksOfInterest": "Back-end",
  "priorKnowledge": [
    "Node",
    "Typescript",
    "Mongodb"
  ],
  "englishLevel": 2,
  "othersPrograms": "{reprograma}",
  "hasComputer": true,
  "internetAccess": true,
  "message": "Textinho bonitinho",
  "findUs": "Amiges"
}

// cadastrarPessoaIniciante(pessoa)

async function atualizarPessoaIniciante(id, body) {
  try {
    const resposta = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/update/${id}`, 
                                {
                                  method: 'PATCH',
                                  headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
                                  },
                                  body: JSON.stringify(body)
                                })
    const inicianteAtualizada = await resposta.json()
    console.log(inicianteAtualizada)
  }
  catch(err) {
    console.error('Capturei um erro: ', err)
  }
}

// atualizarPessoaIniciante('636d8a9e346a4600048ef4f4', {'email': 'bigbig@yahoo.com'})

async function buscarIniciantePorFiltro(chave, valor) {
  try {
    const resposta = await fetch(`https://teste-api-lilit.herokuapp.com/beginers/filter?${chave}=${valor}`, 
                                {
                                  headers : {
                                    'Content-Type': 'application/json', // no GET sem body é opicional
                                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkxpbGkiLCJleHAiOjE2NTcwMjcyNTcsImlhdCI6MTY1NzAyNzI1N30.664xQss602u1VBwlg3owah9nZOm5SP-_w_PJA06LZzA"
                                  }
                                })
    const iniciantesPorFiltro = await resposta.json()
    console.log(iniciantesPorFiltro)
  }
  catch(err) {
    console.error('Capturei um erro: ', err)
  }
}
  
buscarIniciantePorFiltro('city', 'maceió')
buscarIniciantePorFiltro('name', 'liniker')

// https://teste-api-lilit.herokuapp.com/beginers/filter?name=dany%20bond&city=recife&
