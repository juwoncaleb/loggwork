import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Blog() {
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
                className=''>
                <Header />
                <div className='blog_div mt-4'>
                    <div>
                        <p className='blog_header'>Blog & Articles</p>
                        <div className='blog_input flex justify-center mt-6'>
                            <input placeholder='  Search articles' className='blog_in' />
                            <div className='blog_search'>
                                <img src='./search.png' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog_post'>
                    <div className='grid blog_contain grid-cols-2 mb-6 gap-2'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} className='gluebox'>
                            <img className='iron' src='./../iron.png' />
                            <div className='glue_title'>
                                <button className='blog_service_professional ml-4'>
                                    <p>Service professional</p>
                                </button>
                                <p className='mb-2 blog_post_header ml-4'>5 Tips for Finding the Right Home Service Professionals.</p>
                                <p className='blog_post_text ml-4'>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <div>
                            <motion.div initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='gluebox'>
                                <img className='glue' src='./../glue.png' />
                                <div className='glue_title'>
                                    <button className='blog_service_professional ml-4'>
                                        <p>Service professional</p>
                                    </button>
                                    <p className='mb-2 blog_post_header ml-4'>5 Tips for Finding the Right Home Service Professionals.</p>
                                    <p className='blog_post_text ml-4'>18th Jun, 2023</p>
                                </div>
                            </motion.div>
                            <div className='grid grid-cols-2 gap-2 mt-4'>
                                <motion.div initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 100, damping: 10, duration
                                            : 0.8,
                                    }} className='gluebox'>
                                    <img className='capenter' src='./../capen.png' />
                                    <div className='glue_title'>
                                        <button className='blog1 ml-4'>
                                            <p>Service professional</p>
                                        </button>
                                        <p className='mb-2 blog_post_header ml-4'>5 Tips for Finding the Right Home Service Professionals.</p>
                                        <p className='blog_post_text ml-4'>18th Jun, 2023</p>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 100, damping: 10, duration
                                            : 0.8,
                                    }} className='gluebox'>
                                    <img className='capenter' src='./../weln.png' />
                                    <div className='glue_title'>
                                        <button className='blog1 ml-4'>
                                            <p>Service professional</p>
                                        </button>
                                        <p className='mb-2 blog_post_header ml-4'>5 Tips for Finding the Right Home Service Professionals.</p>
                                        <p className='blog_post_text ml-4'>18th Jun, 2023</p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>
                    <motion.p initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring', stiffness: 100, damping: 10, duration
                                : 0.8,
                        }} className='blogpost_list'>Past Articles</motion.p>
                    <div className='blog_list grid grid-cols-3 gap-4'>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../write.png' />
                            <p className='blog_list_header mb-2 mt-1'> What to Look for in a Home <br /> Service Professionals Contract.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../question.png' />
                            <p className='blog_list_header mb-2 mt-1'> Frequently Asked Questions  <br />About Hiring a Home Service Professional.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../bus.png' />
                            <p className='blog_list_header mb-2 mt-1'> The Top Home Service  <br /> Professionals in Manchester.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../so.png' />
                            <p className='blog_list_header mb-2 mt-1'> What to Do If a Home Service <br /> Professional Makes a Mistake.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../fake.png' />
                            <p className='blog_list_header mb-2 mt-1'> How to Choose the Right .<br /> Home Service Professional for Your Needs</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../hh.png' />
                            <p className='blog_list_header mb-2 mt-1'> The Advantages of Hiring <br /> a Local Home Service Professional.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../capo.png' />
                            <p className='blog_list_header mb-2 mt-1'> The Importance of Regular  <br /> Home Maintenance.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../flowe.png' />
                            <p className='blog_list_header mb-2 mt-1'> The Most Common Home  <br /> Repairs and How to Prevent Them.</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: 'spring', stiffness: 100, damping: 10, duration
                                    : 0.8,
                            }} >
                            <img className='blog_image' src='./../clean.png' />
                            <p className='blog_list_header mb-2 mt-1'> How to Hire a Home Service <br /> Professional During COVID-19..</p>
                            <p className='blog_list_sub mb-2'>Loggworks helps you get special offers, <br /> connect you to top vetted an... </p>
                            <div className='flex read_bar' >
                                <div className=' flex'>
                                    <p className='read'>Read More </p>
                                    <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
                                </div>
                                <p className='blog_post_text '>18th Jun, 2023</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='blog_button_holder'>
                    <button className='blog_button'>
                        Load more
                    </button>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
