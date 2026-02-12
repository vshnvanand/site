import React from 'react'

const FooterPage = () => {
  return (
    <div className='flex justify-between items-center py-6 border border-t-[#1C1C21]'>
      <div className='text-[#A3A3A3]'>
        <div className='flex gap-4'>
            <div className='flex gap-2'>
                <h2>Design and Build with</h2>
                <span>🤍</span>
            </div>
            <span>|</span>
            <button className='hover:text-white cursor-pointer'>Vaishnav Anand</button>
        </div>
      </div>
      <div className='flex flex-col items-end'>
          <div className='pb-5 px-3'>
            <h1 className='text-white text-3xl font-bold'>Let's Connect !</h1>
          </div>
          <div className='flex gap-4'>
            <div className='bg-[#1C1C21]     rounded-full w-12 h-12 flex justify-center items-center'>
                <a href="https://github.com/vshnvanand">
                    <img src="github.svg" alt="Github" className='w-7 h-7'/>
                </a>
            </div>
            <div className='bg-[#1C1C21] rounded-full w-12 h-12 flex justify-center items-center'>
                <a href="https://x.com/vsevaishnav">
                    <img src="x.svg" alt="X" className='w-7 h-7'/>
                </a>
            </div>
            <div className='bg-[#1C1C21] rounded-full w-12 h-12 flex justify-center items-center'>
                <a href="https://www.linkedin.com/in/vshnv-anand/">
                    <img src="linkedin-app.svg" alt="Linkedin" className='w-6 h-6 stroke-white'/>
                </a>
            </div>
            <div className='bg-[#1C1C21] rounded-full w-12 h-12 flex justify-center items-center'>
                <a href="https://instagram.com/">
                    <img src="instagram.svg" alt="Instagram" className='w-7 h-7'/>
                </a>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default FooterPage
