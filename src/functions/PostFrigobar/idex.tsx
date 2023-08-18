import api from '@/services/api'

export default function RegistraFrigobar({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/frigobar', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}