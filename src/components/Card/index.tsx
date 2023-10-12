
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import "./card.scss";
import AppButton from "../Add-button";
import { useQuery } from "react-query";
import { ICardData } from "../../common/types/card";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { CartItems, addItem, selectCartItemsId, selectHeader } from "../../store/slice/product";


type cartItemProps = {
  id: number;
  title: String;
  price: number;
  image: any;
  count: number;
  description: String,
  category: String
};
const CardItems:FC<cartItemProps> = ({id, title, price, description,category, image, count}) => {
  const dispatch = useAppDispatch()
  const cartItem =useAppSelector(selectCartItemsId(id))

  const addedCount = cartItem ? cartItem.count : 0

  const onClickAdd = () => {
    const item: CartItems = {
      id ,
      title ,
      price,
      image ,
      count,
    };
    dispatch(addItem(item))
  }
  
  return (
    <div className="card">
              <div className="card_item" key={id}>
                <Link to={`/products/${id}`}>
                <p className="card_category">{category}</p>
                <img src={image} height={200} width={200} />
                <h4>{title}</h4>
              </Link>
                <p className="card_desc">{description}</p>
                <div className="card_price">
                  <span>{price} $</span>
                </div>
                <AppButton sx={{ color: "#fff" }} onClick={onClickAdd}>Add to Basket
                {addedCount> 0 && <i>{addedCount}</i>}
                </AppButton>
              </div>
    </div>
  );
};

export default CardItems;
