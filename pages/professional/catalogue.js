import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';

export default function Catalogue() {
    return (
        <div>
            {/* <Header /> */}
            <div className='catalogue_bg mt-4'>
                <div className='catalogue_header'>
                    <p className='service_professional'>Become a trusted home  <br /> service professional.</p>
                    <p className=' mt-6 service_professional_subtexts'>Loggworks connect homeowners to genuine and reliable service   <br /> providers who provide easy-to-book and hassle-free services.</p>
                    <div className='catalogue_btn'>
                        <button className='cons_button'>
                            <p>Connect us</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='hiring_carfd grid grid-cols-2 md:grid-cols-3 gap-10 header'>
                    <div>
                        <img className='services_img' src='./../../chef.png' />
                        <p className='services_text'>Catereer</p>

                        <p>Provides food and drinks for events or parties.</p>
                    </div>
                    <div >
                        <img src='./../../clo.png' />
                        <p className='services_text'>Laundry service</p>

                        <p>Provides dry cleaning and laundry services .
                        </p>
                    </div>
                    <div >
                        <img src='./../../cleaner.png' />
                        <p className='services_text'>Cleaner</p>

                        <p>Provides cleaning services for homes or businesses.</p>
                    </div>
                    <div >
                        <img src='./../../ent.png' />
                        <p className='services_text'>Entertainer</p>

                        <p> Provides entertainment, such as music or party games, for events or parties.</p>
                    </div>
                    <div >
                        <img src='./../../brick.png' />
                        <p className='services_text'>Appliance Repair workers</p>

                        <p>Fixes or maintains household appliances.
                        </p>
                    </div>
                    <div >
                        <img src='./../../meco.png' />
                        <p className='services_text'>Mobile mechanic</p>

                        <p>Provides mechanic services for vehicles at a location of the customer's choice.
                        </p>
                    </div>
                    <div >
                        <img src='./../../mo.png' />
                        <p className='services_text'>Removal Service workers</p>

                        <p>Provides services to transport and remove items from a location.
                        </p>
                    </div>
                    <div >
                        <img src='./../../u.png' />
                        <p className='services_text'>Trademen</p>

                        <p>Provides skilled trade services, such as plumbing or carpentry.</p>
                    </div>
                    <div >
                        <img src='./../../mo.png' />
                        <p className='services_text'>Transport Service worker</p>

                        <p>Provides transportation services for people or goods.</p>
                    </div>
                    <div >
                        <img src='./../../as.png' />
                        <p className='services_text'>Personal Assistance</p>

                        <p>Provides personal assistance with tasks such as shopping or errands.</p>
                    </div>
                    <div >
                        <img src='./../../per.png' />
                        <p className='services_text'>Pet Groomer</p>

                        <p>Provides grooming services for pets.</p>
                    </div>
                    <div >
                        <img src='./../../trash.png' />
                        <p className='services_text'>Recovery Service Worker</p>

                        <p>Brief description of what this entails.</p>
                    </div>
                    <div >
                        <img src='./../../tutor.png' />
                        <p className='services_text'>Tuttion & class worker</p>

                        <p>Provides education or lessons in a particular subject or skill.</p>
                    </div>
                    <div >
                        <img src='./../../health.png' />
                        <p className='services_text'>Health Wellness & Beauty coaches</p>

                        <p>Provides services related to health, wellness, and beauty, such as massage or hair styling.</p>
                    </div>
                    <div >
                        <img src='./../../repair.png' />
                        <p className='services_text'>Computer & Phone Repair</p>

                        <p> Fixes or maintains computers and phones.</p>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
