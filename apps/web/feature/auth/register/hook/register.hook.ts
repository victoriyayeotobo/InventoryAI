import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import type { registerUser } from "../types/registerUser.type";
import RegisterValidationSchema from "../validation/validation";
import Axios from "@/lib/axios";
import { toast } from "@workspace/ui/hooks/use-toast";

const useRegister = function () {
    const { isPending, mutate } = useMutation({
        mutationKey: ["register-user"],
        mutationFn: async ({firstName, lastName, email, password }: registerUser) => {
            const data = await Axios.post("/auth/register", { firstName, lastName, email, password })
            return data
        }
    })

    const formik = useFormik<registerUser>({
        initialValues: {
            firstName: "",
            lastName:"",
            email: "",
            password: ""
        },
        validationSchema: RegisterValidationSchema,
        onSubmit: ({ firstName, lastName, email, password }) => {
            mutate({firstName, lastName, email, password }, {
                onSuccess(res) {
                    console.log(res)
                },
                onError(err) {
                    toast({
                        title: "Register Request",
                        description: "Register failed, please try again!",
                        variant: "destructive"
                    })
                    console.log(err)
                }
            })
        }
    })

    return { isPending, ...formik }
}

export default useRegister