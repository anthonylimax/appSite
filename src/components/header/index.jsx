
import logo from '../../assets/pictures/logo.png'
import lupa from '../../assets/pictures/lupa.png'
import logoGrande from '../../assets/pictures/logoGrande.png'
import profile from '../../assets/pictures/profile.png'
import cart from '../../assets/pictures/carrinho.png'
import { Header, Input, Lupa, ListItems, LoginLabel, LoginInput, InputSection } from '../styles'
import { useContext, useState } from 'react'
import axios from "axios";
import { AccountContext} from '../../../context/AccountContext'
import { Link } from 'react-router-dom'
import { connection as j} from '../../QUERYS'
function Head({color}) {
  const connection = axios.create(j)

  const {setAccountLogged, accountLogged} = useContext(AccountContext)
  const [error, setError] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [focus, setFocus] = useState('')
  const [clicked, setClicked] = useState('')
  const [focusTwo, setFocusTwo] = useState('')
  const [form, setForm] = useState({emailClient: '', passwordClient: ''})
  return (
    <>
      <Header color={color}>

        <Link to="/"><img src={logo}/></Link>
        <div style={{position: 'relative', marginTop: 20, width: "20vw"}} className='searchBar'>
          <Lupa src={lupa}/>
          <Input type="text" placeholder="SEARCH" />
        </div>
        <ListItems><div style={{
          display: "flex",
          alignItems: "center",
          gap: 10
        }}>
          
            <img src={profile} onClick={() => {
              accountLogged.email != null ? null : setPopUp(true)
            }}/>
            <label htmlFor="">{accountLogged.nome}</label>
        </div>
        <Link to="/carrinho">
          <img src={cart} />
        </Link>
        </ListItems>
      </Header>
        {
        popUp ? <div style={{width: '100%', height: '100vh', position: 'fixed', zIndex: 13,backgroundColor: '#eaeaea90'}}>
            {!clicked ? 
          <LoginLabel>
            <img src={logoGrande} width={300} alt="" />
          <InputSection left={45} data-animation="smooth">
              <span className={`${focusTwo}`}>email:</span>
              <LoginInput onChange={({target})=>{
                setError(false);
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
                setError(false);
                console.log(form)
                setForm({...form, passwordClient: target.value})
              }} onFocus={()=>{setFocus("spanFocus")}}></LoginInput>
              
          </InputSection>
          <button onClick={async ()=>{
            
            setClicked(true)
          setTimeout(()=>{
            connection.post('/connect', form).then(response =>{
                  if(response.data != ""){
                    setClicked(false)
                    setPopUp(false)
                    setAccountLogged(response.data)
                    console.log(response.data)
                  }
                  else{
                    setClicked(false)
                    setError(true);
                  }
                })
          }, 2000)
          }}>Entrar</button>
          {
            error ? (<label>incorrect pass or email, check again</label>) : null 
          }
        </LoginLabel> : <LoginLabel><img className='anim' width={60} src='https://cdn-icons-png.flaticon.com/512/190/190420.png'></img></LoginLabel>}
        </div> : null}
    </>
  )
}

export default Head