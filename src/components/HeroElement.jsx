import AnimateBox from "./AnimateBox"

const HeroElement = () => {
  return (
    <div>
        <div>
          <div className="py-75 px-10 flex flex-col absolute z-1 items-center ">
            <div>
                <h3 className="text-yellow-500 text-2xl font-medium pl-2">Hi, I am Vaishnav !</h3>
                <AnimateBox />
            </div>
            <div>
                <button className="text-yellow-500 text-lg font-medium rounded-xl w-fit flex items-center bg-[#141414] px-9 py-2 mt-3">Let's Work together
                  <span className="h-3 w-3 bg-[#cdca18] ml-3 rounded-full"></span>
                </button>
            </div>
          </div>
        
          <img src='/main.png' alt="laptop image" className="relative -mt-10 ml-5"/>
        </div>
    </div>
    
  )
}

export default HeroElement
