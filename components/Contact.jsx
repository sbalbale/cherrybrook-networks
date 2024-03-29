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
      <div className="max-w-[1240px] px-2 mx-auto flex flex-col justify-center h-full py-32">
        <p className="text-xl tracking-widest uppercase text-[#f00043]">
          Contact
        </p>
        <h2 className="py-4">Let&apos;s Talk</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>{/* Image?? */}</div>
              <div>
                <h2 className="py-2">Sean Balbale</h2>
                <p>Full Stack and Software Developer</p>
                <p className="py-4">
                  I am available for freelance positions. Contact me and
                  let&apos;s chat!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 font-bold">Contact Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    className="font-bold underline"
                    href="https://github.com/sbalbale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    className="font-bold underline"
                    href="https://www.linkedin.com/in/seanbalbale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    className="font-bold underline"
                    href="https://twitter.com/seanbalbale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsTwitter />
                    </div>
                  </Link>
                  <Link
                    className="font-bold underline"
                    href="https://discordapp.com/users/325794320042950666"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaDiscord />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    className="font-bold underline"
                    href="/assets/SeanBalbaleWorkDotCard.vcf"
                    download="SeanBalbaleContactInfo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full p-4 text-gray-100 mt-4">
                      Download My Contact Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-2 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
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
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user_email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="user_subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
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
