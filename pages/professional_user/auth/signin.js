import React from 'react'
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'
export default function Signup() {
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
                <div className='flex justify-between'>
                    {/* SIGN UP PAGE */}
                    <div className='signin_bg'>
                        <img className='fixes_img' src='../../fixes.png' />
                        <img className='pro_sign_card' src='../../signup_test.png' />

                    </div>
                    <div className='prof_signin_form'>
                        <div className='pro_signin_form_details'>
                            <p className='pro_signin_cta_header'>Log in to Loggworks</p>
                            <p className='pro_signin_input_title'>Phone number</p>
                            <div className='flex mt-3'>
                                <div className='flex  pro_phone_dropdown'>
                                    <img width="34" height="38" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain" />
                                    <img className='arrow ml-2 mt-2 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                                </div>
                                <input className='pro_signin_input ' />

                            </div>
                            <p className='pro_signin_input_title mt-6 mb-2'>Password</p>
                            <input className='pro_signin_input ' />
                            <p className='pro_signin_forgot_password mt-6 mb-2'>Forgot password ?</p>

                            <button className='login_btn'>
                                Log in
                            </button>
                            <div className='flex justify-between or
                    '>
                                <hr className='login_line' />
                                <p className='mr-2 ml-2'>OR</p>
                                <hr className='login_line' />
                            </div>
                            <button className='facebook_button justify-center'>
                                <img width="25" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new" />
                                <p className='ml-4'>Log in with Facebook</p>
                            </button>
                            <button className='google_button justify-center'>
                                <img width="25" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo" />
                                <p className='ml-4'>Log in with Facebook</p>
                            </button>
                            <p className='new_accounr'>Do not have an account <span className='no_account'>Sign up</span></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
