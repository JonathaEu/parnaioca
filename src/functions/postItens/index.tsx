import api from '@/services/api'

export default function cadastraItens({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/itens', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}