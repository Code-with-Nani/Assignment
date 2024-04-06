import React from 'react'
import { motion } from "framer-motion"

const About = () => {
  return (
    <>


      <div className="about h-fit w-[100vw] pt-[90px] lg:pb-0 pb-[90px] overflow-hidden bg-[#EFEAE3]">


        <div className="main flex flex-col justify-center items-center lg:flex-row lg:gap-16 gap-5 ">
          <div className="box1 h-fit lg:h-[250px] w-[300px] ">
            <h2 className="medium text-[30px] leading-[30px]">Hi there I'm Hanan,</h2>
            <p className='roman text-[17px] leading-[21px] pt-[1px]'>And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch the website.</p>
          </div>
          <div className="box2 h-fit lg:h-[250px] w-[300px] ">
            <p className="roman text-[17px] leading-[21px] lg:pt-[30px]">I enjoy challenges and am always trying to learn new things in web development. I believe in writing code that's easy to understand, talking with my team, and making things that people enjoy.</p>
          </div>
          <div className="box3 h-fit lg:h-[250px] w-[300px] ">
            <p className='roman text-[17px] leading-[21px] lg:pt-[30px]'> I'm good at using MongoDB ExpressJS React and Node - the MERN stack. I've worked on different projects, learning how to make both the front and back ends work smoothly.</p>
          </div>
        </div>


      </div>

      
    </>
  )
}

export default About



