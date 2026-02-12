import React from 'react'

const AboutMe = () => {
  return (
    <div className='pt-40'>
        <div className='text-white flex flex-row-reverse h-'>
            <div className='px-15 text-lg text-[#b2b3b4] w-1/2 flex flex-col justify-center'>
                <h2 className='text-3xl font-semibold py-8'>
                    Hello, There !
                </h2>
                <p className='text-start'>
                    <span className='text-orange-300'>I'm Vaishnav Anand, </span>
                    a software Engineer focused on building scalable backend systems, cloud infrastructure, and AI-powered applications. Experienced in backend development, DevOps automation, cloud-native architectures, and AI integrations. Passionate about solving real-world complex problems through reliable systems, clean design, and production-grade engineering.
                </p>
            </div>
            <div>
                <img src="/faltuDP.avif" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
