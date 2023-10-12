import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AppButton from '../../components/Add-button'

const OrderPage = () => {
  return (
    <>
    <h1>Спасибо за покупки!</h1>
    <Link to='/'>
    <AppButton sx={{color:'#fff'}}>На Главную</AppButton>
    </Link>
    </>
  )
}

export default OrderPage