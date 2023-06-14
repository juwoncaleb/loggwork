import React from 'react'

export default function Verfication() {
    return (
        <div>
            <div className='flex justify-between'>
                {/* SIGN UP PAGE */}
                <div className='signin_bg'>
                    <img className='fixes_img' src='../../fixes.png' />
                    <img className='pro_sign_card' src='../../signup_test.png' />

                </div>
                <div className='prof_signin_form'>
                    <div className='pro_signin_form_details'>
                        <p className='pro_signin_cta_verfication'>Verify phone number</p>
                        <p className='veriy_text'>Enter the verification number sent to</p>
                        <div className='flex justify-around mt-4 mb-10'>
                            <p>+44 7911 123455</p> <p className='no_account verfic_num'>Edit ?</p>
                        </div>
                        <div className='grid grid-cols-5 gap-2  '>
                            <input className='otp_input center_input' />
                            <input className='otp_input center_input' />
                            <input className='otp_input center_input' />
                            <input className='otp_input center_input' />
                            <input className='otp_input center_input' />

                        </div>
                        <p className='timeout mb-20'>58s</p>
                        <p className='otp_reminder'>Did not get the OTP?</p>
                        <p className=' no_account font-medium text-center mt-4'>Resend  OTP?</p>
                        <button className='verify_button mt-6'>
                            Verfiy  OTP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
