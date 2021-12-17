import { Link } from "react-router-dom"

export default function Adult() {
    return (
        <div className="pt-4 bg-secondary">
            <Link to="/selectage" className="m-4 text-lg">Go back</Link>
            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-bold lg:text-6xl">
                    Adult (20+ years)
                </h1>
                <div className="mt-4 inline-flex h-1 bg-primary rounded-full w-96"></div>
            </div>

            <div className="mx-12">
                <div className="py-6">
                    <div className="text-4xl">Prevention of STDs and HIV:</div>
                    <p className="text-xl">
                    Sexually transmitted diseases can be caused due to unprotected sex. HIV is also an infection that can cause severe health consequences. If someone makes intimate relations with and HIV-positive person, they can get HIV too. Thus, educating people about sexual health is very very important.
                    </p>
                </div>

                <div className="py-6">
                    <div className="text-4xl">Empowerment against physical abuse and sexual violence:</div>
                    <ul className="text-xl">
                        <li className="">Children, especially girls, often cannot make a judgement about good and bad touch. When someone touches them inappropriately on their private parts, they feel something fishy but don’t find what is wrong because of lack of education. If we teach them everything right from the start, our children can be saved from this abuse and humiliation. Sexual predators are everywhere in the society as we get to hear such incidents very often. It is our responsibility to keep our kids safe from them and this can only be possible if they are aware of the situation and how to deal with it.</li>
                        <li className="">Similarly, women who are married off at an early age also do not know about sexual health and that their consent matters. They are so naive that they only obey what their husbands say and do what they want. This makes them victim of sexual abuse. Unplanned pregnancies are also common in such cases. </li>
                    </ul>
                </div>

                <div className="py-6">
                    <div className="text-4xl">Preventing unplanned pregnancies:</div>
                    <p className="text-xl">Another important aspect of sex education is averting the risk of unintended pregnancies. Teenagers make relations out of emotions but with little information about do’s and don’ts. This can result into unplanned pregnancies which can make their lives way more complicated. Use of contraception is also included in sex education.
                    </p>
                </div>
            </div>
        </div>
    )
}
