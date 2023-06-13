import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
export default function Earn() {
    return (
        <div>
            <Header />

            <div className='connect_bg mt-4'>
                <div className='consumer_work_text'>
                    <p className='connect_head'>Earn money by inviting <br /> someone to Loggworks</p>
                    <p className='connect_Sub mt-6'>Loggworks c <br /> who provide easy-to-book and hassle-free services.</p>
                    <button className='cons_button'>
                        <p>Become an affilaite</p>
                    </button>
                </div>
            </div>
           
            <div className='header'>
                <p className='information mb-10'>How it works</p>
                <div className='grid grid-cols-3 gap-6 earn_grid'>
                    <div className='afil_card'>
                        <img src='./Privacy.png' />
                        <p className='affiate'>Join Loggworks as an affiliate</p>
                        <p> Leave the hard work and expense of web development and SEO to Loggworks. Our app also eliminates accounting costs by automating invoicing and reporting tasks.
                        </p>
                    </div>

                    <div className='afil_card'>
                        <img src='./cent.png' />
                        <p className='affiate'> Share your affiliate link</p>
                        <p>Cut the cost of admin by paying a commission only on completed bookings. The Loggworks
                            pay-as-you-go model includes free registration, free offer promotion and free business reputation vetting — allowing you to scale as you grow.</p>
                    </div>

                    <div className='afil_card'>
                        <img src='./box.png' />
                        <p className='affiate'>Start earning when your link coverts</p>
                        <p>Find new jobs and grow your business by using in-built features such as consumer financing,
                            professional profile social sharing, vetting and special offers.</p>
                    </div>
                </div>

                <div className='flex mt-10 justify-between mb-20 hand_div'>
                    <div className='handy_text'>
                        <p className='information '>Perks & Benefit</p>
                        <div className='info_head mt-10'>
                            <p className='info_text_head mb-4'>Add to your earning</p>
                            <p>A salary reflective of your skills and experience, based of international standards.</p>
                        </div>
                        <div className='info_head mt-10'>
                            <p className='info_text_head mb-4'>Professional support</p>
                            <p>Health insurance benefits to all team members, which cover medical, dental, and vision care.</p>
                        </div>
                        <div className='info_head mt-10'>
                            <p className='info_text_head mb-4'>Coupons and discounts</p>
                            <p>Paid time off for vacation, sick days, and holidays.</p>
                        </div>
                        <button className='cons_button'>
                            <p>Become an Affliate</p>
                        </button>
                    </div>
                    <img src='./handy.png' />

                </div>
            </div>
            <Footer />
        </div>
    )
}
