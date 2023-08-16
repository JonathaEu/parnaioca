import api from '@/services/api'

export default function deletaCategoria(data: bigint) {

    return new Promise((resolve, reject) => {

        api.delete(`/tipo_quarto/${data}`)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}