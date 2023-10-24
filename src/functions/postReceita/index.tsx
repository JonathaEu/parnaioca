import api from '@/services/api'

export default function postReceita(ano: any) {
    return new Promise((resolve, reject) => {
        api.post('/receita-anual', ano)
            .then((sucess) => {
                resolve(sucess.data)
                console.log(ano)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}