import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Catalogue() {
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
                <div className='header mt-20'>
                    <div className='hiring_carfd grid grid-cols-2 md:grid-cols-3 gap-10 header'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img className='services_img' src='./../../chef.png' />
                            <p className='services_text'>Catereer</p>

                            <p>Provides food and drinks for events or parties.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../clo.png' />
                            <p className='services_text'>Laundry service</p>

                            <p>Provides dry cleaning and laundry services .
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../cleaner.png' />
                            <p className='services_text'>Cleaner</p>

                            <p>Provides cleaning services for homes or businesses.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../ent.png' />
                            <p className='services_text'>Entertainer</p>

                            <p> Provides entertainment, such as music or party games, for events or parties.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../brick.png' />
                            <p className='services_text'>Appliance Repair workers</p>

                            <p>Fixes or maintains household appliances.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../meco.png' />
                            <p className='services_text'>Mobile mechanic</p>

                            <p>Provides mechanic services for vehicles at a location of the customer's choice.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../mo.png' />
                            <p className='services_text'>Removal Service workers</p>

                            <p>Provides services to transport and remove items from a location.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../u.png' />
                            <p className='services_text'>Trademen</p>

                            <p>Provides skilled trade services, such as plumbing or carpentry.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../mo.png' />
                            <p className='services_text'>Transport Service worker</p>

                            <p>Provides transportation services for people or goods.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../as.png' />
                            <p className='services_text'>Personal Assistance</p>

                            <p>Provides personal assistance with tasks such as shopping or errands.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../per.png' />
                            <p className='services_text'>Pet Groomer</p>

                            <p>Provides grooming services for pets.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../trash.png' />
                            <p className='services_text'>Recovery Service Worker</p>

                            <p>Brief description of what this entails.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../tutor.png' />
                            <p className='services_text'>Tuttion & class worker</p>

                            <p>Provides education or lessons in a particular subject or skill.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../health.png' />
                            <p className='services_text'>Health Wellness & Beauty coaches</p>

                            <p>Provides services related to health, wellness, and beauty, such as massage or hair styling.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }}  >
                            <img src='./../../repair.png' />
                            <p className='services_text'>Computer & Phone Repair</p>

                            <p> Fixes or maintains computers and phones.</p>
                        </motion.div>

                    </div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
