import { MainScreen, Icon, List, IconScop } from "../styles"
import logo from '../../assets/pictures/logoGrande.png'
import joystick from '../../assets/pictures/joystick.png'
import one from '../../assets/pictures/image 4.png'
import two from '../../assets/pictures/image 5.png'
import three from '../../assets/pictures/image 6.png'
import four from '../../assets/pictures/image 7.png'
function Main(){
    return(
        <MainScreen imgUrl={joystick}>
            <List>
                <IconScop>
                    <Icon src={one} size="68" secondSize="71x" alt="" />
                    <span>Notebooks</span>
                </IconScop>
                <IconScop>    
                    <Icon src={two} size="71" secondSize="65" alt="" />
                    <span>Computers</span>
                </IconScop>
                <IconScop>
                    <Icon src={three} size="66" secondSize="66" alt="" />
                    <span>Monitors</span> 
                </IconScop>
                <IconScop>
                    <Icon src={four} size="77" secondSize="66" alt="" /> 
                    <span>Games</span>
                </IconScop>          
            </List>
            <img src={logo} className="logo" alt="" />
        </MainScreen>
    )
}
export default Main
