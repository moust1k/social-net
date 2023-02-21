import * as Yup from "yup";


export const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        //минимальная длина - 2 символа
        .min(10, "Must be longer than 10 characters")
        //максимальная длина - 20 символов
        .max(50, "Nice try, nobody has a first name that long")
        .required("Required"),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Введите пароль")
});

export const postFormSchema = Yup.object().shape({
    text: Yup.string()
        .min(2, 'Must be longer than 2 characters')
})