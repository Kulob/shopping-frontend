import * as yup from 'yup'
import {AppErrors} from "../../common/errors";

export const LoginSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField)
})

export const RegisterSchema = yup.object().shape({
    email: yup.string()
        .email(AppErrors.InvalidEmail)
        .required(AppErrors.RequiredField),
    password: yup.string()
        .min(8, AppErrors.minLength)
        .required(AppErrors.RequiredField),
    username: yup.string().required(AppErrors.RequiredField)
})
