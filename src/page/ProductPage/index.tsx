import React, { FC, useEffect, useState } from "react";
import AppButton from "../../components/Add-button";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { ICardData } from "../../common/types/card";
import './product-page.scss'

const ProductPage: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<ICardData>();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://fakestoreapi.com/products/" + id
        );
        setProduct(data);
        console.log(data);
      } catch (error) {
        alert("ERROR");
      }
    }
    fetchProduct();
  }, []);

  if (!product) {
    return <h3>NO Product</h3>;
  }
  return (
    <div className="product">
      <div className='descContent'>
        <AppButton onClick={() => navigate(-1)} sx={{color: '#fff'}}>
          Назад
        </AppButton>
        <h1 className='title'>{product.title}</h1>
        <div className='price'>{product.price}$</div>
        <p className='desc'>{product.description}</p>
      </div>
      <div className='imageContent'>
        <img className='image' src={product.image} alt="" />
      </div>
    </div>
  );
};

export default ProductPage;
