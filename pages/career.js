import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Career() {
    return (
        <div>
            <Header />
            <div className='mt-4 header hiring_header '>
                <p className='hiring_header_text'>Become a part of our team</p>
                <p className='hiring_subTxt'> If you are passionate about our work and want to be a part of a dynamic and innovative team, .<br />
                    we encourage you to explore our career opportunities</p>
                <button className='about_opening_btn mb-20'>
                    <p>View Current Openings</p>
                </button>
                <div className='card gap-10 abt_rating grid  grid-cols-3'>
                    <div>
                        <img className='card_icon' src='./safe.png' />
                        <p className='card_header'>Competitive Salary</p>
                        <div className=''>
                            <p>A salary reflective of your skills and experience, <br />based of international standards.</p>
                        </div>
                    </div>
                    <div>
                        <img className='card_icon' src='./card.png' />
                        <p className='card_header'>Health Insurance</p>
                        <div className=''>
                            <p> Health insurance benefits to all team members,  <br />
                                which cover medical, dental, and vision care.</p>
                        </div>
                    </div>
                    <div>
                        <img className='card_icon' src='./check.png' />
                        <p className='card_header'>Paid Time Off</p>
                        <div className=''>
                            <p>Paid time off for vacation, sick days, and holidays.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img className='card_icon' src='./safe.png' />
                        <p className='card_header'>Professional Development</p>
                        <div className=''>
                            <p>Educational and training opportunities to help <br />  team members advance their skills and careers.</p>
                        </div>
                    </div>
                    <div>
                        <img className='card_icon' src='./card.png' />
                        <p className='card_header'>Flexible Work Schedule</p>
                        <div className=''>
                            <p> Flexible work arrangements to help team <br />
                                members balance their work and personal lives.</p>
                        </div>
                    </div>
                    <div>
                        <img className='card_icon' src='./check.png' />
                        <p className='card_header'>Company Sponsored Events</p>
                        <div className=''>
                            <p>Company programs to reward, appreciate  <br />
                                and help team members unwind.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='opening flex justify-around'>
                    <p className='current_opein'>Current <br /> Opening</p>
                    <div>
                        <div className='job_position'>
                            <p>Senior frontend developer</p>
                        </div>
                        <div className='job_position'>
                            <p>Insurance Sales Representative</p>
                        </div>
                        <div className='job_position'>
                            <p>Regional Manager</p>
                        </div>
                        <div className='job_position'>
                            <p>Enterprise Resources Planning Representative</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
