
import logo from '../../assets/pictures/logo.png'
import lupa from '../../assets/pictures/lupa.png'
import logoGrande from '../../assets/pictures/logoGrande.png'
import profile from '../../assets/pictures/profile.png'
import cart from '../../assets/pictures/carrinho.png'
import { Header, Input, Lupa, ListItems, LoginLabel, LoginInput, InputSection } from '../styles'
import { useContext, useState } from 'react'
import { AccountContext} from '../../../context/AccountContext'
import { LoginIsCorrectly } from '../../QUERYS'
function Head() {
  const [popUp, setPopUp] = useState(false);
  const [focus, setFocus] = useState('')
  const [clicked, setClicked] = useState('')
  const [focusTwo, setFocusTwo] = useState('')
  const [form, setForm] = useState({emailClient: '', passwordClient: ''})
  return (
    <>
      <Header>
        <img src={logo} />
        <div style={{position: 'relative', marginTop: 20, width: "20vw"}} className='searchBar'>
          <Lupa src={lupa}/>
          <Input type="text" placeholder="SEARCH" />
        </div>
        <ListItems>
          <img src={profile} onClick={()=>setPopUp(!popUp)}/>
          <img src={cart}/>
        </ListItems>
      </Header>
        {
        popUp ? <div style={{width: '100%', height: '100vh', position: 'fixed', zIndex: 13,backgroundColor: '#eaeaea90'}}>
            {!clicked ? 
          <LoginLabel>
            <img src={logoGrande} width={300} alt="" />
          <InputSection left={45}>
              <span className={`${focusTwo}`}>email:</span>
              <LoginInput onChange={({target})=>{
                setForm({...form, emailClient: target.value})
              }} onBlur={(e)=>{
                if(e.target.value == ""){
                  setFocusTwo("");
                }
              }} onFocus={()=>{setFocusTwo("spanFocus")}}></LoginInput>
          </InputSection>
          <InputSection left={42.5}>
              <span className={`${focus}`}>password:</span>
              <LoginInput onBlur={(e)=>{
                if(e.target.value == ""){
                  setFocus("");
                }
              }} type="password" onChange={({target})=>{
                setForm({...form, passwordClient: target.value})
              }} onFocus={()=>{setFocus("spanFocus")}}></LoginInput>
          </InputSection>
          <button onClick={()=>{
          setClicked(true)
          if(LoginIsCorrectly(form)){
            setClicked(false);
          }
          }}>Entrar</button>
        </LoginLabel> : <LoginLabel><img className='anim' width={60} src='https://cdn-icons-png.flaticon.com/512/190/190420.png'></img></LoginLabel>}
        </div> : null}
    </>
  )
}

export default Head