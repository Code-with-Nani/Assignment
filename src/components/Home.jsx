import React from 'react'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Projects from './Projects'

const Home = () => {
  return (

    <div className='main overflow-hidden'>

      <div className='home h-[100vh] w-[100vw] pt-[90px] bg-[#EFEAE3] lg:px-10 px-5 flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:items-center overflow-hidden'>


        <div className="left">
          <h2 className='medium lg:text-[63px] text-[40px]  leading-[32px] lg:leading-[50px]'>Hi I am</h2>
          <h2 className='medium lg:text-[63px] text-[40px] leading-[32px] lg:leading-[50px] '>Muhammad Hanan</h2>
          <h2 className='medium lg:text-[63px] text-[40px] leading-[32px] lg:leading-[50px]'>Web Developer</h2>

          <div className="button list-none mt-2 flex gap-2">

            <button className='py-[7px] px-[24px] w-fit border border-black border-opacity-50 rounded-full bg-[#EFEAE3] leading-[26px] cursor-pointer relative after:content-[""] after:absolute after:h-[100%] after:w-[100%] after:bg-black after:left-0 after:bottom-[-100%] after:rounded-[36rem] hover:after:bottom-0 hover:after:rounded-none    after:transition-all after:ease after:duration-[0.5s] after:delay-[25ms] hover:text-[#EFEAE3] overflow-hidden'>
              <li className="z-10 relative select-none roman text-[21px] leading-[26px] ">
                Hire Me
              </li>
            </button>

            <button className='py-[7px] px-[24px] w-fit border border-black border-opacity-50 rounded-full bg-[#EFEAE3] leading-[26px] cursor-pointer relative after:content-[""] after:absolute after:h-[100%] after:w-[100%] after:bg-black after:left-0 after:bottom-[-100%] after:rounded-[36rem] hover:after:bottom-0 hover:after:rounded-none    after:transition-all after:ease after:duration-[0.5s] after:delay-[25ms] hover:text-[#EFEAE3] overflow-hidden'>
              <li className="z-10 relative select-none roman text-[21px] leading-[26px] ">
                Resume
              </li>
            </button>

          </div>

        </div>

        <div className="right">
          <p className='medium text-[21px] leading-[21px] pl-[13px]'>I love to create beautiful and efficient websites</p>
        </div>



      </div>

      <div className="line h-[1px] mx-5 lg:mx-10 bg-black "></div>





      <About />
      <Services/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default Home


