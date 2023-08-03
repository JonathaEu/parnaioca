import api from '@/services/api'

export default function cadastraCliente({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/cliente', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}