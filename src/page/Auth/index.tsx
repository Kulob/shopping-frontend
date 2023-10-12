import { Box } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { AppErrors } from "../../common/errors";
import { loginUser, registerUser } from "../../store/slice/auth";
import './auth.scss'

const AuthPage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(
    //   location.pathname === "/login" ? LoginSchema : RegisterSchema
    // ),
    mode: 'onChange'
  });
  const loading = useAppSelector(state => state.auth.isLoading)

  
  const handleSubmitForm = async (data: any) => {
    if (location.pathname === "/login") {
      try {
        await dispatch(loginUser(data));
        navigate("/");
      } catch (e) {
        return e;
      }
    } else {
        try {
          await dispatch(registerUser(data));
          navigate("/");
        } catch (e) {
          console.log(e);
          return e;
        }
      
    }
  };
  return (
    <div className="auth">
      <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          maxWidth={540}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={"-3px -2px 20px 1px #ccc"}
        >
          {location.pathname === "/login" ? (
            <LoginPage register={register} errors={errors} loading={loading} />
          ) : location.pathname === "/register" ? (
            <RegisterPage register={register} errors={errors} loading={loading} />
          ) : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthPage;
