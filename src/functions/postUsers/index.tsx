import React from 'react'
import api from '@/services/api'
// import axios from 'axios';


export default function Signin({ data }: any) {
    return new Promise((resolve, reject) => {

        api.post('/login', data)
            .then((sucess) => {
                resolve(sucess)
            })
            .catch((Azedou) => {
                reject(Azedou)
            })
    }
    )
    // return (
    //     <div>Signin</div>
    // )
}