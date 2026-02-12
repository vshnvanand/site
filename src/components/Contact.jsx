
import { Mail, Clock4, Video, SquareArrowOutUpRight } from 'lucide-react'

const Contact = () => {
  return (
    <div className='pt-20 flex flex-col'>
        <div className='flex flex-col items-center'>
            <h1 className='text-3xl text-white font-bold font-sans'>Reach Out</h1>
            <h3 className='text-[#b3b3b3] text-md pt-3'>Whether you have a question about my projects or just want to say hi, my inbox is always open.</h3>
        </div>
        <div className='flex gap-10 p-10 px-30 justify-evenly'>
            <div className= 'p-8 w-1/2 flex flex-col border border-[#4a4a4a] rounded-xl'>
                <h1 className='text-3xl font-bold text-white'>Connect with me</h1>
                <h2 className='py-4 text-[#b3b3b3]'>Let's Discuss how can i contribute to your team</h2>
                <div className='flex flex-col gap-4'>
                    <button className='hover:cursor-pointer'>
                        <div className='p-4 flex justify-start items-center gap-3 bg-[#232020] rounded-2xl'>
                            <div className='p-2 rounded-xl bg-white'>
                                <Mail />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-white text-xs'>EMAIL</h3>
                                <h2 className='text-white font-bold'>vaishnavanand541@gmail.com</h2>
                            </div>
                        </div>
                    </button>
                    <button className='cursor-pointer'>
                        <div className='p-4 flex justify-start items-center gap-3 bg-[#232020] rounded-2xl'>
                            <div className='p-2 rounded-xl bg-white'>
                                <Mail />
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className='text-white text-xs'>LINKEDIN</h3>
                                <h2 className='text-white font-bold'>Vaishnav Anand</h2>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className='p-8 w-1/2 flex flex-col bg-[#ded9d9] hover:bg-white rounded-xl items-center'>
                <h1 className='text-3xl font-bold'>Book a Call</h1>
                <p className='py-4 w-full'>Ready to discuss your next data project? Schedule a 30-minute introductory call to explore how we can work together.</p>
                <div className='w-full flex flex-col'>
                    <div className='flex flex-col gap-4 mb-4'>
                        <div className='flex items-center gap-3'>
                            <div className='p-2 bg-[#2e2c2c] text-white rounded-xl'>
                                <Clock4 />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'> 30 Minutes</h1>
                                <p className='text-xs font-semibold'>Introductory session</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='text-white p-2 bg-[#2e2c2c] rounded-xl'>
                                <Video />
                            </div>
                            <div>
                                <h1 className='text-xl font-semibold'> Google Meet / Zoom</h1>
                                <p className='text-xs font-semibold'>Link provided after the booking</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='group w-full py-5 bg-[#1f1f1f] rounded-2xl hover:bg-black cursor-pointer' onClick={() => {
                            window.location.href = "https://calendly.com/vaishnavanand541/30min"
                        }}>
                            <div className='flex gap-3 justify-center items-center'>
                                <div>
                                    <h1 className='text-md text-[#b7b7b7] group-hover:text-white'>Schedule a call</h1>
                                </div>
                                <div className='text-[#bdb7b7] text-md group-hover:text-white'>
                                    <SquareArrowOutUpRight />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
