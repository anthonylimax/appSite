import styled from "styled-components"

export const Header = styled.div`
    background-color: #EBEBEB;
    width: 100%;
    gap: 20vw;
    display: flex;
    position: fixed;
    z-index: 13;
    height: 100px;
    align-items: center;
    justify-content:center;
    padding: 0px 50px 0 50px;
`
export const Lupa = styled.img`
    position: relative;
`
export const Input = styled.input`
    position: absolute;
    outline: none;
    border: none;
    top: 5px;
    font-size: 16px;
    left: 26px;
    background-color: transparent;
    min-width: 100px;
    width: 100%;
    text-align: center;
    border-bottom: 2px solid black;
`
export const ListItems = styled.div`
    display: flex;
    align-items: center;
    gap: 5vw;
    @media (max-width: 900px){
        display: none;
    }
`
export const MainScreen = styled.main`  
        height: 80vh;   
        position: relative;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content:  center;
        .logo{
            width: 40%;
            @media (max-width: 900px){
                display: none;
            }
        }
    ::before{
        content: url(${(props) => props.imgUrl});
        width: 400px;
        height: 400px;
        bottom: 33px;
        right: 212px;
        z-index: -10;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
    }
`
export const Icon = styled.img`
    aspect-ratio: 4/4;
    width: 3vw;
    min-width: 50px;
`
export const ArrowLayer = styled.div`
    z-index: 1;
    background-color: #ebebeb11;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    right: ${props => props.right};
    left: ${props => props.left};
    transform: rotate(${props => props.rotate});    
    width: 15%;
    img{
        cursor: pointer;
    transition: 1s;
    opacity: ${props => props.transparence ? 0.1 : 1};
    }
    height: 478px;
    transition: 1s;
    background-color: #F6F6F6;
`
export const IconScop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s linear;
    span{
        font-weight: 700;
    }
    :hover{
        transform: scale(1.06);
    }
`
export const Span = styled.span`
    font-size: 25px;
    font-weight: 800;
    color: black;
`

export const SpanPromo = styled.span`
    font-size: 20px;
    margin-top: auto;
    color: red;
    justify-self: flex-end;
    font-weight: 700;
    text-decoration: line-through;
`
export const MainPromo = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    position: relative;
    background-color: #F6F6F6;
    justify-content: center;
    flex-direction: column;
    ::after{
        content: 'CONFIRA NOSSAS OFERTAS';
        font-weight: 900;
        font-size: 30px;
        width: 25%;
        z-index: 12;
        position: absolute;
        top: 20px;
        text-align: center;
        right: 39.5%;
    }
`
export const Promos = styled.div`
    transition: 1s;
    overflow: hidden;
    margin-left: ${props => props.left};
    color: black;   
    display: flex;
    z-index:0;
    position: relative;
    gap:  5vw;
`
export const LoginInput = styled.input`
    width: 50%;
    border: none;
    outline: none;
    font-size: 20px;
    padding: 10px;
    text-align: center;
    transition: 1s;
    transform-origin: center;
    border-bottom: 1px solid #d6d6d6 ;
    :focus{
        border-color: black;
    }
`
export const InputSection = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    span{
        transition: 0.5s;
        font-weight: 300;
        font-size: 20px;
        top: 10px;  
        left: ${props => props.left + "%"};
        position: absolute
    }
    .spanFocus{
        color: gray;
        font-size: 18px;
        top: -5px;
        left: 25%;
        position: absolute
    }
`
export const LoginLabel = styled.div`
    transition: 1s;
    gap: 25px;
    img{
        margin-bottom: -60px;
    }
    justify-content: center;
    width: 35vw;
    height: 70vh;
    z-index: 13;
    top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    left: 32.5vw;
    border: 1px solid black;
    position: fixed;
    border-radius: 20px;
     button{
        border: none;
        font-size: 30px;
        font-weight: 700;
        width: 50%;
        padding: 10px;
        color: #292929;
        border-radius: 5px;
        transition: 1s;
        :hover{
            transform: scale(1.03);
        }
     }
`
export const PromoScop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s;

    :hover{
            transform:scale(1.02);
        }
    img{
        width: 20vw;
        height: 20vw;
        transition: 0.4s;
        @media (max-width: 800px){
            width: 30vw;
            height: 30vw;
        }
    }
`
export const List = styled.div`
    position: absolute;
    top: 190px;
    left: 60px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-self: center;
    
    ::before{
        content: '';
        background-color: #000000;
        width: 400px;
        height: 2px;
        top: 200px;
        left: -100px;
        position: absolute;
        transform: rotate(90deg);
    }
`