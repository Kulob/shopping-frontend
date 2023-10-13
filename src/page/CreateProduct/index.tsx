import React, { useState } from "react";
import AppButton from "../../components/Add-button";
import { useNavigate } from "react-router-dom";
import "./createproduct.scss";
import { TextField } from "@mui/material";
import axios from "axios";
import { useAppDispatch } from "../../utils/hooks";
import { ICardData, IProductData } from "../../common/types/card";

async function createProduct(data: any) {
  return axios.post("https://fakestoreapi.com/products", data);
}

const CreateProduct = () => {
  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      navigate("/");
    } catch (error) {
      console.warn(error, "submitHandler in AddPostPage");
    }
  };
  
  return (
    <>
      <AppButton onClick={() => navigate(-1)} sx={{ color: "#fff" }}>
        Назад
      </AppButton>
      <div className="create_product">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h1 className="title">Создать продукт</h1>
          <TextField
            name="title"
            fullWidth={true}
            margin="normal"
            label="Название продукт"
            variant="outlined"
            // error={errors && errors.name && errors.name.message}
            // onChange={(e) => setName(e.target.value)}
          />
          <TextField
            name="price"
            placeholder="Цена"
            fullWidth={true}
            margin="normal"
            label="Цена"
            variant="outlined"
            // error={errors && errors.price && errors.price.message}
            // onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            name="description"
            placeholder="Описание"
            fullWidth={true}
            margin="normal"
            label="Описание"
            variant="outlined"
            //  error={errors && errors.description && errors.description.message}
            // onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            name="category"
            placeholder="Категория"
            fullWidth={true}
            margin="normal"
            label="Категория"
            variant="outlined"
            //  error={errors && errors.description && errors.description.message}
            // onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            name="planeImage"
            type="file"
            placeholder="Название самолёта"
            fullWidth={true}
            margin="normal"
            //  error={errors && errors.planeImage && errors.planeImage.message}
            //   onChange={(e) => setPlaneImage(e.target.files[0])}
          />
          <AppButton
            className="buttonContainer"
            sx={{ color: "#fff" }}
            onClick={submitHandler}
          >
            Создать
          </AppButton>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
