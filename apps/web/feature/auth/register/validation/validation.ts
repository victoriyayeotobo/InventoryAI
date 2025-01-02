import * as yup from "yup"


const RegisterValidationSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default RegisterValidationSchema