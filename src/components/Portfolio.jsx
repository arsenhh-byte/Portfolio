import React from 'react'
import spotifyclone from '../assets/portfolio/spotifyclone.jpg'
import carshowcase from '../assets/portfolio/carshowcase.jpg'
import chatgpt from '../assets/portfolio/chatgpt.jpg'
import bankingapp from '../assets/portfolio/bankingapp.jpg'




const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: spotifyclone,
            title: "Spotify Clone",
            description: "A clone of the Spotify web app"

            
        },
        {
            id: 2,
            src: carshowcase,
            title: "Car Show Case App",
            description: "An application that displays a list of cars"
        },
        {
            id: 3,
            src: chatgpt,
            title: "Chat GPT-3 Bot",
            description: "My own version of an AI website"
        },
        {
            id: 4,
            src: bankingapp,
            title: "Banking Application",
            description: "A simple Banking application using react"
        }
        
    ]
    


  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>

                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' > Portfolio</p>
                    <p className='py-6'> Most of my work is currently under development. Feel free to come back anytime to check them out</p>
            </div>  

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, title, description}) => (

                       

                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="Navbar"  className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                {title}.....
                                {description}
                            </div>
    
                        </div>
    
    
                      ))


                }

                    </div> 

        </div>

    </div>
  )
}

export default Portfolio