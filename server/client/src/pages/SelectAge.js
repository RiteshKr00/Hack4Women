import { Link } from "react-router-dom"
import ChildhoodImg from "../assets/childhood.svg"
import Teenage from "../assets/teenage.svg"
import AdultWomen from "../assets/adult.svg"

export default function SelectAge() {
    return (
        <div className="pt-4 bg-secondary">
            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-bold lg:text-6xl">
                    Select your age group
                </h1>
                <div className="mt-4 inline-flex h-1 bg-primary rounded-full w-96"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-8 pb-14">

                <Link to='/child'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="250" src={ChildhoodImg} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold bg-homeImg font-sourceSerifPro">Childhood(8-12)</div>
                        </div>
                    </div>
                </Link>

                <Link to='/teenag'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="220" src={Teenage} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold bg-homeImg font-sourceSerifPro">Teenage(13-19)</div>
                        </div>
                    </div>
                </Link>

                <Link to='/adult' >
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="220" src={AdultWomen} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold bg-homeImg font-sourceSerifPro">Adult(20 +)</div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
