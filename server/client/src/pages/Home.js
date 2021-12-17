import React from "react";
import HomeImg from "../assets/study.svg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="pt-16 lg:pt-8 bg-secondary">
      <div className="p-4 origin-bottom-right lg:mx-32 md:mx-8">
        <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

          <div className="pr-4 md:flex md:flex-col md:justify-center text-white">

            <h2 className="self-center mb-4 text-5xl font-base tracking-wider">Women Essential</h2>

            <p className="self-center text-xl tracking-wide text-justify">Sex education for women is trivial as it can help reduce child marriage and unplanned pregnancies by equipping young women with skills to navigate their sexualities and take control over their lives. Women Essential is a web app that will be a way to educate women of all ages, to explore about themselves, to be more confident, and safe.</p>

            <Link to="selectage" className="md:w-1/3">
              <button className="p-2 px-8 mt-4 text-base font-semibold tracking-wider border rounded-full shadow-sm md:w-full bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg ">Explore</button>
            </Link>

          </div>

          <div className="">
            <img src={HomeImg} alt="img" className="w-full lg:p-10" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
