import * as yup from "yup"


const LoginValidationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default LoginValidationSchema