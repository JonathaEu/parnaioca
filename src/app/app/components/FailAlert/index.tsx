import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'


const Alert = withReactContent(Swal);

export default function FailAlert(err: any) {
    const erros = err.response.data.errors;
    let textoErro = "";
    let textoErroServidor = err.response.data.mensagem;


    if (!textoErroServidor) {
        const valores = Object.keys(erros);
        valores.forEach(e => {
            textoErro += `<p> ${erros[e]} </p>`;
        });
    }

    textoErroServidor == 'Erro no servidor' ? textoErro = textoErroServidor : '';

    console.log(textoErroServidor);
    console.log(err.response.data.error.mensagem);

    Alert.fire({
        toast: true,
        position: 'top-right',
        timer: 6000,
        title: textoErro,
        timerProgressBar: true,
        color: 'white',
        background: '#E02319',
        showConfirmButton: false,
        icon: 'error',
        iconColor: '#FFFF',
        width: 420
    })
}
