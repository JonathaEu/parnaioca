import api from '@/services/api'

export default function getQuartos() {
    return new Promise((resolve, reject) => {

        api.get('/quarto')
            .then((sucess) => {
                resolve(sucess.data);
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    }
    )
}