import api from '@/services/api'

export default function getAuthenticatedUser() {
    return new Promise((resolve, reject) => {

        api.get('/me')
            .then((sucess) => {
                resolve(sucess)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    }
    )
}