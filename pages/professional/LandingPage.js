import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'

export default function LandingPage() {
    const [open, setOpen] = useState(1)
    const [active, setActive] = useState(null)
    const router = useRouter()

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1
                }}
                key={router.route}
            >
                <Header />
                <div>
                    <div className='prof mt-4'>
                        <p className='hero_header'>Get ahead in your chosen profession</p>
                        <div className='hero_texts'>
                            <p className='hero_subText'> To join as a home service provider, enter your phone number here.  ou will recieve a link to download the app and register yourself.</p>

                        </div>
                        <div className='flex'>
                            <div className='pro_hero'>
                                <p>Become a professional</p>
                            </div>
                        </div>
                    </div>
                    <div className='header'>
                        <h3 className='secure'>Secured payment and privacy on Loggworks</h3>

                        <div className='card abt_h gap-10  grid grid-cols-3 '>
                            <div>
                                <img src='../../Privacy.png' />
                                <p className='card_header mt-4'>Cut business costs.</p>
                                <div className='card_item'>
                                    <p>Leave the hard work and expense of web development and SEO to Loggworks. Our app also eliminates accounting costs by automating invoicing and reporting tasks.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src='../../cent.png' />
                                <p className='card_header mt-4'>Affordable pricing.</p>
                                <div className='card_item'>
                                    <p>Cut the cost of admin by paying a commission only on completed bookings. The Loggworks
                                        pay-as-you-go model includes free registration, free offer promotion and free business reputation vetting — allowing you to scale as you grow. </p>
                                </div>
                            </div>
                            <div>
                                <img src='../../box.png' />
                                <p className='card_header mt-4'>Find new business.</p>
                                <div className='card_item'>
                                    <p>Find new jobs and grow your business by using in-built features such as consumer financing,
                                        professional profile social sharing, vetting and special offers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <center>
                            <h3 className='secure mb-2'>How it works</h3>
                            <p className='md:mb-14 mb-6 get_started'>Get started using loggworks in 4 easy steps.</p>
                        </center>
                        <div className='flex abt_h justify-around mt-24'>
                            <img src='../../babs.png' />
                            <div className='prof_land_text'>
                                <p className='prof_land_text_head '>Sign up as a service provider.</p>
                                <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                            </div>
                        </div>
                        <div className='flex abt_h justify-around professional_card pro_card_rev'>
                            <div className='prof_land_text'>
                                <p className='prof_land_text_head'>Receive requests from clients..</p>
                                <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                            </div>
                            <img src='../../mail.png' />

                        </div>
                        <div className='flex abt_h justify-around professional_card mb-10'>
                            <img src='../../fee.png' />
                            <div className='prof_land_text'>
                                <p className='prof_land_text_head'>Complete the job and get paid.</p>
                                <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                            </div>
                        </div>
                        <div className='flex abt_h justify-around professional_card pro_card_rev '>
                            <div className='prof_land_text'>
                                <p className='prof_land_text_head'>Recieve requests from clients..</p>
                                <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                            </div>
                            <img src='../../cash.png' />

                        </div>
                    </div>
                    <div className='header flex justify-around community_card'>
                        <div className='cape'>
                            <h3 className='secure  mb-6'>Join our growing <br />communiunity of <br />professional</h3>
                            <div className='join_prof_texts'>
                                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque iaculis cras tortor felis
                                    ipsum urna nibh tincidunt. Convallis eget pharetra sit aliquet ultrices. </p>
                            </div>
                            <div className='pro_hero mt-8'>
                                <p>Become a professional</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6 ml-8'>
                            <img src='../../teach.png' />
                            <img className='mt-6' src='../../flo.png' />
                            <img src='../../civ.png' />
                            <img className='mt-6' src='../../weed.png' />

                        </div>
                    </div>


                </div>
                <div className='phone_frame header flex justify-between'>
                    <img className='phone' src='../../phone.png' />
                    <div className='phone_text'>
                        <p className='access'>Access Loggworks on your mobile phone</p>
                        <p className='access_subText'>Enjoy the full experience of Loggworks on our mobile app. What’s more?
                            <br />
                            You get to enjoy all of our services convieniently. </p>
                        <button className='access_button '>
                            Coming soon
                        </button>
                    </div>

                </div>
                <div className='header '>
                    <h3 className='secure pro_faq '>Frequently asked question</h3>
                    <div className='faq_head'>
                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>Is there any warranty exclusions?</p>
                                <button className='tog' onClick={() => setActive(active === 1 ? null : 1)}>
                                    {active === 1 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 1 && (
                                <div >
                                    <p>
                                        Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking
                                        about is sashimi), but actually the term sushi just refers to
                                        the type of vinegar rice used in the traditional Japanese cuisine. The great thing
                                        about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>Can I use multiple discount codes?</p>
                                <button className='tog' onClick={() => setActive(active === 2 ? null : 2)}>
                                    {active === 2 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 2 && (
                                <div>
                                    <p>
                                        “Software is never completed, it is just abandoned“- is a very popular saying in
                                        the tech Ecosystem. What does this mean, no matter how much you try to adapt and
                                        optimize it, there will always be something to optimize — Make it faster, smoother, etc
                                        <a href='https://medium.com/@calebomojuwon/software-is-never-completed-it-is-just-abandoned-is-a-very-popular-saying-in-the-tech-ecosystem-5ddaba2256c9' className='read'>READ MORE</a>

                                    </p>

                                </div>
                            )}
                        </div>
                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>Do I have to pay customs fees or duty on my package?</p>
                                <button className='tog' onClick={() => setActive(active === 3 ? null : 3)}>
                                    {active === 3 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 3 && (
                                <div>
                                    <p>
                                        “Optimizing the Largest Contentful Paint (LCP) of a web application can greatly
                                        improve the user experience of the website and its general performance.
                                        This is a very important goal for most businesses, as better user
                                        experience leads to higher conversion rates and lower bounce rates
                                        <a href='https://medium.com/@calebomojuwon/guide-to-rev-up-your-lcp-score-and-outpace-the-competition-b11194faf622' className='read'>READ MORE</a>
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>Why is there a checkout limit? / What are all the checkout limits?</p>
                                <button className='tog' onClick={() => setActive(active === 5 ? null : 5)}>
                                    {active === 5 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 5 && (
                                <div>
                                    <p>
                                        The strength of a person is often measured not by their success during favorable conditions,
                                        but by how they react when facing adversity. Similarly, the quality of the software is
                                        not fully seen when it is functioning under ideal conditions,
                                        but when it is tested by unexpected events such as network instability.
                                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                                    </p>
                                </div>
                            )}
                        </div>

                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>How can I track my orders & payment?</p>
                                <button className='tog' onClick={() => setActive(active === 8 ? null : 8)}>
                                    {active === 8 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 8 && (
                                <div>
                                    <p>
                                        The strength of a person is often measured not by their success during favorable conditions,
                                        but by how they react when facing adversity. Similarly, the quality of the software is
                                        not fully seen when it is functioning under ideal conditions,
                                        but when it is tested by unexpected events such as network instability.
                                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>How do you ship my orders?</p>
                                <button className='tog' onClick={() => setActive(active === 9 ? null : 9)}>
                                    {active === 9 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 9 && (
                                <div>
                                    <p>
                                        The strength of a person is often measured not by their success during favorable conditions,
                                        but by how they react when facing adversity. Similarly, the quality of the software is
                                        not fully seen when it is functioning under ideal conditions,
                                        but when it is tested by unexpected events such as network instability.
                                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='professional_faq'>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>Why must I make payment immediately at checkout?</p>
                                <button className='tog' onClick={() => setActive(active === 10 ? null : 10)}>
                                    {active === 10 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 10 && (
                                <div>
                                    <p>
                                        The strength of a person is often measured not by their success during favorable conditions,
                                        but by how they react when facing adversity. Similarly, the quality of the software is
                                        not fully seen when it is functioning under ideal conditions,
                                        but when it is tested by unexpected events such as network instability.
                                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                                    </p>
                                </div>
                            )}
                        </div>

                        <div className='last professional_faq '>
                            <div className='flex justify-between mt-10 mb-8'>
                                <p className='question'>Will I be charged for an exchange?</p>
                                <button className='tog' onClick={() => setActive(active === 13 ? null : 13)}>
                                    {active === 13 ? <p>-</p> : <p>+</p>}
                                </button>
                            </div>
                            {active === 13 && (
                                <div>
                                    <p>
                                        The strength of a person is often measured not by their success during favorable conditions,
                                        but by how they react when facing adversity. Similarly, the quality of the software is
                                        not fully seen when it is functioning under ideal conditions,
                                        but when it is tested by unexpected events such as network instability.
                                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence >
    )
}
