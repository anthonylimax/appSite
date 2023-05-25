import { Promos, PromoScop, Span, SpanPromo, ArrowLayer, MainPromo} from "../styles"
import scrollImage from '../../assets/pictures/scroll.png'
import one from './../../assets/pictures/promo1.png';
import two from './../../assets/pictures/promo2.png';
import three from './../../assets/pictures/promo3.png';
import { useState } from "react";

function Promo(){
    const [left, setLeft] = useState(300);
    return(
        <MainPromo>
         <ArrowLayer left="0px" rotate="180deg" transparence={ (left >= 300)}>
                    <img src={scrollImage} onClick={CountLeft} alt="" />
        </ArrowLayer>
        <Promos left={`${left}px`}>
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="380px" B="247px">
                    <img src={one} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="378" B="378px">
                    <img src={two} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="380px" B="247px">
                    <img src={one} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="378" B="378px">
                    <img src={two} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="380px" B="247px">
                    <img src={one} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="378" B="378px">
                    <img src={two} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop A="380px" B="247px">
                    <img src={one} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="378" B="378px">
                    <img src={two} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span>R$8999,99</Span>
                </PromoScop>
                
                <PromoScop A="281px" B="301px">
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
            </Promos>
            <ArrowLayer right="0px"  transparence={!(left >= -5000)} >
                <img src={scrollImage} onClick={CountRight} alt="" />
            </ArrowLayer>
        </MainPromo>
    )
    function CountLeft(){
        if(left < 500){  
        setLeft(left + 300);
        }
        else{

        }
    }
    function CountRight(){
        if(left > -5000){
            setLeft(left - 300);
        }
    }
}

export default Promo