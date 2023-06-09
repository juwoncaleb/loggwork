import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Work() {

    const router = useRouter()

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 1
                }}
                key={router.route}
            >
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
                <div className='header'>
                    <div className='flex abt_h justify-around mt-24'>
                        <motion.img initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} src='../../f1.png' />
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8, delay: 0.25
                            }} className='prof_land_text'>
                            <p className='prof_land_text_head '>Search for nearby service provider.</p>
                            <p>Easily find reliable home service professionals in your area. Enter your location and service needed, then filter results by price, availability, and ratings.</p>
                        </motion.div>
                    </div>
                    <div className='flex abt_h justify-around professional_card pro_card_rev'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} className='prof_land_text'>
                            <p className='prof_land_text_head'>Get a personalized quotation for the required home service.</p>
                            <p>Recieve a personalized quote from your chosen provider. Compare prices and choose the best option for your budget and timeline.</p>
                        </motion.div>
                        <motion.img initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8, delay: 0.25
                            }} src='../../f2.png' />

                    </div>
                    <div className='flex abt_h justify-around professional_card mb-10'>
                        <motion.img initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} className='f4' src='../../f3.png' />
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,delay:0.25
                            }} className='prof_land_text'>
                            <p className='prof_land_text_head'>Rate and review your completed bookings..</p>
                            <p>Help us ensure the quality of our platform and assist other users in making informed decisions by rating and reviewing your provider. Earn rewards for every review submitted.</p>
                        </motion.div>
                    </div>
                    <div className='flex abt_h justify-around professional_card pro_card_rev '>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  className='prof_land_text'>
                            <p className='prof_land_text_head'>Earn cashbacks and rewards.</p>
                            <p>Enjoy our loyalty rewards program, including cashback on every booking, referral bonuses, and much more.</p>
                        </motion.div>
                        <motion.img initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,delay:0.25
                            }}  src='../../f4.png' />

                    </div>
                    <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  className='flex justify-between services_offer mb-10'>
                        <div className='offer_text_2'>
                            <p className='offer_header'>Can’t find the professional you are looking for??</p>
                            <p className='offer_sub_text'>All your payments are protected by a highly secure Escrow account.
                                Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
                            <button className='button_green'>
                                <p className='offer_button_text'>Post a Job</p>
                            </button>
                        </div>
                        <div className='service_media'>
                            <img className='gyal asia' src='../../gyal.png' />
                            <img className='asia_tag' src='../../cards.png' />

                        </div>
                    </motion.div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>

    )
}
