import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';

export default function Hiring() {
    return (
        <div>
            <Header />
            <div className='mt-4 header hiring_header '>
                <p className='hiring_header_text'>Hiring Guide</p>
                <p className='hiring_subTxt'> Outlining the process of identifying, recruiting, and selecting Home <br />
                    Service Professionals for hire.</p>

            </div>
            <div className='hiring_carfd grid grid-cols-2 md:grid-cols-3 gap-10 header'>
                <div>
                    <img className='services_img' src='./../../chef.png' />
                    <p className='services_text'>Catereer</p>
                </div>
                <div>
                    <img src='./../../clo.png' />
                    <p className='services_text'>Laundry service</p>
                </div>
                <div>
                    <img src='./../../cleaner.png' />
                    <p className='services_text'>Cleaner</p>
                </div>
                <div>
                    <img src='./../../ent.png' />
                    <p className='services_text'>Entertainer</p>
                </div>
                <div>
                    <img src='./../../brick.png' />
                    <p className='services_text'>Appliance Repair workers</p>
                </div>
                <div>
                    <img src='./../../meco.png' />
                    <p className='services_text'>Mobile mechanic</p>
                </div>
                <div>
                    <img src='./../../mo.png' />
                    <p className='services_text'>Removal Service workers</p>
                </div>
                <div>
                    <img src='./../../u.png' />
                    <p className='services_text'>Trademen</p>
                </div>
                <div>
                    <img src='./../../mo.png' />
                    <p className='services_text'>Transport Service worker</p>
                </div>
                <div>
                    <img src='./../../as.png' />
                    <p className='services_text'>Personal Assistance</p>
                </div>
                <div>
                    <img src='./../../per.png' />
                    <p className='services_text'>Pet Groomer</p>
                </div>
                <div>
                    <img src='./../../trash.png' />
                    <p className='services_text'>Recovery Service Worker</p>
                </div>
                <div>
                    <img src='./../../tutor.png' />
                    <p className='services_text'>Tuttion & class worker</p>
                </div>
                <div>
                    <img src='./../../health.png' />
                    <p className='services_text'>Health Wellness & Beauty coaches</p>
                </div>
                <div>
                    <img src='./../../repair.png' />
                    <p className='services_text'>Computer & Phone Repair</p>
                </div>

            </div>
            <Footer />
        </div>
    )
}
