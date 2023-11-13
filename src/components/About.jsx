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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ex
            eius perferendis similique inventore unde, architecto hic quo sed
            quas ratione delectus reiciendis et voluptate cum iste. Unde,
            nesciunt. Suscipit est commodi eos placeat doloremque quaerat dicta
            labore earum rerum debitis veniam odit non dolorum voluptas,
            voluptate architecto laudantium tempore.
          </p>
          <br />

          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            assumenda dignissimos recusandae deleniti non nam perferendis saepe
            ut explicabo vitae sequi dolores consequuntur magni ipsum fugiat
            obcaecati architecto consectetur laborum, quidem ducimus expedita
            tempore in. Obcaecati repellendus ratione cupiditate quisquam illum?
            Fugiat nam non laudantium consequatur saepe quas facilis corporis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
