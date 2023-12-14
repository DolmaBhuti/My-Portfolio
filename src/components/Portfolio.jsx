import React from "react";
import Foodscope from "../assets/portfolio/Foodscope.jpg";
import MyMusicApp from "../assets/portfolio/MyMusicApp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Foodscope,
      codeLink: "https://github.com/DolmaBhuti/Foodscope",
      demoLink: "https://foodscope.onrender.com/",
      title: "E-Commerce",
      techUsed:
        "Tech used: JavaScript, HTML, CSS, Handlebars, Nodejs, Express, MongoDb, Mongoose",
    },
    {
      id: 2,
      src: MyMusicApp,
      codeLink: "https://github.com/DolmaBhuti/My_Music_App",
      demoLink: "https://dolmasmusicapp.netlify.app/",
      title: "My Music App",
      techUsed:
        "Tech used: Typescript, HTML, Bootstrap, MongoDB, ExpressJs, AngularJS, Nodejs, Redis ",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, src, codeLink, demoLink, title, techUsed }) => {
              return (
                <div
                  key={id}
                  className="shadow-md shadow-gray-60 rounded-lg bg-slate-300 text-black"
                >
                  <img
                    src={src}
                    alt="Project screenshot"
                    className="rounded-md object-fill h-40 w-80 hover:scale-110 "
                  />
                  <div className="text-center">
                    <p className="mt-1 px-6 py-3">{techUsed}</p>
                    <button className="w-1/3 px-6 py-3 m-4 duration-200 hover:scale-105 bg-slate-300 ">
                      <a href={demoLink} target="_blank" rel="noreferrer">
                        Live
                      </a>
                    </button>
                    <button className="w-1/3 px-6 py-3 m-4 duration-200 hover:scale-105  bg-slate-300">
                      <a href={codeLink} target="_blank" rel="noreferrer">
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
