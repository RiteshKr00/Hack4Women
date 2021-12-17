// import { Link } from "react-router-dom"
import PregnencyImg from "../assets/PregnancyImg.png"

export default function Pregnency() {
    return (
        <div className="pt-4 bg-secondary">
            <div className="md:grid md:grid-cols-3">
                <div className="grid place-items-center text-center py-32">
                    <h1 className="text-6xl">Prenatal Education</h1>
                    <h2 className="text-5xl font-lowercase">Perantal Education And Outreach</h2>
                </div>
                <div className="grid place-items-center text-center py-32">
                    <a href="https://health.gov/myhealthfinder/topics/pregnancy/nutrition-and-physical-activity/eat-healthy-during-pregnancy-quick-tips#:~:text=Eat%20a%20variety%20of%20vegetables,bread%2C%20and%20some%20snack%20foods." target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Healthy Eating</div></a>

                    <a href="https://timesofindia.indiatimes.com/life-style/parenting/mental-fitness-is-as-important-as-physical-fitness-for-new-moms/articleshow/71149003.cms" target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Physical & mental fitness</div></a>

                    <a href="https://www.healthline.com/health/pregnancy/bodily-changes-during" target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Changes in pregnancy</div></a>

                    <a href="https://www.parents.com/baby/breastfeeding/basics/breastfeeding-basics/" target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Breastfeeding basics</div></a>

                    <a href="https://utswmed.org/medblog/prepare-body-labor-delivery/" target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Physical preparation for childbirth</div></a>

                    <a href="https://www.plannedparenthood.org/learn/pregnancy/prenatal-care" target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Parental care</div></a>

                    <a href="https://www.womenshealth.gov/pregnancy/childbirth-and-beyond/newborn-care-and-safety" target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Newborn care and safety</div></a>

                    <a href="https://en.wikipedia.org/wiki/Postpartum_physiological_changes#:~:text=After%20birth%2C%20the%20fundus%20contracts,delivered%20a%20child%20or%20children." target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Postpartum Changes</div></a>

                    <a href="https://www.karger.com/Article/Abstract/514884#:~:text=Pregnant%20and%20lactating%20women%20are,preterm%20birth%2C%20and%20thyroid%20function." target="_blank" rel="noreferrer"><div class="inline-flex bg-purple-600 text-white rounded-full text-2xl h-8 px-3 justify-center items-center text-">Environmental exposure</div></a>
                </div>
                <img src={PregnencyImg} alt="img" className="w-full" />

            </div>
            
            {/* <div className="w-full grid place-items-center p-8">
                <Link to="/quiz" className="w-56">
                    <button className="p-2 px-8 mt-4 w-56w-1/3 text-base font-semibold tracking-wider border rounded-full shadow-sm md:w-full bg-red-50 bg-blue-500 hover:shadow-lg text-white">Take Quiz</button>
                </Link>
            </div> */}
        </div>
    )
}
