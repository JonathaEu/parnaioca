import api from '@/services/api'

export default function BuscarCliente() {
    return new Promise((resolve, reject) => {
        
        api.get('/cliente')
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