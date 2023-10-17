import api from '@/services/api'

export default function getItensMaisSaidas() {
    return new Promise((resolve, reject) => {

        api.get('/item-mais-frequente')
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