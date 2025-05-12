// const Title = () => <h1>Hunger Full</h1>;
import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <Link to={"/"} className=" w-[370] p-2 text-4xl text-center ">
      {" "}

      {/* transition delay-150 ease */}
      <span className="cursor-pointer  text-red-700 font-medium hover:text-red-400">
        Hungerful
      </span>
    </Link>
  );
}

export default Title;
