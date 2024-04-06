import React from 'react'
import img1 from "../assets/project-1.jpg"
import img2 from "../assets/project-2.jpg"
import img3 from "../assets/project-3.jpg"
import img4 from "../assets/project-4.jpg"

const Projects = () => {

  const arr = [
    { src: img1, alt: "Project-1", para: "For: Jumbotron, Project: web design for their corporate websites and landing pages for marketing campaigns details" },

    { src: img2, alt: "Project-2", para: "For: Carsrepo, Project: designed and developed modern platform for purchasing second hand cars online details" },

    { src: img3, alt: "Project-3", para: "For: Truevideo, Project: created a custom video editing and upload web app for this awesome team details" },

    { src: img4, alt: "Project-4", para: "For: Evolosim, Project: complete redesign of their corporate website and platform update for their online shop details" },
  ]

  return (
    <>
      <div className="text pt-[100px]">
        <h4 className='medium text-[30px] leading-[30px] text-center  t'>Delivered projects</h4>
        <p className='roman  text-[17px] leading-[17px] pt-4 text-center px-10 lg:w-[60%] lg:mx-auto'>Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for online shops</p>
      </div>


      <div className="map1 mt-20">


        {
          arr.map((val) => (
            <div className="card flex flex-col justify-center items-center mx-4 my-10">
              <img className='select-none cursor-pointer rounded-2xl' src={val.src} alt={val.alt} />
              <p className='roman  text-[17px] leading-[17px] pt-6 lg:w-[60%] '>{val.para}</p>
            </div>
          ))
        }


      </div>


      <div className="map2">
     
              <div className="card h-fit w-[300px] px-7 py-10 bg-[#EFEAE3] rounded-2xl ">

               <div className="img"><img className='h-[200px] bg-red-500' src="" alt="" /></div>

                <div className="para"><p className="romoan text-[17px]">Lorem, ipsum.</p></div>

              </div>
           
          
      </div>




    </>
  )
}

export default Projects



{/*  <div className="flex justify-center">
<div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
  {images.map((image, index) => (
    <div
      key={index}
      className="relative lg:mx-4"
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto rounded-lg lg:w-auto lg:h-auto"
      />
      <p className="text-sm mt-2">{image.caption}</p>
    </div>
  ))}
</div>
</div> */}