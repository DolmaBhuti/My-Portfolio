import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full text-white p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/6316be5c-a7b3-412e-a2d0-b9a717b67e66"
            method="post"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name here."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here."
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message."
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
