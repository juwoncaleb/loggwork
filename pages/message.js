import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';


export default function Message() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [stages, setStage] = useState(1)
  const [location, setLocation] = useState()
  const [budget, setBudget] = useState()
  const [zip, setZip] = useState()

  const [open, isOpen] = useState(1);
  const [files, setFiles] = useState([])
  const [images, setImages] = useState('')

  // DRAG AND DROP FEATURE , AUTO SEND TO CLOUDINARY
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        setFiles(prevState => [...prevState, reader.result])
      }
      reader.readAsDataURL(file)
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const uploadImages = async () => {
    const data = new FormData()
    data.append('file', files)
    data.append("upload_preset", "uploads")
    const upload = await axios.post("https://api.cloudinary.com/v1_1/ddjlsw268/image/upload", data)
    const { url } = upload.data
    let newUrl = url
    setImages(newUrl)

  }
  console.log(images)
  console.log(files);

  return (
    <div className={isModalOpen === true ? "grayBg" : null}>
      <div className='header flex justify-left message_header'>
        <img className='logo' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />
      </div>
      <div className='header message_content'>
        <div>
          <div className='flex'>
            <div className='back_arrow_div'>
              <img className='back_arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
            </div>
            <p className='post_header'>Post a Job</p>
          </div>
          <div className='flex'>
            <div className=''>
              <div className='flex'>
                <div>

                </div>
                <p className='stages_text_norm mt-2'>Job details</p>
              </div>
              <div className='flex mt-8'>

                <p className={location === 2 ? "stages_text_norm" : "stages_text"}>Location</p>
              </div>
              <div className='flex mt-8'>

                <p className={budget === 2 ? "stages_text_norm" : "stages_text"}>Budget</p>
              </div>
              <div className='flex mt-8'>
                
              <p className={zip === 2 ? "stages_text_norm" : "stages_text"}>Upload Images</p>
              </div>
            </div>


            <div className='message_form'>

              {/* JOB DETAILS */}

              {
                stages === 1 && (
                  <div>
                    <p className='form_text'>Title</p>
                    <input className='message_input mb-8' />
                    <p className='form_text'>Job Description</p>
                    <input required className='message_input_des' />
                    <div onClick={toggleModal} className='message_input mb-8 flex justify-between' >
                      <p className='mt-3 ml-2 form_text'>Category</p>
                      <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                    </div>
                    <div onClick={() => { setStage(2); setLocation(2) }} className='job_btn'>
                      <p className='form_text'>Enter location & Date</p>
                    </div>
                  </div>
                )
              }

              {/* LOCATION */}

              {
                stages === 2 && (
                  <div>
                    <p className='form_text'>Location</p>
                    <input placeholder='  Enter postcode' className='message_input mb-2' />
                    <p className='address_shade_text mb-8'>Street address , Postcode , P.O. Box </p>
                    <div onClick={() => { setStage(3); setBudget(2) }} className='location_button'>
                      <p className='form_text'>Enter a Budget</p>
                    </div>
                  </div>
                )
              }
              {/* BUDGET */}
              {
                stages === 3 && (
                  <div>
                    <div className='grid grid-cols-2 gap-4'>
                      <p className='form_text'>From</p>
                      <p className='form_text'>To</p>

                      <input placeholder='  $' className='message_input mb-2' />
                      <input placeholder='  $' className='message_input mb-2' />
                    </div>

                    <div onClick={() => { setStage(4) ; setZip(2) }} className='job_btn mt-4'>
                      <p className='form_text'>Upload Images</p>
                    </div>
                  </div>
                )
              }


              {/* UPLOAD IMAGES */}
              {
                stages === 4 && (
                  <div>
                    <div>
                      <p className='form_text'>Upload an image (Optional)</p>

                      <div className='grid md:grid-cols-4 grid-cols-2 mt-6 '>
                        <div className='image_upload' {...getRootProps()}>
                          <p>+</p>
                          <input {...getInputProps()} />
                        </div>

                        <div className='image_upload ' {...getRootProps()}>
                          <p>+</p>
                          <input {...getInputProps()} />
                        </div>

                        <div className='image_upload' {...getRootProps()}>
                          <p>+</p>
                          <input {...getInputProps()} />
                        </div>

                        <div className='image_upload' {...getRootProps()}>
                          <p>+</p>
                          <input {...getInputProps()} />
                        </div>
                      </div>
                      <p className='upload_image_texts'>Add supporting images to best showcase your job request</p>
                    </div>
                    <div onClick={uploadImages} className='job_btn mt-4'>
                      <p className='form_text'>Post Job</p>
                    </div>
                  </div>

                )
              }
              {/* MODAL */}
              {isModalOpen && (
                <div className='modal'>
                  <div className='flex justify-between'>
                    <p className='modal_head'>Categories</p>
                    <p className='modal_head_minus cursor-pointer' onClick={toggleModal}>x</p>
                  </div>
                  <input placeholder=' Search' className='message_input mb-8' />
                  <div className='flex justify-between'>
                    <div classN className='flex' ame='flex'>
                      <img className="local_icon" src='../../Icons/vector.png' />
                      <p className='cartegory_texts'>Catering</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />

                  </div>

                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className="local_icon" src='../../Icons/vector-1.png' />
                      <p className='cartegory_texts'>Childcare</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>

                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className="local_icon" src='../../Icons/vector-2.png' />
                      <p className='cartegory_texts'>Cleaning</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>

                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className="local_icon" src='../../Icons/vector-3.png' />
                      <p className='cartegory_texts'>Entertainment</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>
                  <div className=''>
                    <div className='flex justify-between'>
                      <div className='flex'>
                        <img className="local_icon" src='../../Icons/vector-4.png' />
                        <p className='cartegory_texts'>Appliance Repair</p>
                      </div>
                      <img onClick={() => isOpen(open === 1 ? null : 1)} className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />

                    </div>
                    {
                      open === 1 && (
                        <div className='ml-12'>
                          <div className='flex'>
                            <div className='outer_ring mr-4'>
                              <div className='inner_ring'>

                              </div>
                            </div>
                            <p>Domestic appliance repair</p>
                          </div>
                          <div className='flex mb-6 mt-2'>
                            <div className='outer_ring mr-4'>
                              <div className='inner_ring'>

                              </div>
                            </div>
                            <p>Electronic repair</p>
                          </div>
                        </div>
                      )
                    }
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className="local_icon" src='../../Icons/vector-5.png' />
                      <p className='cartegory_texts'>Mobile Mechanic</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className="local_icon" src='../../vector.png' />
                      <p className='cartegory_texts'>Pet Groomer</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>
                  <div className='flex justify-between'>
                    <div className='flex'>
                      <img className="local_icon" src='../../Icons/vector-9.png' />
                      <p className='cartegory_texts'>Computer <br /> Phone repair</p>
                    </div>
                    <img className='cart_arrow mt-4 mr-2' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>
                </div>
              )}
            </div>



          </div>

        </div>

      </div>
    </div>
  )
}
