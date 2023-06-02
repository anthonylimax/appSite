import {useContext, useEffect, useState} from 'react'
import lupa from './../../assets/pictures/lupa.png'
import cart from './../../assets/pictures/carrinho.png'
import profile from './../../assets/pictures/profile.png'
import logo from './../../assets/pictures/logo.png'
import { AccountContext } from '../../../context/AccountContext'
import Head from '../../components/header'
import { Header, Lupa, Input, ListItems } from '../../components/styles'
import axios from 'axios';
import ItemCarrinho from './components/ItemCarrinho';

   

const server = axios.create({
  baseURL: "https://localhost:9000"
});
export default function Carrinho(){
    
    const {accountLogged, setAccountLogged} = useContext(AccountContext)

    return(
    <>    
      <Head/>
      <ItemCarrinho account={accountLogged}/>
    </>
    )
}