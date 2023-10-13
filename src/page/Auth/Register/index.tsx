import React, { FC } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { IPropsRegister, IRegisterData } from "../../../common/types/auth";
import AppLoadingButton from "../../../components/Loading-button";
const RegisterPage: FC<IPropsRegister> = (
  props: IPropsRegister
): JSX.Element => {
  const { loading, register, errors } = props;
  return (
    <>
      <Typography variant="h2" textAlign={"center"}>
        Регистрация
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Введите ваш логин и пароль
      </Typography>
        <TextField
          error={!!errors.username}
          fullWidth={true}
          margin="normal"
          label="Username"
          variant="outlined"
          placeholder="Введите ваш username"
          helperText={errors.username ? `${errors.username.message}` : ""}
          {...register("username")}
        />
        <TextField
          error={!!errors.email}
          fullWidth={true}
          margin="normal"
          label="Email"
          variant="outlined"
          placeholder="Введите ваш email"
          helperText={errors.email ? `${errors.email.message}` : ""}
          {...register("email", {
            required: "Введите корректный email"
          })}
        />
        <TextField
          error={!!errors.password}
          type="password"
          fullWidth={true}
          margin="normal"
          label="Password"
          variant="outlined"
          placeholder="Введите ваш пароль"
          helperText={errors.password ? `${errors.password.message}` : ""}
          {...register("password",{
            required:'Минимальная длина 8 символов'
          })}
        />

        <AppLoadingButton
          type="submit"
          loading={loading}
          variant="contained"
          sx={{ width: "60%" }}
          // onClick={handleSubmit(handleRegister)}
        >
          Войти
        </AppLoadingButton>
      <Typography variant="body1" marginTop={2}>
        У вас есть аккаунта?
        <Link to="/login" className="incitingText">
          Авторизация
        </Link>
      </Typography>
    </>
  );
};

export default RegisterPage;
