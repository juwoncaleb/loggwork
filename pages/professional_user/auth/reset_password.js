import React from 'react'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Reset_password() {
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
                <div className='reset_div'>
                    <center>
                        <img className='logo mb-24' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />

                        <div className='reset_form mt-10'>
                            <p className='pro_signin_cta_header'>Reset Password</p>
                            <p className='reset_sub_text'>Please enter your new password for login</p>
                            <p className='pro_signin_input_title mt-6 mb-2'>New Password</p>
                            <input className='pro_signin_input ' />
                            <p className='pro_signin_input_title mt-6 mb-2'>Confirm new password</p>
                            <input className='pro_signin_input ' />
                            <button className='button_green_pro'>
                                <p className='offer_button_text'>Reset password</p>
                            </button>
                        </div>
                    </center>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}
