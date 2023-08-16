import api from '@/services/api'

export default function getUser({ data }: any) {

    return new Promise((resolve, reject) => {

        api.get('/user', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}