import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qmk8vxx",
        "template_4dfuiqb",
        form.current,
        "mxecDHDl6OGVKVQsK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] px-2 py-16 mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#f00043]">
          Contact
        </p>
        <h2 className="py-4">Let's Talk</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>{/* Image?? */}</div>
              <div>
                <h2 className="py-2">Sean Balbale</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  I am available for freelance positions. Contact me and lets
                  chat!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 font-bold">Contact Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      className="font-bold underline"
                      href="https://github.com/sbalbale"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      className="font-bold underline"
                      href="https://www.linkedin.com/in/sean-balbale-7b7689174/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      className="font-bold underline"
                      href="https://twitter.com/seanbalbale"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      className="font-bold underline"
                      href="https://discordapp.com/users/325794320042950666"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaDiscord />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label clasName="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label clasName="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label clasName="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user_email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label clasName="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label clasName="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="boarder-3 rounded:lg border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4" value="Send">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
