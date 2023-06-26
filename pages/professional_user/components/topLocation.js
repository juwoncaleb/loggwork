import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='locaaa flex'>
            {/* MODAL */}
            <div>
                <div className='flex '>
                    <img className='' width="30" height="50" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                    <div className='cursor-pointer ml-4' onClick={handleOpen}>
                        hjk
                    </div>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className='modal_location' >
                        <p className='locoAndAval mb-6'>Location & Availabiluty</p>
                        <div className='locationAndAvilHeadee flex justify-between'>
                            <div className='location_div_head'>
                                Location
                            </div>
                            <div className='ava_div_head'>
                                Availabiluty
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </Modal>
            </div>

            {/* TOGGLE */}
            {/* <label htmlFor="toggle" className="flex  cursor-pointer">
                <div className="relative">
                    <input
                        id="toggle"
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={handleChange}
                    />
                    <div
                        className={`block ${isChecked ? 'bg-green-500' : 'bg-gray-300'
                            } w-14 h-8 rounded-full`}
                    ></div>
                    <div
                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform transform ${isChecked ? 'translate-x-full' : 'translate-x-0'
                            }`}
                    ></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Toggle Button</div>
            </label> */}
        </div>
    );
}