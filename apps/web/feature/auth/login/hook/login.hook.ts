import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import type { LoginUser } from "../types/loginUser.type";
import LoginValidationSchema from "../validation/validation";
import Axios from "@/lib/axios";
import { toast } from "@workspace/ui/hooks/use-toast";

const useLogin = function () {
    const { isPending, mutate } = useMutation({
        mutationKey: ["login-user"],
        mutationFn: async ({ email, password }: LoginUser) => {
            const data = await Axios.post("/auth/login", { email, password })
            return data
        }
    })

    const formik = useFormik<LoginUser>({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginValidationSchema,
        onSubmit: ({ email, password }) => {
            mutate({ email, password }, {
                onSuccess(res) {
                    console.log(res)
                },
                onError(err) {
                    toast({
                        title: "Login Request",
                        description: "Login failed, please try again!",
                        variant: "destructive"
                    })
                    console.log(err)
                }
            })
        }
    })

    return { isPending, ...formik }
}

export default useLogin