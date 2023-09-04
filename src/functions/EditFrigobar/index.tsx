import api from '@/services/api'

export default function editFrigobar({ data }: any) {
    return new Promise((resolve, reject) => {
        const id = data.id
        console.log(data)
        api.put(`/frigobar/${id}`, data)
            .then((sucess) => {
                resolve(sucess.data);
                console.log(sucess)
            })
            .catch((err) => {
                console.log(err);
                reject(err)
            })
    }
    )
}