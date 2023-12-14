import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            A Bit About Me
          </p>
          <p className="text-xl mt-20">
            I'm a versatile full-stack developer adept at crafting robust
            applications across the stack. With expertise in frontend
            technologies like Angular and Bootstrap, alongside backend
            proficiency in Node.js, MongoDB, and Express, I excel in delivering
            dynamic, secure, and user-centric solutions.
          </p>

          <p className="text-xl mt-5">
            My experience spans web development, database management, and
            software engineering. I've built scalable applications using Node.js
            and Express, showcasing my problem-solving skills and collaborative
            nature. Always up-to-date with industry trends, I'm eager to tackle
            new challenges and contribute effectively to development teams.
            Passionate about creating efficient, user-friendly applications, I'm
            excited to make meaningful contributions to the ever-evolving tech
            landscape.
          </p>
          <p className="text-xl text-gray-600/100 flex justify-center mt-5">
            <a
              href="https://github.com/DolmaBhuti/My-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="border-2 border-gray-600 p-2"
            >
              Check out my GitHub page!
            </a>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
