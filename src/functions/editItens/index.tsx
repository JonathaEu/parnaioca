import api from '@/services/api'

export default function EditItens({ data }: any) {

    return new Promise((resolve, reject) => {
        // console.log(data)
        const id = data.id
        api.put(`/itens/${id}`, data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    })
}