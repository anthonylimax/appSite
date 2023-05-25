import imgPC from "./../../assets/pictures/image 10.png"
import imgProcess from "./../../assets/pictures/image 11.png"
function SectionPC() {

    return (
        <>

            <section className="section">

                <img className="imgPC" src={imgPC} alt="" />
                <div className="Texts">
                    <h2>Pc Gamer LA Boss, Rtx 4080, 13900kf, 2TB, 64GB Ddr5 NvME 1TB  </h2>
                    <span>COMPUTADOR PARA QUEM BUSCA UM ALTO DESEMPENHO EM JOGOS E TAREFAS QUE EXIGEM MÁXIMA PERFORMANCE.
                        PERFEITO PARA QUEM PROCURA UM COMPUTADOR POTENTE QUE CONSEGUE SUPORTAR
                    </span>
                    <span><strong> O QUE A MAIOR PARTE DOS COMPUTADORES NÃO SUPORTA.</strong></span>
                </div>
            </section>
            <section className="section Process">
                <div className="Texts">
                    <h2 className="process">Processador Intel Core i9-13900K</h2>
                    <span>
                        Instalado com um processador intel core <strong style={{color: "#0079F0",}}>i9-13900k</strong>, para quem procura o que há de melhor no mercado.
                    </span>
                    <span>
                        Que pode te  proporcionar maior velocidade de processamento de dados possível, perfeito para quem joga jogos pesados de mundo aberto que exigem o melhor do seu processador.
                    </span>
                </div>
                <img src={imgProcess} alt="" />
            </section>
        </>
    )
}

export default SectionPC;