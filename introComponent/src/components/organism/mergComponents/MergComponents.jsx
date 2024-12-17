import TextBox from "../../atoms/textBox/TextBox"
import bg from '../../images/bg.png'
import MainContainer from "../../molecules/mainContainer/MainContainer"
import Offer from "../../atoms/offer/Offer"

const MergComponents = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <img className="w-full h-full absolute z-[-5]" src={bg} alt="bg" />
        <TextBox />
        <div>
            <Offer/>
            <MainContainer/>   
        </div>
        
    </div>
  )
}

export default MergComponents