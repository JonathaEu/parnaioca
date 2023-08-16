import api from '@/services/api'

export default function cadastraQuarto({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/quarto', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}