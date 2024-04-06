import React, { useState } from "react";
import { FiMonitor } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
import Projects from "./Projects";
import Contact from "./Contact";

const Services = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (index) => {
    setOpen(open === index ? null : index);
  };

  const faq = [
    {
      q: "How can I contact you and quickly get a quote for my online project?",
      a: "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details",
    },

    {
      q: "Do you create designs from the ground up or you are using themes?",
      a: "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details",
    },

    {
      q: "Will I receive any included maintenance or warranty after project delivery?",
      a: "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details",
    },

    {
      q: "If something goes wrong with the project can I have my money back?",
      a: "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details",
    },

    {
      q: "What's your preferred method of payment and do you need an advance?",
      a: "The best way to reach me is through the contact form of by messaging me on my social media accounts. For a fast quote make sure your provide many project details",
    },
  ];

  const arr = [
    {
      icon: <FiMonitor />,
      text: "Design",
      para: "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth",
    },
    {
      icon: <FiCode />,
      text: "Development",
      para: "I can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability",
    },
    {
      icon: <FiSearch />,
      text: "Basic SEO",
      para: "i can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money",
    },
  ];

  return (
    <>
      <div className="main overflow-hidden">
        <div className="services min-h-[100vh] w-[100vw] pt-[90px] pb-[90px] lg:pb-[90px] bg-[#EFEAE3] overflow-hidden">
          <div className="heading">
            <h1 className="medium lg:text-[40px] lg:leading-[40px] text-[35px] leading-[30px] text-center">
              Offered services
            </h1>
          </div>

          <div className="cards flex flex-col justify-center items-center lg:flex-row lg:gap-16 gap-5 mt-16">
            {arr.map((val) => (
              <div className="card h-fit w-[300px] px-7 py-10  bg-[#463C7B] rounded-2xl text-[#EFEAE3]">
                <div className="icon text-[70px]  w-[100px] ">{val.icon}</div>

                <div className="text">
                  <h2 className="medium lg:text-[28px] lg:leading-[35px] text-[23px] leading-[23px] select-none">
                    {val.text}
                  </h2>
                </div>

                <div className="para">
                  <p className="romoan text-[17px]">{val.para}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faqs  mt-16">
            <div className="heading">
              <h1 className="medium lg:text-[35px] lg:leading-[35px] text-[29px] leading-[29px] text-center">
                Frequent Questions
              </h1>
            </div>

            <div className="qna w-[24rem] sm:w-[30rem] lg:w-[40rem] mx-auto mt-8">
              {faq.map((val, index) => (
                <div>
                  <div className="hero mx-3 flex justify-center items-center gap-5 mt-6 select-none">
                    <div
                      className={`icon -translate-y-3 md:translate-y-0 ${
                        open === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <FaAngleDown onClick={() => handleOpen(index)} />
                    </div>
                    <div className="box medium text-[20px] leading-[20px]">
                      {val.q}
                    </div>
                  </div>
                  <div className="children">
                    {open === index && (
                      <div className="child text-center roman text-[17px] leading-[17px] mx-5 ml-10 mt-2">
                        <p>{val.a}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
