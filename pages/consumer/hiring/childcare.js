import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Childcare() {
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
                <div className='header'>
                    <div className='flex  mt-4 mb-4'>
                        <p className='hiring_small_link'>Hiring guide </p>
                        <img className='nav_Arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                        <p className='blog_present'>
                            Hiring Childcare workers</p>
                    </div>
                    <div className='mt-4 header hiring_header '>
                        <p className='secure'>Hiring Childcare Workers</p>
                    </div>
                    <div className='blog_post flex justify-center mb-8'>

                        <div className='blog_list filter_blog grid grid-cols-3 gap-4 mt-2'>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../babe.png' />
                                <p className='blog_list_header mb-2 mt-1'> Tips for hiring Babysitters</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center text-center '>18th Jun, 2023</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../baby.png' />
                                <p className='blog_list_header mb-2 mt-1'> Holiday Gift Guide for  <br />Parent , Kids and Everyone <br /> Who Loves Them  </p>

                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../ki.png' />
                                <p className='blog_list_header mb-2 mt-1'> Honoring Black History   <br /> Months with Toddlers.</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../spa.png' />
                                <p className='blog_list_header mb-2 mt-1'> At-Home Valentine’s Day <br /> Ideas .</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../happy.png' />
                                <p className='blog_list_header mb-2 mt-1'> Physical Development <br /> Activities for Toddlers</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='/../../crr.png' />
                                <p className='blog_list_header mb-2 mt-1'> Winter Car Seat Safety Tips</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../tc.png' />
                                <p className='blog_list_header mb-2 mt-1'> Clever Ways to Celebrate <br /> Christmas for Kids & Toddlers.</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../tg.png' />
                                <p className='blog_list_header mb-2 mt-1'> Baby Essentials with Liesel  <br /> Teen .</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} >
                                <img src='./../../tb.png' />
                                <p className='blog_list_header mb-2 mt-1'> Kids Fall Fashion Tips with <br /> Wendy Lam</p>
                                <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                                <div className='flex rd_text'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text text-center '>18th Jun, 2023</p>
                            </motion.div>
                        </div>
                        {/* <div className='ml-10 mt-14'>
                        <p className='child_filter'>Filters</p>
                        <div className='flex justify-between chldfilter'>
                            <p> Categories/Specializations</p>
                            <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                        </div>
                        <div className='flex mt-6 '>
                            <div className='check_list mt-1 '>
                            </div>
                            <p>Babysitters</p>
                        </div>
                        <div className='flex mt-6 '>
                            <div className='check_list mt-1 '>
                            </div>
                            <p>Childminders</p>
                        </div>
                        <div className='flex mt-6 '>
                            <div className='check_list mt-1 '>
                            </div>
                            <p>Nannies</p>
                        </div>
                        <div className='flex mt-6 '>
                            <div className='check_list mt-1 '>
                            </div>
                            <p>Virtual Nannies</p>
                        </div>
                        <div className='flex mt-6 '>
                            <div className='check_list mt-1 '>
                            </div>
                            <p>Nursery</p>
                        </div>
                    </div> */}
                    </div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
