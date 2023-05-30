import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Connect() {
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
                <div className='flex justify-around toggle_options_connect'>
                    <p className='conntect_toggle'>All</p>
                    <p className='conntect_toggle'>Trade association</p>
                    <p className='conntect_toggle'>Retailer</p>
                    <p className='conntect_toggle'>Ambassador</p>
                    <p className='conntect_toggle'>Training</p>

                </div>

                <div >
                    <img src='./t1.png' />
                </div>
            </div>
            <Footer />

        </div>
    )
}
