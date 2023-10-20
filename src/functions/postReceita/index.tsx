import api from '@/services/api'

export default function postReceita() {
    return new Promise((resolve, reject) => {

        api.get('')
            .then((sucess) => {
                resolve(sucess.data)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}