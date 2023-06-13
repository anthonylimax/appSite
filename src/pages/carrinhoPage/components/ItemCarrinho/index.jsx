import {ComponentKart, Buy} from './../../../../components/styles'
import xbox from './../../../../assets/pictures/promo3.png'
import { useState } from 'react'
export default function ItemCarrinho({account}){

  return(
        
    <div className="carrinhoContainer">
        <div className='carrinho'>
          <ComponentKart green>
            <span></span>
            <span>NAME</span>
            <span>AMOUNT</span>
            <span>PRICE</span>
            
          </ComponentKart>
           {
              account.carrinho.map((element , key)=>{
                
                return(
                  <ComponentKart>
                  <img src={`./${element.picture}`} width={120} alt="" />
                    <span key={key}>
                      {element.nomeItem.toUpperCase() }
                    </span>
                    <span>
                        {element.numberOfItens}
                    </span>
                    <span>R$ {element.price}</span>
                  </ComponentKart>
                )
              })
            }
        <Buy>

          <span><strong>PAY {account.total}</strong></span>
        </Buy>
        </div>
        </div>
    )


  }