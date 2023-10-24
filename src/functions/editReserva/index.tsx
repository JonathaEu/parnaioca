import api from '@/services/api'

export default function EditReserva({ data, id }: any) {

    return new Promise((resolve, reject) => {
        // console.log(data)
        // const id = data.id
        api.put(`/reserva/${id}`, data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    })
}