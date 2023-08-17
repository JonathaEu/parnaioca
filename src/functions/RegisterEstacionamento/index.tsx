import api from '@/services/api'

export default function RegistraEstacionamento({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/estacionamento', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}