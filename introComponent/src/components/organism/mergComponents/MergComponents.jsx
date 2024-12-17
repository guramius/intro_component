import TextBox from "../../atoms/textBox/TextBox"
import bg from '../../images/bg.png'
import MainContainer from "../../molecules/mainContainer/MainContainer"
const MergComponents = () => {
  return (
    <div className="flex items-center justify-center h-screen">
        <img className="w-full h-full absolute z-[-5]" src={bg} alt="bg" />
        <TextBox />
        <MainContainer/>
    </div>
  )
}

export default MergComponents