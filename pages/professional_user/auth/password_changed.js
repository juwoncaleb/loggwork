import React from 'react'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Password_changed() {
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
                            <img src='../../pcc.png' />
                            <p className='pro_signin_cta_header mt-6'>Password changed</p>
                            <p className='reset_sub_text'>Your password has been updated successfully. Use your new password to Log in</p>

                            <button className='button_green_pro'>
                                <p className='offer_button_text'>Back to Login</p>
                            </button>
                        </div>
                    </center>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}
