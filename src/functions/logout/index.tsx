// import { useStateContext } from '@/context/AuthProvider';
import api from '@/services/api'
import { getTokenLocal } from '../get-token'

export default function logout() {
    // const { token } = useStateContext();
    return new Promise(async (resolve, reject) => {
        getTokenLocal().then((response) => {
            console.log(response)
            const config = {
                headers: {
                    "Authorization": `Bearer ${response}`,
                    "content-type": "application/json",
                },

            }
            api.post('/logout', config)
                .then((response) => {
                    localStorage.clear();
                    window.location.href = '/app/funcionario/login'
                    // console.log(response);
                    resolve(response);

                })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
        })
    })
}