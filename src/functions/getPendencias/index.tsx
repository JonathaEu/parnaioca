import api from '@/services/api'

export default function getPendencias(clientes_id: any) {
    return new Promise((resolve, reject) => {

        api.post('/pendencias', clientes_id)
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