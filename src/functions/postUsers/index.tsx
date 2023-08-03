import api from '@/services/api'

export default function Signin({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/login', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}