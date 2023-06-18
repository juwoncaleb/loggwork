import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Plumbing() {
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
                        <p className='hiring_small_link'>Pricing Guide </p>
                        <img className='nav_Arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                        <p className='blog_present'>
                            Plumbing repairs</p>
                    </div>

                    <div className='header article_image'>
                        <div>
                            <p className='article_header'>Plumbing repair.</p>
                            <p className='article_cartegory'>Pricing</p>
                            <img className='harmer' src='./../../pl.png' />
                        </div>
                    </div>
                    <div className='flex baby justify-center mt-6'>
                        {/* ARTICLE TEXT */}
                        <div className='article_content plumm '>
                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mb-8 key_point'>Plumbing repair costs can vary greatly depending on the specific issue and the type of property.
                                Here is a rough guide to some common plumbing repair cost</motion.p>


                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 1. Clogged drain: $100-$250 </span></motion.p>

                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 2. Leaky faucet: $100-$200</span> </motion.p>

                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 3. Running toilet: $100-$200 </span></motion.p>

                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 4. Water heater repair or replacement: $500-$1,500</span></motion.p>


                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 5. Sewer line repair or replacement: $1,000-$4,000</span> </motion.p>


                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 6. Water line repair or replacement: $500-$1,500</span> </motion.p>
                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='mt-8 key_point'> <span className='aricle_titled_head mt-8 mb-14'> 7.Gas line repair or replacement: $500-$1,500</span> </motion.p>
                            <motion.p initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }}>
                                It's important to note that these estimates are rough and the actual cost could be higher or lower depending on the specific circumstances of the repair. It's always best to get a few quotes from local plumbers to get a more accurate idea of the cost.
                            </motion.p>

                        </div>

                        {/* ARTICLES ICONS */}
                        <div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='share'>
                                <p className='share_text'>Share this aricle</p>
                                <div className='flex share_icons '>
                                    <img className='article_icon' src='./../../fb.png' />
                                    <img className='article_icon' src='./../../twitter.png' />
                                    <img className='article_icon' src='./../../ri_linkedin-box-fill.png' />
                                    <img className='article_icon' src='./../../ic_round-mail.png' />
                                    <img className='article_icon' src='./../../ri_link.png' />
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='professiona_cta'>
                                <div className='offer_service'>
                                    <p className='offer_your_services'>Do you have a <br /> professional service to <br /> offer?</p>
                                    <p className='offer_your_services_subtext'>Post a job with your price in <br /> mind, then get offers</p>
                                    <div className='cta_professinal'>
                                        <p p className='cta_pro_text'>Become a Professional</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y:10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring', stiffness: 100, damping: 10, duration
                                        : 0.8,
                                }} className='professiona_post'>
                                <div className='offer_service'>
                                    <p className='offer_your_services'>Can’t find the <br /> professional you are <br /> looking for?? Let the <br /> professional find you.</p>
                                    <p className='offer_your_services_subtext'>Post a job with your price in <br /> mind, then get offers</p>
                                    <div className='cta_professinal'>
                                        <p p className='cta_pro_text'>Post a Job</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
