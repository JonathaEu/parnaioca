import api from '@/services/api'

export default function getItens() {
    return new Promise((resolve, reject) => {

        api.get('/itens')
            .then((sucess) => {
                resolve(sucess.data);
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    }
    )
}