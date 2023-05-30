import { Promos, PromoScop, Span, SpanPromo, ArrowLayer, MainPromo } from "../styles"
import scrollImage from '../../assets/pictures/scroll.png'
import one from './../../assets/pictures/promo1.png';
import two from './../../assets/pictures/promo2.png';
import three from './../../assets/pictures/promo3.png';
import { useState } from "react";

function Promo() {
    const [left, setLeft] = useState(15);
    return (
        <MainPromo>
            <ArrowLayer left="0px" rotate="180deg" transparence={(left >= 0)}>
                <img src={scrollImage} onClick={CountLeft} alt="" />
            </ArrowLayer>
            <Promos className="carrossel" left={`${left}%`}>
                
                <PromoScop>
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop>
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop>
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop>
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop>
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
                <PromoScop >
                    <img src={three} alt="" />
                    <SpanPromo>R$8999,99</SpanPromo>
                    <Span Red>R$8999,99</Span>
                </PromoScop>
            </Promos>
            <ArrowLayer right="0px" transparence={!(left >= -5000)} >
                <img src={scrollImage} onClick={CountRight} alt="" />
            </ArrowLayer>
        </MainPromo>
    )
    function CountLeft() {
        if (left <= 0) {
            setLeft(left + 75);
        }
        else {

        }
    }
    function CountRight() {
        if (left <= 1200) {
            setLeft(left - 75);
        }
    }
}

export default Promo