import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function About() {
    return (
        <div>
            <Header />
            <div className='header aboutUs_texts'>
                <p className='ab_head'> Helping Homeowners <br /> Find Trusted Pros.</p>
                <p className='join_text'>We know that finding reliable, professionals for home repairs, and maintenance can be a daunting task. That's why we've created a platform that helps you find the best professionals in your area.</p>
            </div>
            <div className='about_img mt-4'>

            </div>
            <div className='feat flex justify-around'>
                <p className='feat_text'>FEATURED ON</p>
                <img className='tel' src='./tel.png' />
                <img className='ev' src='./ev.png' />
                <img className='lon' src='./lon.png' />
                <img className='fast' src='./fd.png' />

            </div>
            <div className='header'>
                <div className='misson_block'>
                    <p className='misson_head'> Our Mission.</p>
                    <p className='misson_sub'>We are a company that connects home service professionals to home service consumers. Our mission is to make it easy for homeowners to find the right professionals for their home needs, and for professionals to find new clients and grow their businesses.</p>
                </div>

            </div>
            <div className='card gap-10 abt_rating grid grid-cols-3 '>
                <div>
                    <img className='card_icon' src='./safe.png' />
                    <p className='card_header'>50K+ Jobs Completed</p>
                    <div className=''>
                        <p>You will never have to share your personal information with <br/> tradesmen or home service.</p>
                    </div>
                </div>
                <div>
                    <img className='card_icon' src='./card.png' />
                    <p className='card_header'>Payment Protection</p>
                    <div className=''>
                        <p> All your payments are protected by a highly secure Escrow account. <br/>
                            Pay in advance or on completion with just a few clicks of a button, whenever you want.</p>
                    </div>
                </div>
                <div>
                    <img className='card_icon' src='./check.png' />
                    <p className='card_header'>Trusted Professional</p>
                    <div className=''>
                        <p>We use the Self-Employed Quality Control Scheme =to comprehensively screen all <br/>
                            home service professionals on Loggworks — for your peace of mind.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <p className='about_value'>Values we hold dear.</p>
                <div className='grid grid-cols-2 header value_company gap-8'>
                    <div className='greencard'>
                        <img className='sheild' src='./green.png' />
                        <p className='greenHead'>Customer satisfaction</p>
                        <p>We pride in providing excellent service to customers <br/> and ensuring that their needs are met.</p>
                    </div>
                    <div className='greencard'>
                        <img className='sheild' src='./green.png' />
                        <p className='greenHead '>Professionalism</p>
                        <p>We maintain high standards of quality and professionalism in <br/> all aspects of our business dealings.</p>
                    </div>
                    <div className='greencard'>
                        <img className='sheild' src='./green.png' />
                        <p className='greenHead'>Teamwork</p>
                        <p>We are working together with others towards a common goal and <br/> supporting one another in the process.</p>
                    </div>
                    <div className='greencard'>
                        <img className='sheild' src='./green.png' />
                        <p className='greenHead'>Creativity and innovation</p>
                        <p>At Loggworks we are open to new ideas and constantly seeking ways <br/> to improve and evolve the business.</p>
                    </div>
                </div>
            </div>
            <div className='about_join_us'>
                <p className='abt_head'>Join our growing team.</p>
                <div className='abt_join_tetx'>
                    <p className='join_text'>We are always on the lookout for talented and driven individuals to join our team. We believe that our employees are the driving force behind our success, and we are committed to providing them with the support and resources they need to thrive.</p>
                </div>
                <button className='about_opening_btn mb-20'>
                    <p>View Current Openings</p>
                </button>
            </div>
            <Footer />
        </div>
    )
}
