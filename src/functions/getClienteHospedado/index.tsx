import api from '@/services/api'

export default function getClienteHospedado() {
    return new Promise((resolve, reject) => {

        api.get('/cliente-hospedado')
            .then((sucess) => {
                resolve(sucess.data)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    }
    )
}