import { Fragment } from 'react'
import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import "../i18n"
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'

const changeLang = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
  };
};

export default function Navbar() {


  const { t } = useTranslation();

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="font-poppins">
      <nav className="flex items-center bg-primary flex-wrap px-4 lg:px-16 md:px-8">
        <Link to="/" passHref><span className="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer text-white font-bold">
          {t('logo')}
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
                        {t('logo')}
                      </Link>
                    </div>

                    <div className="text-6xl font-semibold absolute right-6" onClick={() => setShowModal(false)}>
                      x
                    </div>

                  </div>
                  <div className="grid place-items-center text-xl py-2 w-full" >
                    <Link to="/" passHref>
                      <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('logo')}</span>
                    </Link>

                    <Link to="/selectage" passHref>
                      <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('navLinkSelectAge')}</span>
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
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('navLinkHome')}</span>
            </Link>

            <Link to="/selectage" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('navLinkSelectAge')}</span>
            </Link>

            <Link to="/pregnancy" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('navLinkPregnancy')}</span>
            </Link>

            <Link to="/selectdoctor" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('navLinkChatroom')}</span>
            </Link>

            <Link to="/faq" passHref>
              <span className="lg:inline-flex px-3 my-4 py-3 rounded text-gray-100 items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer">{t('navLinkFAQ')}</span>
            </Link>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="my-1 inline-flex justify-center w-full p-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md font-sourceSerifPro hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                  {t('navChangeLang')}
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items static className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none font-sourceSerifPro">

                  <Menu.Item>
                    <div className="w-full px-14 py-3 text-sm cursor-pointer" onClick={changeLang("en")} >
                      English
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="w-full px-16 py-3 text-sm cursor-pointer" onClick={changeLang("hi")} >
                      हिंदी
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="w-full px-12 py-3 text-sm pl-14 cursor-pointer" onClick={changeLang("ma")} >
                      मराठी
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="w-full px-12 py-3 text-sm pl-14 cursor-pointer" onClick={changeLang("ba")} >
                      बंगाली
                    </div>
                  </Menu.Item>

                  <Menu.Item>
                    <div className="w-full px-12 py-3 text-sm pl-14 cursor-pointer" onClick={changeLang("te")} >
                      तेलुगू
                    </div>
                  </Menu.Item>

                </Menu.Items>
              </Transition>
            </Menu>

          </div>
        </div>
      </nav>
    </div>
  )
}
