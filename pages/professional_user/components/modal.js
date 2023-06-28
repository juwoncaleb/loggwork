import React, { useState } from 'react'
import {
    Modal,
    Button,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
export default function PopupModal() {
    const [isModal, setIsModal] = useState(true);
    const flickerModal = () => {
        setIsModal(!isModal)
    }
    const [isScheduled, setIsScheduled] = useState(false);

    const handleSwitch = () => {
        setIsScheduled(!isScheduled);
    };

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
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (

        <div>
            <>
                <div className='flex '>
                    <img className='' width="20" height="20" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1" />
                    <div className='cursor-pointer ml-4 greenlocation' onClick={onOpen}
                    >
                        Manchester , United kingdom
                    </div>
                    <img className='arrow mr-8' width="60" height="60" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />

                </div>
                <Modal
                    isCentered
                    onClose={onClose}
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
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

                            </div>          </ModalBody>

                    </ModalContent>
                </Modal>
            </>

        </div>
    )
}
