import api from '@/services/api'

export default function postReceitaAnoAtual() {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let anoAtualJson = {
        "ano": anoAtual
    }
    return new Promise((resolve, reject) => {
        api.post('/receita-anual', anoAtualJson)
            .then((sucess) => {
                resolve(sucess.data)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}