import React from "react";
import img1 from "../assets/project-1.jpg";
import img2 from "../assets/project-2.jpg";
import img3 from "../assets/project-3.jpg";
import img4 from "../assets/project-4.jpg";
import img5 from "../assets/work-1.jpg";
import img6 from "../assets/work-2.jpg";
import img7 from "../assets/work-3.jpg";
import img8 from "../assets/work-4.jpg";
import img9 from "../assets/work-5.jpg";
import img10 from "../assets/work-6.jpg";
import Contact from "./Contact";

const Projects = () => {
  const arr = [
    {
      src: img1,
      alt: "Project-1",
      para: "For: Jumbotron, Project: web design for their corporate websites and landing pages for marketing campaigns details",
    },

    {
      src: img2,
      alt: "Project-2",
      para: "For: Carsrepo, Project: designed and developed modern platform for purchasing second hand cars online details",
    },

    {
      src: img3,
      alt: "Project-3",
      para: "For: Truevideo, Project: created a custom video editing and upload web app for this awesome team details",
    },

    {
      src: img4,
      alt: "Project-4",
      para: "For: Evolosim, Project: complete redesign of their corporate website and platform update for their online shop details",
    },
  ];

  const arr2 = [
    {
      src: img5,
      alt: "work - 1",
      para: "For: Zigoland, Project: started a new website from ground up for a new product details",
    },

    {
      src: img6,
      alt: "work - 2",
      para: "For: Visodream, Project: developed a new forum for the Visodream community details",
    },

    {
      src: img7,
      alt: "work - 3",
      para: "For: Primoday, Project: complete redesign of their corporate website and platform details",
    },

    {
      src: img8,
      alt: "work - 4",
      para: "For: Nextlite, Project: created a custom video editing and upload web app details",
    },

    {
      src: img9,
      alt: "work - 5",
      para: "For: Syncnow, Project: web design for their corporate websites and landing pages details",
    },

    {
      src: img10,
      alt: "work - 6",
      para: "For: Shifter, Project: started a new website from ground up for a new product details",
    },
  ];

  return (
    <>
      <div className="main overflow-hidden bg-[#EFEAE3]">
        <div className="text pt-[100px]">
          <h4 className="medium text-[30px] leading-[30px] text-center  t">
            Delivered projects
          </h4>
          <p className="roman  text-[17px] leading-[17px] pt-4 text-center px-10 lg:w-[60%] lg:mx-auto">
            Listed below are some of the most representative projects I've
            worked on. They range from basic web design for presentation sites
            to advanced web development for online shops
          </p>
        </div>

        <div className="map1 mt-20 ">
          {arr.map((val) => (
            <div className="card flex flex-col justify-center items-center mx-4 my-10 ">
              <img
                className="select-none cursor-pointer rounded-2xl "
                src={val.src}
                alt={val.alt}
              />
              <p className="roman  text-[17px] leading-[17px] pt-6 lg:w-[60%] text-left">
                {val.para}
              </p>
            </div>
          ))}
        </div>

        <div className="map2 mt-20 lg:grid grid-cols-3 lg:mx-60">
          {arr2.map((e) => (
            <div className="card flex flex-col justify-center items-center mx-4 my-10  ">
              <img
                className="select-none cursor-pointer rounded-2xl"
                src={e.src}
                alt={e.alt}
              />
              <p className="roman  text-[17px] leading-[17px] pt-6 text-center">
                {e.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
