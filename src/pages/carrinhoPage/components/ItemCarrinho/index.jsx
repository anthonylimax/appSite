export default function ItemCarrinho({account}){
    return(
        <>
        
         {
            account.carrinho.map((element , key)=>{
              console.log(element)
              return(
                <div className="carrinhoContainer">
                    <div className="headerCarrinho"></div>
                <span key={key}>
                  {element.nomeItem }
                </span>
                <span>
                    {element.numberOfItens}
                </span>
                <span>{element.price}</span>
                </div>
              )
            })
          }
            
        </>
    )
}