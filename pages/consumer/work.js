import React from 'react'
import Header from '../../components/Header'

export default function Work() {
    return (
        <div>
            <Header />
            <div className='consumer_work_hero mt-4'>
                <div className='consumer_work_text'>
                    <p className='consumer_work_head'>Finding professionals has</p>
                    <p className='consumer_work_head'>never been easier.</p>
                    <p className='consumer_work_sub mt-6'>Loggworks connect homeowners to genuine and reliable service</p>
                    <p className='consumer_work_sub'>providers who provide easy-to-book and hassle-free services.</p>
                    <button className='cons_button'>
                        <p>Post a Job</p>
                    </button>
                </div>
            </div>
            <div>
                <img className="lines" src="../././line.png" alt="Lines" />

            </div>
        </div>

    )
}
