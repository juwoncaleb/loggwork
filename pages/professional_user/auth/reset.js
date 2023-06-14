import React from 'react'

export default function Reset() {
    return (
        <div>
            <center className='reset_div'>
                <img className='logo mb-24' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />

                <div className='reset_form'>
                    <p className='pro_signin_cta_header'>Reset Password</p>
                    <p>Please enter your email address and we will send you a password reset link</p>
                    <div className='reset_bar'>
                        <p className='pro_signin_input_title mt-6 mb-2'>Password</p>
                        <input className='pro_signin_input ' />
                    </div>
                    <button className='button_green'>
                        <p className='offer_button_text'>Send reset Link</p>
                    </button>
                </div>
                <p className='mt-8 back_login'>Back to login</p>
            </center>

        </div>
    )
}
