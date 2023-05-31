import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Connect() {
    const [open, setOpen] = useState(1)

    return (
        <div>
            <Header />
            <div className='connect_bg mt-4'>
                <div className='consumer_work_text'>
                    <p className='connect_head'>Together we achieve more</p>
                    <p className='connect_Sub mt-6'>Loggworks connect homeowners to genuine and reliable service providers <br /> who provide easy-to-book and hassle-free services.</p>
                    <button className='cons_button'>
                        <p>Connect us</p>
                    </button>
                </div>
            </div>
            <div className='header'>
                <div className='flex justify-around toggle_options_connect mb-8'>
                    <div onClick={() => setOpen(1)} >
                        <p className='conntect_toggle'>All</p>
                        <hr className={open ===1 ? "green_line" : null} />
                    </div>
                    <div onClick={() => setOpen(2)}>
                        <p className='conntect_toggle'>Trade association</p>
                        <hr className={open ===2 ? "green_line" : null}/>

                    </div>
                    <div onClick={() => setOpen(3)}>
                        <p  className='conntect_toggle'>Retailer</p>
                        <hr className={open ===3 ? "green_line" : null} />
                    </div>
                    <p className='conntect_toggle'>Ambassador</p>
                    <p className='conntect_toggle'>Training</p>

                </div>
                {/* ALL ITEMS */}
                {
                    open == 1 && (
                        <div>
                            <div className='flex justify-around desk_items'>
                                <div className='desk_theme'>
                                    <p className='desk_head'>Trade Associations</p>
                                    <p> These companies or organization provides products or services that are related to, or complementary to, your our business. For examples, parts supply deals for our home service professionals.</p>
                                </div>
                                <img src='./desk.png' />
                            </div>
                            <div className='flex justify-around mt-10 desk_items'>
                                <div className='desk_theme'>
                                    <p className='desk_head'>Retailers</p>
                                    <p>Retailer partners are companies or organization that sells your products or services to end customers.</p>

                                </div>
                                <img src='./desk.png' />
                            </div>
                            <div className='flex justify-around mt-10 desk_items'>
                                <div className='desk_theme'>
                                    <p className='desk_head'>Ambassadors</p>
                                    <p>Ambassadorial partners are typically individuals who love and want to represent our brand and promotes our products or services to others.</p>
                                </div>
                                <img src='./desk.png' />
                            </div>
                            <div className='flex justify-around mt-10 desk_items mb-20'>
                                <div className='desk_theme'>
                                    <p className='desk_head'>Training</p>
                                    <p>Training partners are companies or organization that provides training or educational resources related to our business.</p>
                                </div>
                                <img src='./desk.png' />
                            </div>
                        </div>
                    )
                }


                {/* TRADE ASSOCIAION */}
                {
                    open === 2 && (
                        <div>
                            <div className='flex justify-around desk_items'>
                                <div className='desk_theme'>
                                    <p className='desk_head'>Trade Associations</p>
                                    <p> These companies or organization provides products or services that are related to, or complementary to, your our business. For examples, parts supply deals for our home service professionals.</p>
                                </div>
                                <img src='./desk.png' />
                            </div>
                            <div className='mt-10'>
                                <p className='desk_head_trade'>Our trade partners</p>
                                <div className='flex justify-around'>
                                    <div>
                                        <img src='./Ziprecruiter.png' />
                                        <p className='trad_path'>Zip recruiter</p>
                                    </div>
                                    <div>
                                        <img src='./rangers.png' />
                                        <p className='trad_path'>New York Rangers</p>
                                    </div>
                                    <div>
                                        <img src='./Confluence.png' />
                                        <p className='trad_path'>Confluence</p>
                                    </div>
                                    <div>
                                        <img src='./iron_mon.png' />
                                        <p className='trad_path'>Iron man</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {/* TRADE ASSOCIAION */}
                {
                    open === 3 && (
                        <div>
                            <div className='flex justify-around mt-10 desk_items'>
                                <div className='desk_theme'>
                                    <p className='desk_head'>Retailers</p>
                                    <p>Retailer partners are companies or organization that sells your products or services to end customers.</p>

                                </div>
                                <img src='./desk.png' />
                            </div>
                            <div className='mt-10'>
                                <p className='desk_head_trade'>Our trade partners</p>
                                <div className='flex justify-around'>
                                    <div>
                                        <img src='./Ikea.png' />
                                        <p className='trad_path'>IKEA</p>
                                    </div>
                                    <div>
                                        <img src='./punch.png' />
                                        <p className='trad_path'>Hawaiian punch</p>
                                    </div>
                                    <div>
                                        <img src='./Jeep.png' />
                                        <p className='trad_path'>Jeep</p>
                                    </div>
                                    <div>
                                        <img src='./Gusto.png' />
                                        <p className='trad_path'>Gusto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Footer />

        </div>
    )
}
