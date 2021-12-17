import { Link } from "react-router-dom"

export default function Childhood() {
    return (
        <div className="pt-4 bg-secondary">
            <Link to="/selectage" className="m-4 text-lg">Go back</Link>
            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-bold lg:text-6xl">
                    Childhood (8-12 years)
                </h1>
                <div className="mt-4 inline-flex h-1 bg-primary rounded-full w-96"></div>
            </div>

            <div className="mx-12">
                <div className="py-6">
                    <div className="text-4xl">Talking about sex and sexuality with children: 8-12 years</div>
                    <p className="text-xl">It's never too early to talk with your child about sex. Talking about sex, sexuality and bodies as your child moves towards puberty can help your child understand that sex and sexuality are typical, healthy parts of life.<br />

                        Open and honest conversations when your child is young can make later conversations easier. And these early conversations also lay the groundwork for children to make healthier and safer choices about sex and sexual relationships when they're older.<br />

                        The key early message for your child is that he can come to you for open, honest and reliable information, and that he shouldn't feel scared or embarrassed to ask you about sex and sexuality.<br />

                        And the good news is that talking about sex and sexuality isn't a one-off conversation that you have to get exactly right. It's a conversation that continues and evolves as your child grows up.</p>
                </div>

                <div className="py-6">
                    <div className="text-4xl">Three steps for talking about sex and sexuality</div>
                    <p className="text-xl"><b>First</b>, find out what your child knows. For example, if your child asks you what an erection is, you could ask, ‘What do you think it is?’ or ‘What have you heard about that?’<br />

                        <b>Second</b>, give your child the facts and correct any misinformation. For example, ‘A penis is usually soft. An erection is when it gets hard or stands up straight’.<br />

                        <b>Third</b>, use the conversation as an opportunity to talk about your own thoughts and feelings. For example, ‘Boys sometimes get erections when they’re asleep and have a wet dream. This is when semen comes out of your penis. It’s a normal part of growing up. You can’t control wet dreams, so don’t worry if it happens. We’ll just wash your sheets’.</p>
                </div>

                <div className="py-6">
                    <div className="text-4xl">How to talk about sex, sexuality and bodies</div>
                    <h1 className="text-2xl font-bold">Explain things at your child’s level</h1>
                    <p className="text-xl">It’s important to explain things at a level that your child can understand. Being brief, positive and factual is a good idea. Your child will probably come back to you if he wants more information.</p>

                    <h1 className="text-2xl font-bold">Use correct names for body parts</h1>
                    <p className="text-xl">It’s also a good idea to use the correct names when you’re talking about body parts – for example, penis, scrotum, testicles, vulva, vagina. It’s OK to use pet names as well.</p>

                    <h1 className="text-2xl font-bold">Get all parents involved</h1>
                    <p className="text-xl">In families with two or more parents, it’s good for all parents to get involved in discussions about sex. When all parents get involved in discussions about sex, they show children that it’s OK to talk about sex and sexuality.</p>
                </div>
            </div>
        </div>
    )
}
