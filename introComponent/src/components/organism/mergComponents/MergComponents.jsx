import TextBox from "../../atoms/textBox/TextBox"
import bg from '../../images/bg.png'
import MainContainer from "../../molecules/mainContainer/MainContainer"
import Offer from "../../atoms/offer/Offer"

const MergComponents = () => {
  return (
    <div className="flex items-center justify-evenly h-screen lg:flex-row flex-col px-4 py-4">
      <img className="w-full h-[1000px] lg:h-full absolute z-[-5]" src={bg} alt="bg" />
      <TextBox />
      <div>
          <Offer/>
          <MainContainer/>   
      </div>
    </div>
  )
}

export default MergComponents