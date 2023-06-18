import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion, stagger, useScroll, useTransform, } from "framer-motion"
import { useRouter } from 'next/router'


export default function PersonalInfo() {
    const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const [currentForm, setCurrentForm] = useState(0);

    const handleNextForm = () => {
        setCurrentForm(currentForm + 1);
    };

    const handlePreviousForm = () => {
        setCurrentForm(currentForm - 1);
    };
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const router = useRouter()

    const form = [
        <div>
            <p className='pro_signin_cta_infor'>Persoanl Information</p>
            <p className='text-center tell'> Tell us about yourself</p>
            <p className='pro_signin_input_title mt-6 mb-2'>Firstname</p>
            <input className='pro_signin_input ' />
            <p className='pro_signin_input_title mt-6 mb-2'>Email address</p>
            <input className='pro_signin_input ' />
            <p className='pro_signin_input_title mt-6 mb-2'>Date of Birth</p>
            <input
                className='pro_signin_input '
                type="date"
                id="dateInput"
                value={selectedDate}
                onChange={handleDateChange}
            />
            <button className='button_green_pro' onClick={handleNextForm}>
                <p className='offer_button_text'>Send reset Link</p>
            </button>
        </div>,

        <div>
            <p className='pro_signin_cta_infor'>Persoanl Information</p>
            <p className='text-center tell'> Tell us about yourself</p>
            <p className='pro_signin_input_title mt-10 mb-2'>Organisation name</p>

            <select className='pro_signin_input' value={selectedOption} onChange={handleOptionChange}>
                <option value=""></option>
                <option value="Option 1">Limited Company </option>
                <option value="Option 2">Sole proprietorship</option>
            </select>
            <input type="text" value={selectedOption} readOnly />
            <p className='pro_signin_input_title mt-6 mb-2'>Organisation Type</p>
            <input className='pro_signin_input ' />
            <p className='pro_signin_input_title mt-6 mb-2'>Number of Employee</p>
            <input className='pro_signin_input ' />
            <button className='button_green_gray' onClick={handleNextForm}>
                <p className='offer_button_text'>Enter Job Category</p>
            </button>
        </div>,
        <div>
            <p className='pro_signin_cta_infor'>Persoanl Information</p>
            <p className='text-center tell'> Tell us about yourself</p>
            <p className='pro_signin_input_title mt-10 mb-2'>Type of Service</p>

            <select className='pro_signin_input' value={selectedOption} onChange={handleOptionChange}>
                <option value=""></option>
                <option value="Option 1">Catering </option>
                <option value="Option 2">Childcare</option>
                <option value="Option 1">Cleaning </option>
                <option value="Option 2">Entertainment</option>
                <option value="Option 1">Appliance repair </option>
                <option value="Option 2">Mobile Mechanic</option>
            </select>
            <input type="text" value={selectedOption} readOnly />
            <p className='pro_signin_input_title mt-2 mb-2'>Sub Service</p>

            <select className='pro_signin_input' value={selectedOption} onChange={handleOptionChange}>
                <option value=""></option>
                <option value="Option 1">Catering </option>
                <option value="Option 2">Childcare</option>
                <option value="Option 1">Cleaning </option>
                <option value="Option 2">Entertainment</option>
                <option value="Option 1">Appliance repair </option>
                <option value="Option 2">Mobile Mechanic</option>
            </select>
            <input type="text" value={selectedOption} readOnly />
            <button className='button_green_gray' onClick={handleNextForm}>
                <p className='offer_button_text'>Enter Job Category</p>
            </button>
        </div>,
        <div>
            <p className='pro_signin_cta_infor'>We are glad you’re here.</p>
            <p className='text-center tell'> You will need to upload some documents
                to verify you as a Service provider?</p>
            <center>
                <img className='mt-6 mt-6' src='../../hi.png' />

            </center>
            <button className='button_green_pro' onClick={handleNextForm}>
                <p className='offer_button_text'>Verify Profile Now</p>
            </button>
            <p className='offer_button_text text-center mt-4'>Skip for now</p>

        </div>
    ]
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


                            {form[currentForm]}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
