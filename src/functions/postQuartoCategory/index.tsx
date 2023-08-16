import api from '@/services/api'

export default function cadastraTipoQuarto({ data }: any) {

    return new Promise((resolve, reject) => {

        api.post('/tipo_quarto', data)
            .then((sucess) => {
                resolve(sucess);
            })
            .catch((err) => {
                reject(err)
            })
    }
    )
}