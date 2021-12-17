import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="font-poppins">
      <nav className="flex items-center bg-primary flex-wrap px-4 lg:px-16 md:px-8">
        <Link to="/" passHref><span className="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer text-white font-bold">
          Women Essential
        </span></Link>
        <button
          className="lg:hidden right-0 text-white absolute font-bold md:px-8 text-6xl pt-16 px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          bar </button>
        {showModal ? (
          <>
            <div
              className=" flex overflow-x-hidden mx-4 md:mx-8 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative my-6 mx-auto w-screen ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
                  <div className="flex items-start justify-between text-white p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div className="text-3xl font-semibold cursor-pointer">
                      <Link to="/" passHref>
                        Women Essential
                      </Link>
                    </div>

                    <div className="text-6xl font-semibold absolute right-6" onClick={() => setShowModal(false)}>
                      x
                    </div>

                  </div>
                  <div className="grid place-items-center text-xl py-2 w-full" >
                    <Link to="/" passHref>
                      <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Home</span>
                    </Link>

                    <Link to="/selectage" passHref>
                      <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Select Age</span>
                    </Link>

                    <Link to="/pregnancy" passHref>
                      <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Pregnancy</span>
                    </Link>

                    <Link to="/faq" passHref>
                      <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">FAQ's</span>
                    </Link>

                  </div>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}

        <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto" >

            <Link to="/" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Home</span>
            </Link>

            <Link to="/selectage" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Select Age</span>
            </Link>

            <Link to="/pregnancy" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Pregnancy</span>
            </Link>

            <Link to="/selectdoctor" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">Chatroom</span>
            </Link>

            <Link to="/faq" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">FAQ's</span>
            </Link>

          </div>
        </div>
      </nav>
    </div>
  )
}
