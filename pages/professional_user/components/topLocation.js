import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Carousel from './carousel';
import List from './list';


export default function BasicModal() {
    const [view, setView] = useState(true)
    const toggleView = () => {
        setView(!view);
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isChecked, setIsChecked] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const handleToggle = () => {
        setIsOnline(!isOnline);
    };
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    const [isScheduled, setIsScheduled] = useState(false);

    const handleSwitch = () => {
        setIsScheduled(!isScheduled);
    };
    const [isModal, setIsModal] = useState(true);
    const flickerModal = () => {
        setIsModal(!isModal)
    }


    return (
        <div>
            <div className='locaaa flex'>
                {/* MODAL */}
                <div>
                    <div className='flex '>
                        <img className='' width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                        <div className='cursor-pointer ml-4 greenlocation' onClick={handleOpen}>
                            Manchester , United kingdom
                        </div>
                        <img className='arrow mr-8' width="60" height="60" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />

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
                                <div onClick={flickerModal} className={isModal === true ? "location_div_head cursor-pointer" : "location_div_head_inactive cursor-pointer"} >
                                    Location
                                </div>
                                <div onClick={flickerModal} className={isModal === false ? "location_div_head cursor-pointer" : "location_div_head_inactive cursor-pointer"}>
                                    Availability
                                </div>
                            </div>
                            {
                                isModal === true && (
                                    <div>
                                        <p className='mb-4 mt-8'>Location</p>
                                        <input className='loca_input' />
                                        <div className='flex mt-6'>
                                            <img className='smallLocation' width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                                            <p className=' ml-6 useCurrentlocation'>Use my current location</p>
                                        </div>
                                        <button className='update_location_button' >
                                            <p className='offer_button_text'>Update Location</p>
                                        </button>
                                    </div>
                                )
                            }

                            {
                                isModal === false && (
                                    <div>
                                        <div className='flex justify-between mt-6'>
                                            <p className='offlineSwitch'> Toggle to go online or offline</p>
                                            <label htmlFor="toggleMode" className="flex items-center cursor-pointer">
                                                <div className="relative">
                                                    <input
                                                        id="toggleMode"
                                                        type="checkbox"
                                                        className="sr-only"
                                                        checked={isOnline}
                                                        onChange={handleToggle}
                                                    />
                                                    <div
                                                        className={`block ${isOnline ? 'bg-green-500' : 'bg-gray-500'
                                                            } w-14 h-8 rounded-full`}
                                                    ></div>
                                                    <div
                                                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform transform ${isOnline ? 'translate-x-full' : 'translate-x-0'
                                                            }`}
                                                    ></div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className='mt-6 flex justify-between '>
                                            <div>
                                                <p className='schedler'>Create a schedule</p>
                                                <p className='scheduler_sub_text mt-1'>Use this to automatically create avaliablity periods </p>
                                            </div>
                                            <label htmlFor="scheduleToggle" className="flex items-center cursor-pointer">
                                                <div className="relative">
                                                    <input
                                                        id="scheduleToggle"
                                                        type="checkbox"
                                                        className="sr-only"
                                                        checked={isScheduled}
                                                        onChange={handleSwitch}
                                                    />
                                                    <div
                                                        className={`block ${isScheduled ? 'bg-green-500' : 'bg-gray-300'
                                                            } w-14 h-8 rounded-full`}
                                                    ></div>
                                                    <div
                                                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform transform ${isScheduled ? 'translate-x-full' : 'translate-x-0'
                                                            }`}
                                                    ></div>
                                                </div>
                                            </label>
                                        </div>
                                        <p className='schedler mb-2 mt-4'>Time</p>
                                        <div className='flex duration_head justify-between mb-2'>
                                            <p>From</p>
                                            <p>To</p>
                                        </div>
                                        <div className='grid grid-cols-2 gap-6'>
                                            <input className='duration_input' />
                                            <input className='duration_input' />
                                        </div>
                                        <p className='schedler mb-2 mt-6 mb-4'>Days</p>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Sunday</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Monday</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Tuesday</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Wednesday</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Thursday</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Friday</label>
                                            </div>
                                            <div>
                                                <input type="checkbox" id="myCheckbox" />
                                                <label className='ml-4 daysOfWeek' for="myCheckbox">Saturday</label>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </Modal>
                </div>

                {/* TOGGLE */}
                <label htmlFor="toggle" className="flex mb-4  cursor-pointer">
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
                    <div className="ml-3 text-gray-700 font-medium">Toggle To go Online and offline</div>
                </label>

            </div>
            <div className='flex justify-between mt-10'>
                <p className='loggJobs'>Logg jobs</p>

                {view === true && (
                    <div className='cursor-pointer' onClick={toggleView}>
                        <div className='flex '>
                            <img className='mr-4 list_icon' src='../lis.png' />
                            <p>List view</p>
                        </div>

                    </div>
                )}

                {
                    view === false && (
                        <div className='cursor-pointer flex' onClick={toggleView}>
                            <img className='mr-4 list_icon' src='../chan.png' />
                            <p>Change View</p>
                        </div>
                    )
                }
            </div>
            {
                view === true && (
                    <div>
                        <center>
                            <Carousel />
                        </center>
                        <div className='locaaa'>
                            <p className='schedler'>Quote </p>
                            <p className='scheduler_sub_text mt-1'>Create job quote for cient jobs</p>
                            <button className='createQote'>
                                + Create quote
                            </button>

                            <p className='schedler mt-12 mb-8'>User Reviews</p>
                            <div className='grid grid-cols-2 gap-4'>
                                <button className='day_duration'>
                                    <p>108 in the last 60 days</p>
                                </button>
                                <button className='unread_messa'>
                                    <p>20 unread messages</p>
                                </button>
                            </div>
                            <p className='schedler mt-12 mb-10'>Overall completed jobs</p>
                            <div className='flex justify-between'>
                                <div>
                                    <CircularProgress value={100} color="#2FA500" size={120} thickness='9px'>
                                        <CircularProgressLabel>104</CircularProgressLabel>

                                    </CircularProgress>
                                    <p className='progress_state'>Total Bookings</p>
                                </div>
                                <div>
                                    <CircularProgress value={50} color="#FEAA3B" size={120} thickness='9px'>
                                        <CircularProgressLabel>50</CircularProgressLabel>

                                    </CircularProgress>
                                    <p className='progress_state'>Completed</p>
                                </div>
                                <div>
                                    <CircularProgress value={80} color="#FEAA3B" size={120} thickness='9px'>
                                        <CircularProgressLabel>80</CircularProgressLabel>

                                    </CircularProgress>
                                    <p className='progress_state'>Percentage</p>
                                </div>
                            </div>
                            <p className='schedler mt-12 mb-10'>Customer Satisfaction Measure</p>
                            <div className='flex justify-between'>
                                <CircularProgress value={100} color="#2FA500" size={120} thickness='9px'>
                                    <CircularProgressLabel>104</CircularProgressLabel>

                                </CircularProgress>
                                <div>
                                    <p className='satisfica_level'>Overall Satisfaction : <span className='stat_color'>60%</span></p>
                                    <p className='satisfica_level'> Response : 140</p>
                                    <p className='mt-4 scheduler_sub_text'> Survey Date</p>
                                    <p className='satisfica_level'>12/01/20  -  14/08/21</p>

                                </div>
                            </div>

                            <div className='custoner_ratting'>
                                <p className='schedler mt-12 mb-10'>Customer ratting</p>
                                <div className='flex justify-between'>
                                    <p className='datesFun'>12/01/20  -  13/01/20</p>
                                    <div className='flex'>
                                        <img className='mr-1' src='../starb.png' />
                                        <img className='mr-1' src='../starb.png' />
                                        <img className='mr-1' src='../starb.png' />
                                        <img className='mr-1' src='../starb.png' />
                                        <img className='mr-1' src='../starb.png' />
                                    </div>

                                </div>
                                <div className='flex justify-between mt-4 mb-20'>
                                    <p className='datesFun'>56 Reviews</p>
                                    <p className='datesFun'>4.6 out of 5.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                view === false && (
                    <List />
                )
            }
        </div>

    );
}