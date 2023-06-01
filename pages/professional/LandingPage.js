import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';

export default function LandingPage() {
    return (
        <div>
            <Header />
            <div>
                <div className='prof mt-4'>
                    <p className='hero_header'>Find reliable home service</p>
                    <p className='hero_header'>provider near you</p>
                    <p className='hero_subText'> Loggworks connect homeowners to genuine and reliable  <br /> service providers
                        who provide easy-to-book and hassle-free services.</p>
                    <div className='flex'>
                        <div className='pro_hero'>
                            <p>Become a professional</p>
                        </div>
                    </div>
                </div>
                <div className='header'>
                    <h3 className='secure'>Secured payment and privacy on Loggworks</h3>

                    <div className='card abt_h gap-10  grid grid-cols-3'>
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
                    <h3 className='secure mb-2'>How it works</h3>
                    <p className='mb-14'>Get started using loggworks in 4 easy steps.</p>
                    <div className='flex justify-around mt-24'>
                        <img src='../../babs.png' />
                        <div className='prof_land_text'>
                            <p className='prof_land_text_head'>Sign up as a service provider.</p>
                            <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                        </div>
                    </div>
                    <div className='flex justify-around professional_card'>
                        <div className='prof_land_text'>
                            <p className='prof_land_text_head'>Recieve requests from clients..</p>
                            <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                        </div>
                        <img src='../../mail.png' />

                    </div>
                    <div className='flex justify-around professional_card mb-10'>
                        <img src='../../fee.png' />
                        <div className='prof_land_text'>
                            <p className='prof_land_text_head'>Complete the job and get paid.</p>
                            <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                        </div>
                    </div>
                    <div className='flex justify-around professional_card'>
                        <div className='prof_land_text'>
                            <p className='prof_land_text_head'>Recieve requests from clients..</p>
                            <p>You’ll never have to share your personal information with tradesmen or home service professionals on Loggworks. Communicate with service providers securely through our direct messaging feature until you’re ready to make a booking.</p>
                        </div>
                        <img src='../../cash.png' />

                    </div>
                </div>
                <div>
                    <div>
                        <p>Join our growing <br/> communiunity of <br/> professional</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
