import Swal from 'sweetalert2'

export const validarDatos = (values) => {

if (values.name.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor, ingrese un Nombre válido'
        })
        return false
    }

    if (values.lastname.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor, ingrese un Apellido válido'
        })
        return false
    }


    if(values.email) {
        if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
            values.email
            )
        ){
        Swal.fire({
            icon: 'error',
            title: 'Por favor, ingrese un email válido'
        })
        return false  
        }
    } 

    if (values.email.length < 7) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor, ingrese un Email válido'
        })
        return false
    }

    if (values.emailConfirm !== values.email) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor, revise los datos ingresados. Los emails no coinciden'
        })
        return false
    }

    return true
} 