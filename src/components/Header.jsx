

const Header = () => {
  return (
    <div className="px-25 py-5 flex justify-between text-[#A3A3A3] fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div>
          <button className="text-2xl font-semibold hover:text-white ">Vaishnav Anand</button>
      </div>
      <div className="flex gap-7">
          <button className="relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:duration-300 hover:text-white hover:after:w-full">About Me</button>
          <button className="relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:duration-300 hover:text-white hover:after:w-full">Experience</button>
          <button className="relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:duration-300 hover:text-white hover:after:w-full">Projects</button>
          <button className="relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:duration-300 hover:text-white hover:after:w-full">Contact</button>
          <button className="relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:duration-300 hover:text-white hover:after:w-full">Switch</button>
          <button className=" relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:h-full  after:w-0 after:bg-yellow-300 after:duration-500 after:rounded-full hover:after:absolute:text-black  hover:after:w-full cursor-pointer rounded-full px-4 py-1">Download CV</button>
      </div>

    </div>
  )
}

export default Header
