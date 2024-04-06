import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qt32xtp",
        "template_jtv7czd",
        form.current,
        "1LYwEIRIUUHtPNweK"
      )

      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Message sent succesfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Not Sent");
        }
      );
  };

  return (
    <>
      <div className="main overflow-hidden">
        <div className="contact min-h-[100vh] w-[100vw] pt-[100px] bg-[#463C7B] overflow-hidden ">
          <div className="text">
            <h4 className="medium text-[30px] leading-[30px] text-center  text-[#EFEAE3]">
              Contact Me
            </h4>
            <p className="roman text-[#EFEAE3] text-[17px] leading-[17px] pt-4 text-center px-10 lg:w-[30%] lg:mx-auto">
              For any type of online project please don't hesitate to get in
              touch with me. The fastest way is to send me your message
            </p>
          </div>

          <div className="form  ">
            <section className="">
              <div className="py-8  px-4 mx-auto max-w-screen-md">
                <form onSubmit={sendEmail} ref={form} className="space-y-8">
                  <div className="sm:mx-0 mx-4 ">
                    <label className="block mb-2 roman tracking-wide  text-[#EFEAE3] text-[16px] uppercase ">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="shadow-sm bg-[#EFEAE3]  border roman border-gray-300 outline-none rounded-lg  block w-full p-2.5 placeholder-black"
                      placeholder=""
                      required
                      name="from_name"
                    ></input>
                  </div>
                  <div className="sm:mx-0 mx-4">
                    <label className="block mb-2 roman tracking-wide text-[16px]  text-[#EFEAE3] uppercase">
                      Your email
                    </label>
                    <input
                      type="email"
                      className="shadow-sm bg-[#EFEAE3] border roman border-gray-300 outline-none  rounded-lg  block w-full p-2.5 placeholder-black "
                      placeholder=""
                      required
                      name="from_email"
                    ></input>
                  </div>
                  <div className="sm:col-span-2 sm:mx-0 mx-4">
                    <label className="block mb-2 roman text-[#EFEAE3] text-[16px]  tracking-wide  uppercase ">
                      Your message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      className="block p-2.5 w-full roman  bg-[#EFEAE3]  rounded-lg shadow-sm border border-gray-300 placeholder-black outline-none"
                      placeholder=""
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className='py-[7px] px-[24px] w-fit border border-black border-opacity-50 rounded-full bg-[#EFEAE3] leading-[26px] cursor-pointer relative after:content-[""] after:absolute after:h-[100%] after:w-[100%] after:bg-black after:left-0 after:bottom-[-100%] after:rounded-[36rem] hover:after:bottom-0 hover:after:rounded-none    after:transition-all after:ease after:duration-[0.5s] after:delay-[25ms] hover:text-[#EFEAE3] overflow-hidden'
                  >
                    <li className="z-10 relative select-none roman text-[19px] leading-[26px] list-none">
                      Send Message
                    </li>
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Contact;
