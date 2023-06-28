import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Carousel from './carousel';
import List from './list';
import PopupModal from './modal';



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



    return (
        <div>
            <div className='locaaa flex'>
                {/* MODAL */}
                <div>
                    {/* <div className='flex '>
                        <img className='' width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                        <div className='cursor-pointer ml-4 greenlocation' onClick={onOpen}
                        >
                            Manchester , United kingdom
                        </div>
                        <img className='arrow mr-8' width="60" height="60" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />

                    </div> */}

                </div>
                <PopupModal />
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