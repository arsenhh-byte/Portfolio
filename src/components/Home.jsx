import React from 'react'
import HeroImage from '../../src/assets/heroImage.png';


import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>I am a skilled and experienced full-stack developer with three years of hands-on experience working with dynamic websites and real-world projects. I possess strong proficiency in both front-end and back-end development, enabling me to create robust and user-friendly web applications from start to finish.
             I also deeply understand modern web technologies, frameworks, and programming languages, allowing me to integrate various components and deliver scalable solutions seamlessly. With a keen eye for detail and a passion for crafting elegant and efficient code, I consistently meet project deadlines and exceed client expectations.
              My ability to collaborate effectively with cross-functional teams and adapt to evolving project requirements make them an invaluable asset in delivering high-quality software solutions
          </p>

          <div>
            <button className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                               <MdKeyboardDoubleArrowRight size={25} className='ml-1'/>

              </span>
            </button>
          </div>
        </div>
        <div>
              <img src={HeroImage} alt='my pic' 
              className='rounded-2xl mx-auto w-2/3 md:w-full'
              />
        </div>
      </div>
    </div>
  )
}

export default Home
