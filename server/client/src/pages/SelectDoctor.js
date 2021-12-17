import { Link } from "react-router-dom"
import Doc1 from "../assets/doc1.jpg"
import Doc2 from "../assets/doc2.png"
import Doc3 from "../assets/doc3.png"
import Doc4 from "../assets/doc4.jpg"
import Doc5 from "../assets/doc5.jpg"

export default function SelectDoctor() {
    return (
        <div className="pt-4 bg-secondary">
            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-bold lg:text-6xl">
                    Select your doctor
                </h1>
                <div className="mt-4 inline-flex h-1 bg-primary rounded-full w-96"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 pt-8 pb-14">

                <Link to='/chatroom'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="250" src={Doc1} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold">Dr. John Doe
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/chatroom'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="250" src={Doc2} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold">Dr. Olive Yew
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/chatroom'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="250" src={Doc3} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold">Dr. Aida Bugg
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/chatroom'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="250" src={Doc4} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold">Dr. Teri Dactyl
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/chatroom'>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-12 border-4  border-primary p-4 bg-gray-200 rounded-lg">
                                <img width="350" height="250" src={Doc5} alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-2xl mb-4 font-semibold">Dr. Allie Grater
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}
