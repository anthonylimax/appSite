import styled from "styled-components"
export const Header = styled.div`
    background-color: #EBEBEB;
    width: 100%;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px 0 50px;
`
export const Lupa = styled.img`
    margin-left: -200px;
`
export const Input = styled.input`
    position: absolute;
    outline: none;
    border: none;
    top: 5px;
    font-size: 16px;
    left: -174px;
    background-color: transparent;
    width: 400px;
    text-align: center;
    border-bottom: 2px solid black;
`
export const ListItems = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`
export const MainScreen = styled.main`  
        height: 70vh;   
        position: relative;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content:  center;
    ::before{
        content: url(${(props)=>props.imgUrl});
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
    width: ${props => props.size};
    height:  ${props => props.secondSize};
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
    transition: 1s;
    opacity: ${props => props.transparence ? 0.1 : 1 };
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
    height: 478px;
    background-color: #F6F6F6;
    align-items: center;
`
export const Promos = styled.div`
    transition: 1s;
    overflow: hidden;
    margin-left: ${props => props.left};
    color: black;   
    display: flex;
    z-index:0;
    position: relative;
    gap: 60px;
` 
export const PromoScop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin: auto;
        width: ${props => props.A};
        height: ${props => props.B};
    }
`
export const List = styled.div`
    position: absolute;
    top: 100px;
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
        top: 220px;
        left: -100px;
        position: absolute;
        transform: rotate(90deg);
    }
`