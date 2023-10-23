import api from '@/services/api'

export default function CadastraPagamento({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/pagamento', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    })
}