import api from '@/services/api'

export default function getFrigobar() {
    return new Promise((resolve, reject) => {

        api.get('/frigobar_quarto')
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