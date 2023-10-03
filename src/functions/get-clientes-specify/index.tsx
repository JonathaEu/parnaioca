import api from '@/services/api'

export default function BuscarClienteEspecifico(data: any) {
    console.log(data);
    const id = data;
    return new Promise((resolve, reject) => {

        api.get(`/cliente/${id}`)
            .then((sucess) => {
                resolve(sucess.data);
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    })
}