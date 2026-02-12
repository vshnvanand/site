

const Header = () => {
  return (
    <div className="px-25 py-5 flex justify-between text-[#A3A3A3] fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div>
          <button className="text-2xl font-semibold hover:text-white ">Vaishnav Anand</button>
      </div>
      <div className="flex gap-7">
          <button className="relative font-medium h-fullafter:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white after:duration-300 hover:text-white hover:after:w-full">About Me</button>
          <button className="hover:text-white font-medium">Experience</button>
          <button className="hover:text-white font-medium">Projects</button>
          <button className="hover:text-white font-medium">Contact</button>
          <button className="hover:text-white font-medium">Switch</button>
          <button className="font-medium cursor-pointer rounded-full px-4 py-1 hover:text-yellow-300">Download CV</button>
      </div>

    </div>
  )
}

export default Header
