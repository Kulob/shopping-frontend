import { Button, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { IPropsLogin } from "../../../common/types/auth";
import AppLoadingButton from "../../../components/Loading-button";

const LoginPage: React.FC<IPropsLogin> = ({
  register,
  errors,
  loading
}: IPropsLogin): JSX.Element => {


  return (
    <>
      <Typography variant="h2" textAlign={"center"}>
        Авторизация
      </Typography>
      <Typography variant="body1" textAlign={"center"}>
        Введите ваш логин и пароль
      </Typography>
      <TextField
        error={!!errors.email}
        type="email"
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш email"
        helperText={errors.email ? `${errors.email.message}` : ""}
        {...register("email")}
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
        {...register("password")}
      />
      <AppLoadingButton loading={loading} type="submit" variant="contained" sx={{ width: "60%" }}>
        Войти
      </AppLoadingButton>
      <Typography variant="body1" marginTop={2}>
        У вас нет аккаунта?{" "}
        <Link to="/register" className="incitingText">
          Регистрация
        </Link>
      </Typography>
    </>
  );
};

export default LoginPage;
