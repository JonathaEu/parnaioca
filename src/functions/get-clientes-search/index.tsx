import api from '@/services/api'

export default function BuscarClienteSearch() {
    return new Promise((resolve, reject) => {

        api.get(`/cliente-list`)
            .then((sucess) => {
                resolve(sucess.data);
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    })
}