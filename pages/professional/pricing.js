import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function Pricing() {
    return (
        <div className=''>
            <Header />
            <div className='blog_div mt-4'>
                <div>
                    <p className='blog_header'>Pricing Guide</p>
                    <div className='blog_input flex justify-center mt-6'>
                        <input placeholder='  Search services' className='blog_in' />
                        <div className='blog_search'>
                            <img src='./search.png' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='trade_driv'>
                        <img className='prize' src='./../../image.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Plumbing repairs </p>
                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../kp.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>HVAC Maintenance <br /> and repair</p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../feet.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Electrical repair and <br /> installation</p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../rof.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Roof repair and <br /> replacements </p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../grass.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Landscaping and lawn </p>
                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../main.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Pest control</p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../img1.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>House cleaning</p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../floo.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Flooring</p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../ass.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Furniture assembly </p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../lock.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Door and lock repairs </p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../hand.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Handyman services </p>

                        </div>
                    </div>
                    <div className='trade_driv'>
                        <img className='prize' src='./../water.png' />
                        <div className='shade_price'>
                            <p className='trade_text'>Water heater repair </p>

                        </div>
                    </div>
                </div>
                <p className='mt-8 mb-8 service_head'>All Services</p>
                <div className='grid grid-cols-4'>
                    <div>
                        <p className='location cursor-pointer'>Plumbing repairs</p>
                        <p className='location cursor-pointer'>Gutter cleaning and repairs</p>
                        <p className='location cursor-pointer'>House cleaning</p>
                        <p className='location cursor-pointer'>Drywall repairs</p>
                        <p className='location cursor-pointer'>Furniture assembly</p>
                        <p className='location cursor-pointer'>Pool maintenance and repairs</p>
                        <p className='location cursor-pointer'>Fence repairs and installations</p>
                        <p className='location cursor-pointer'>Fireplace repairs and maintenance</p>

                    </div>

                    <div>
                        <p className='location cursor-pointer'>HVAC maintenance and repairs</p>
                        <p className='location cursor-pointer'>Landscaping and lawn maintenance</p>
                        <p className='location cursor-pointer'>Painting and wallpaper installation</p>
                        <p className='location cursor-pointer'>Window cleaning</p>
                        <p className='location cursor-pointer'>Door and lock repairs</p>
                        <p className='location cursor-pointer'>Spa maintenance and repairs</p>
                        <p className='location cursor-pointer'>Water treatment system maintenance</p>
                        <p className='location cursor-pointer'>Sound system installations</p>

                    </div>

                    <div>
                        <p className='location cursor-pointer'>Electrical repairs and installations</p>
                        <p className='location cursor-pointer'>Tree trimming and removal</p>
                        <p className='location cursor-pointer'>Carpet cleaning</p>
                        <p className='location cursor-pointer'>Cabinetry installations</p>
                        <p className='location cursor-pointer'>Handyman services</p>
                        <p className='location cursor-pointer'>Generator repairs and installations</p>
                        <p className='location cursor-pointer'>Structural repairs</p>
                        <p className='location cursor-pointer'>Baby sitting</p>

                    </div>

                    <div>
                        <p className='location cursor-pointer'>Roof repairs and replacements</p>
                        <p className='location cursor-pointer'>Pest control</p>
                        <p className='location cursor-pointer'>Flooring repairs and installations</p>
                        <p className='location cursor-pointer'>Appliance repairs and installations</p>
                        <p className='location cursor-pointer'>Water heater repairs and installations</p>
                        <p className='location cursor-pointer'>Security system installations</p>
                        <p className='location cursor-pointer'>Solar panel installations</p>
                        <p className='location cursor-pointer'>Private Chef</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
