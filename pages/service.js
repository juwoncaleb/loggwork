import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Service() {
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

                <div className=' service_head'>
                    <p className='service_head_text w'>Service Consumer User <br /> Agreement</p>
                    <p className='service_sub_text'>This agreement binds Service providers and Loggworks.</p>
                </div>
                <div className='header flex justify-center'>
                    <div className='introduction_tabs'>
                        <p className='tabs_menu'>Introduction</p>
                        <p className='tabs_menu'>Collection of your information</p>
                        <p className='tabs_menu'>Personal data</p>
                        <p className='tabs_menu'>Finanical data</p>
                        <p className='tabs_menu'>Use of your information</p>
                        <p className='tabs_menu'>Disclosure of your information</p>
                        <p className='tabs_menu'>By law or to protect rights</p>
                        <p className='tabs_menu'>Third party service providers</p>
                        <p className='tabs_menu'>Marketing communications</p>
                        <p className='tabs_menu'>Security of your information</p>

                    </div>

                    <div className=''>
                        <div className='service_tab section_servi'>
                            <p className='service_consume_head'>Introduction.</p>


                            <p>This business respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [name of website.com] [and our mobile application], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully.  If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>

                            <p>We reserve the right to make changes to this Privacy Policy at any time and for any reason.  We will alert you about any changes by updating the “Last Updated” date of this Privacy Policy.  Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
                            </p>

                            <p>You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Site after the date such revised Privacy Policy is posted. </p>
                        </div>
                        <div>
                            <div className='mt-10 section_servi'>
                                <p className='service_consume_head '>Collection of your information..</p>

                                <p> We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>

                            </div>
                            <div className='mt-10 section_servi'>
                                <p className='service_consume_head'>Personal data.</p>

                                <p>
                                    Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us [when you register with the Site [or our mobile application,] or] when you choose to participate in various activities related to the Site [and our mobile application], such as online chat and message boards. You are under no obligation to provide us with personal information of any kind, however your refusal
                                    to do so may prevent you from using certain features of the Site [and our mobile application].
                                </p>
                            </div>
                            <div className='mt-10 section_servi'>
                                <p className='service_consume_head'>Financial data.</p>

                                <p className='mb-20'>
                                    Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site [or our mobile application]. We store only very limited, if any, financial information that we collect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}
