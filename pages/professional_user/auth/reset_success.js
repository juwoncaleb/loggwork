import React from 'react'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Reset_success() {
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
                className='reset_div'>
                <center>
                    <img className='logo mb-24' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />

                    <div className='reset_form mt-10'>

                        <img className='mt-10' src='../../emaile.png' />
                        <p className='pro_signin_cta_header'>Password reset email sent.</p>
                        <p className='reset_sub_text'>A reset link has been sent to your mailbox. Check and click the link to reset password.</p>
                        <p className='new_accounr'>Still have issues resetting your password? <span className='no_account support_link'>Contact Support</span></p>
                        <p className='mt-8 back_login mb-10'>Back to login</p>

                    </div>
                </center>

            </motion.div>
        </AnimatePresence>
    )
}
