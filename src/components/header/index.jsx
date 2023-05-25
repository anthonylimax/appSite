
import logo from '../../assets/pictures/logo.png'
import lupa from '../../assets/pictures/lupa.png'
import profile from '../../assets/pictures/profile.png'
import cart from '../../assets/pictures/carrinho.png'
import { Header, Input, Lupa, ListItems } from '../styles'
function Head() {

  return (
    <>
      <Header>
        <img src={logo} />
        <div style={{position: 'relative', marginTop: 20}}>
          <Lupa src={lupa}/>
          <Input type="text" placeholder="SEARCH" />
        </div>
        <ListItems>
          <img src={profile} />
          <img src={cart}/>
        </ListItems>
      </Header>
    </>
  )
}
export default Head