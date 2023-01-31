import * as yup from 'yup';

export class validatorFormHelper {

    public static basicForm  = yup.object({
        firstName: yup.string()
        .max(20, "el nombre debe ser maximo de 20 caracteres")
        .min(2, "el nombre debe ser mínimo de 2 caracteres")
        .required("el nombre es requerido")
        .matches(/^(?=.{1,30}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/gm, "el formato del nombre no es valido"),
        email: yup.string()
        .email("ingrese un email valido")
        .max(50, "el email es demasiado largo")
        .min(15, "el email es demasiado corto")
        .required("el email es requerido"),
        lastName: yup.string()
        .max(20, "el nombre debe ser maximo de 20 caracteres")
        .min(2, "el nombre debe ser mínimo de 2 caracteres")
        .required("el nombre es requerido")
        .matches(/^(?=.{1,30}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/gm, "el formato del apellido no es valido"),
       
       
    })

}

 