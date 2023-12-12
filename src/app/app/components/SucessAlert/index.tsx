import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'


const Alert = withReactContent(Swal);

export default function SucessAlert(response: any) {
    Alert.fire({
        toast: true,
        position: 'top-right',
        timer: 6000,
        title: response.data.mensagem,
        timerProgressBar: true,
        color: 'white',
        background: '#57DE82',
        showConfirmButton: false,
        icon: 'success',
        iconColor: '#FFFF'
    })
}