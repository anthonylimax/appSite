import { useState } from "react"

import Arrow from "./../../../../src/assets/pictures/arrow.png"
import Notebook from "./../../../../src/assets/pictures/notebookPage.png"
import { EachArrow, CarrosselPage, ImagesRow, Bolinhas, Traco, SecondCarousel } from "../../../components/styles"
export const Carrossel = () => {
    const [left, setLeft] = useState(0);
    const [array, setArray] = useState([
        "#3b4d5a",
        "white",
        "white",
        "white",
        "white",
    ])

    return (
        <CarrosselPage>
            <SecondCarousel>
                <EachArrow left="0px" disabled={(array.findIndex(element => element == "#3b4d5a") - 1 < 0)}onClick={() => {
                    const pointed = array.findIndex(element => element == "#3b4d5a")
                    const anotherPointed = (pointed - 1 < 0) ? 4 : pointed - 1;
                    setLeft(left + 100)
                    const anotherArray = array.map((c, i) => {
                        if (i == anotherPointed) {
                            return "#3b4d5a"
                        }
                        else {
                            return "white"
                        }
                    })
                    setArray(anotherArray)
                }} img={Arrow}>
                </EachArrow>
                <ImagesRow left={`${left}vw`}>    
                    <div>
                        <img src={Notebook} alt="" />
                    </div>
                    <div>
                        <img src={Notebook} alt="" />
                    </div>
                    <div>
                        <img src={Notebook} alt="" />
                    </div>
                    <div>
                        <img src={Notebook} alt="" />
                    </div>
                    <div>
                        <img src={Notebook} alt="" />
                    </div>  
                </ImagesRow>
                <EachArrow right="0px" disabled={(array.findIndex(element => element == "#3b4d5a") + 1 > array.length - 1)} onClick={() => {
                    const pointed = array.findIndex(element => element == "#3b4d5a")
                    const anotherPointed = (pointed + 1 > array.length - 1) ? 0 : pointed + 1;
                    const anotherArray = array.map((c, i) => { 
                        setLeft(left - 100)
                        if (i == anotherPointed) {
                            return "#3b4d5a"
                        }
                        else {
                            return "white"
                        }
                    })
                    setArray(anotherArray)
                }} reverse img={Arrow}>
                </EachArrow>
                <Bolinhas>
                    {array.map((element, i) => {
                        return (<Traco isSelected={element}></Traco>)
                    })}
                </Bolinhas>
            </SecondCarousel>

        </CarrosselPage>

    )
}