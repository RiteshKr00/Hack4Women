import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function FAQ() {
    return (
        <div className="pt-4 bg-secondary pb-8">

            <div className="grid w-full py-10 place-items-center">
                <h1 className="pb-2 text-5xl font-bold lg:text-6xl text-white">
                    FAQ's
                </h1>
                <div className="inline-flex h-1 bg-primary rounded-full w-48"></div>
            </div>

            <div className=" md:grid md:grid-cols-2">

                <div className="w-full max-w-md p-2 mx-auto bg-secondary rounded-2xl">
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What is covered in Relationships Education?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Relationships Education in primary schools will protect children. The new Governmnet guidance sets out the content under the following headings: 'Families and people who care for me', 'Caring friendships', 'Respectful relationships', 'Online relationships', 'Being safe'.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What is relationships and sex education?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Relationships and sex education (RSE) is learning about the emotional, social and physical aspects of growing up, relationships, sex, human sexuality and sexual health. It should equip children and young people with the information, skills and positive values to have safe, fulfilling relationships, to enjoy their sexuality and to take responsibility for their sexual health and well-being.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What is covered in sex education?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    In the new Government guidance DfE continues to recommend that all primary schools 'have a sex education programme tailored to the age and the physical and emotional maturity of the pupils'. The guidance continues: 'Schools are to determine the content of sex education at primary school. Sex education 'should ensure that both boys and girls are prepared for the changes that adolescence brings and - drawing on knowledge of the human life cycle set out in the national curriculum for science - how a baby is conceived and born'.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What does the law say about teaching RSE?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    The Children and Social Work Act 2017 introduces new legislation on relationships and sex education in schools. In July 2018 the Government set out plans for implementaion encouring schools that are ready to start teaching the new curriculum from September 2019 and enabling schools needing more support to use the additional time to prepare to teach high quality RSE from September 2020.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>How will schools know what to teach in RSE?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    The new legislation places RSE and Relationships Education in the basic school curriculum. This allows schools flexibility in developing their programme as part of a broad and balanced curriculum. RSE will not be a National Curriculum subject so there is unlikely to be a new programme of study, as there is for other National Curriculum subjects. There is also  no obligation to examine the subject at GCSE level, for example.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>Can you recommend good RSE resources?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    There are a range of relationships and sex education resources produced by voluntary sector organisations, local authorities and commercial companies. The Sex Education Forum does not recommend specific resources but instead encourages each school or institution to review the materials they use to make sure they are suitable for the children and young people they are working with.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="w-full max-w-md p-2 mx-auto bg-secondary rounded-2xl">
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What type of schools does the new legislation apply to?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    The Children and Social Work Act 2017 introduces new legislation on relationships and sex education in all schools in England. The new legislation makes relationships and sex education (RSE) a compuslory requirement for all secondary schools including academies, free schools, independent schools and maintained schools.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What should be included in our school RSE policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Under the new guidance (2019) schools must have a policy on RSE. Primary schools will need to define Relationships Education and define any sex education they choose to teach other than that covered in the science curriculum. Seconcary schools will need to define Relationships and Sex Education. All schools will need to:
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>Do parents support RSE?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Most parents are very supportive of schools providing relationships and sex education, and also want to play a part in educating their children at home.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>What is the right age to start teaching RSE?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Children are interested in 'where babies comes from' and what makes boys and girls different from a very young age. So don't worry - it is natural for children to be curious and ask these questions. Children take in the information around them about sex and relationships from a very young age even if no-one talks to them about it.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>How do we tackle homophobia in our schools?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Homophobia, biphobia and transphobia like any form of discrimination, should be tackled though a whole school approach. Schools should provide a safe environment for all pupils regardless of sexual orientation. Personal, Social and Health Education (PSHE) and Citizenship should give children and young people the opportunity to discuss diversity and difference, and RSE sessions should allow young people to discuss different types of relationships and explore their attitudes.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure >
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-purple-900 bg-white rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-4">
                                    <span>Are faith perspectives included in RSE?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl rounded-lg bg-white text-purple-800">
                                    Faith perspectives can be included in RSE alongside information about the law and medical facts. It is important that different types of information are identified as such, i.e. description of a faith position or belief, or legal or medical facts.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>

        </div>
    )
}
