import api from '@/services/api'

export default function getPorcentagem() {
    return new Promise((resolve, reject) => {

        api.get('/quarto-mais-frequente')
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