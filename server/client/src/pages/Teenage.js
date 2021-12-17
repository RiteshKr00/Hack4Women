import { Link } from "react-router-dom"

export default function Teenage() {
    return (
        <div className="pt-4 bg-secondary">
            <Link to="/selectage" className="m-4 text-lg">Go back</Link>
            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-bold lg:text-6xl">
                    Teenage (13-19 years)
                </h1>
                <div className="mt-4 inline-flex h-1 bg-primary rounded-full w-96"></div>
            </div>

            <div className="mx-12">
                <div className="py-6">
                    <div className="text-4xl">The Process of Developing the Curriculum:</div>
                    <ul className="text-xl">
                        <li className="">Involved with multiple people with different backgrounds in theory, research, sex and STD/HIV education to develop the curriculum.</li>
                        <li className="">Assessed relevant needs and assets of target group.</li>
                        <li className="">Used a logic model approach to develop the curriculum that specific the health goals, the behaviors affecting those health goals, the risk and protective factors affecting those behaviors, and the activities addressing those risk and protective factors.</li>
                        <li>Designed activities consistent with community values and available resources (e.g. staff time, staff skills, facility space and supplies.)</li>
                    </ul>
                </div>

                <div className="py-6">
                    <div className="text-4xl">Curriculum Goals and Objectives:</div>
                    <ul className="text-xl">
                        <li className="">Focused on clear health goals -- the prevention of STDs, HIV and/or pregnancy.</li>
                        <li className="">Focused narrowly on specific behaviors leading to these health goals (e,g, abstaining from sex or using condoms or other contraceptives), gave clear messages about these behaviors, and addressed situations that might lead to them and how to avoid them.</li>
                        <li className="">Addressed multiple sexual psychosocial risk and protective factors affecting sexual risk behaviors (e.g. knowledge, perceived risks, values, attitudes, perceived norms and self-efficacy).</li>
                    </ul>
                </div>

                <div className="py-6">
                    <div className="text-4xl">Activities and Teaching Methodologies:</div>
                    <ul className="text-xl">
                        <li className="">Created a safe social environment for youth to participate.</li>
                        <li className="">Included multiple activities to change each of the targeted risk and protective factors.</li>
                        <li className="">Employed instructionally sound teaching methods that actively involved the participants, that helped participants personalize the information, and that were designed to change each group of risk and protective factors.</li>
                        <li>Employed activities, instructional methods and behavioral messages that were appropriate to youths’ culture, developmental age and sexual experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
