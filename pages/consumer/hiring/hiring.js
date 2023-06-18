import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'

export default function Hiring() {
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
                <div className='mt-4 header hiring_header '>
                    <p className='hiring_header_text'>Hiring Guide</p>
                    <p className='hiring_subTxt'> Outlining the process of identifying, recruiting, and selecting Home <br />
                        Service Professionals for hire.</p>

                </div>
                <div className='hiring_carfd grid grid-cols-2 md:grid-cols-3 gap-10 header'>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img className='services_img' src='./../../chef.png' />
                        <p className='services_text'>Catereer</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../clo.png' />
                        <p className='services_text'>Laundry service</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../cleaner.png' />
                        <p className='services_text'>Cleaner</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../ent.png' />
                        <p className='services_text'>Entertainer</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../brick.png' />
                        <p className='services_text'>Appliance Repair workers</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../meco.png' />
                        <p className='services_text'>Mobile mechanic</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../mo.png' />
                        <p className='services_text'>Removal Service workers</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../u.png' />
                        <p className='services_text'>Trademen</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../mo.png' />
                        <p className='services_text'>Transport Service worker</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../as.png' />
                        <p className='services_text'>Personal Assistance</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../per.png' />
                        <p className='services_text'>Pet Groomer</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../trash.png' />
                        <p className='services_text'>Recovery Service Worker</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../tutor.png' />
                        <p className='services_text'>Tuttion & class worker</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../health.png' />
                        <p className='services_text'>Health Wellness & Beauty coaches</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} >
                        <img src='./../../repair.png' />
                        <p className='services_text'>Computer & Phone Repair</p>
                    </motion.div>

                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
