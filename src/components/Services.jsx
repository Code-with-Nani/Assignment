import React from 'react'
import { FiMonitor } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Services = () => {

  const arr = [
    { icon: <FiMonitor />, text: "Design", para: "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth" },
    { icon: <FiCode />, text: "Development", para: "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability" },
    { icon: <FiSearch />, text: "Basic SEO", para: "i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money" },
  ]

  return (
    <>

      <div className="services min-h-[100vh] w-[100vw] pt-[90px] pb-[90px] lg:pb-0 bg-[#FE330A]  overflow-hidden">

        <div className="heading">
          <h1 className='medium lg:text-[40px] lg:leading-[40px] text-[35px] leading-[30px] text-center'>Offered services</h1>
        </div>

        <div className="cards flex flex-col justify-center items-center lg:flex-row lg:gap-16 gap-5 mt-16">


          {
            arr.map((val) => (
              <div className="card h-fit w-[300px] px-7 py-10 bg-[#EFEAE3] rounded-2xl ">

                <div className="icon text-[70px]  w-[100px] ">{val.icon}</div>

                <div className="text">
                  <h2 className='medium lg:text-[28px] lg:leading-[35px] text-[23px] leading-[23px] select-none'>{val.text}</h2>
                </div>

                <div className="para"><p className="romoan text-[17px]">{val.para}</p></div>

              </div>
            ))
          }



        </div>

      </div>

    </>
  )
}

export default Services
