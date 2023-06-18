import React from 'react'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Reset() {
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
                <center className='reset_div'>
                    <img className='logo mb-24' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />

                    <div className='reset_form'>
                        <p className='pro_signin_cta_header'>Reset Password</p>
                        <p className='reset_sub_text'>Please enter your email address and we will send you a password reset link</p>
                        <div className='reset_bar'>
                            <p className='pro_signin_input_title mt-6 mb-2'>Email</p>
                            <input className='pro_signin_input ' />
                        </div>
                        <button className='button_green_pro'>
                            <p className='offer_button_text'>Send reset Link</p>
                        </button>
                    </div>
                    <p className='mt-8 back_login'>Back to login</p>
                </center>

            </motion.div>
        </AnimatePresence>
    )
}
