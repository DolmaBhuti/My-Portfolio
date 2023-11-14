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
            About Me
          </p>
          <p className="text-xl mt-20">
            Hello! I am a dynamic and enthusiastic software developer who
            recently completed a comprehensive diploma program, equipping me
            with a solid foundation in the latest programming languages and
            technologies. My skill set includes proficiency in languages such as
            C++, Python, and JavaScript, with a particular focus on Node.js and
            Express for server-side development.
          </p>
          <br />

          <p className="text-xl">
            I have hands-on experience in web development, database management,
            and software engineering principles. Leveraging the power of Node.js
            and Express, I've built scalable and efficient server-side
            applications, showcasing my ability to create robust and responsive
            backends. I am adept at problem-solving and thrive in collaborative
            environments where I can apply my analytical mindset to develop
            innovative solutions. My commitment to staying abreast of industry
            trends ensures that I am always ready to embrace new challenges and
            contribute effectively to any development team. With a passion for
            creating efficient and user-friendly applications, I am excited to
            embark on my journey as a software developer and make meaningful
            contributions to the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
