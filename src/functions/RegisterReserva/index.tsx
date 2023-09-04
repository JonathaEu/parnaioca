import api from '@/services/api'

export default function RegisterReserva({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/reserva', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}