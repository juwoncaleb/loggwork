import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';

export default function Faq() {
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(1)

  return (
    <div>
      <Header />
      <div className='consumer_faq mt-4'>
        <p className='consumer_faq_head'>Get all the help you need.</p>
        <p className='consumer_faq_sub'> Loggworks connect homeowners to genuine and reliable service </p>
        <p className='consumer_faq_sub'>providers who provide easy-to-book and hassle-free services.</p>
      </div>

      <div className='faq_contact'>
        <div className='flex mt-14 justify-center'>
          <div onClick={() => setOpen(1)} className={open === 1 ? "faq_tab_white" : "faq_tab"}>
            <p>Frequently Asked Questions</p>
          </div>
          <div onClick={() => setOpen(2)} className={open === 2 ? "faq_tab_white" : "contact_form"} >
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      {/* FAQ & CONSTACT TAB */}
      {
        open === 1 && (
          <div className='faq_contact header'>
            <div>

              <div className='faq_head'>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>Is there any warranty exclusions?</p>
                    <button className='tog' onClick={() => setActive(active === 1 ? null : 1)}>
                      {active === 1 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 1 && (
                    <div >
                      <p>
                        Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking
                        about is sashimi), but actually the term sushi just refers to
                        the type of vinegar rice used in the traditional Japanese cuisine. The great thing
                        about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>Can I use multiple discount codes?</p>
                    <button className='tog' onClick={() => setActive(active === 2 ? null : 2)}>
                      {active === 2 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 2 && (
                    <div>
                      <p>
                        “Software is never completed, it is just abandoned“- is a very popular saying in
                        the tech Ecosystem. What does this mean, no matter how much you try to adapt and
                        optimize it, there will always be something to optimize — Make it faster, smoother, etc
                        <a href='https://medium.com/@calebomojuwon/software-is-never-completed-it-is-just-abandoned-is-a-very-popular-saying-in-the-tech-ecosystem-5ddaba2256c9' className='read'>READ MORE</a>

                      </p>

                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>Do I have to pay customs fees or duty on my package?</p>
                    <button className='tog' onClick={() => setActive(active === 3 ? null : 3)}>
                      {active === 3 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 3 && (
                    <div>
                      <p>
                        “Optimizing the Largest Contentful Paint (LCP) of a web application can greatly
                        improve the user experience of the website and its general performance.
                        This is a very important goal for most businesses, as better user
                        experience leads to higher conversion rates and lower bounce rates
                        <a href='https://medium.com/@calebomojuwon/guide-to-rev-up-your-lcp-score-and-outpace-the-competition-b11194faf622' className='read'>READ MORE</a>
                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>How soon will my order ship?</p>
                    <button className='tog' onClick={() => setActive(active === 4 ? null : 4)}>
                      {active === 4 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 4 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>Why is there a checkout limit? / What are all the checkout limits?</p>
                    <button className='tog' onClick={() => setActive(active === 5 ? null : 5)}>
                      {active === 5 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 5 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>What is the accumulated delivery fee for? How much is the handling fee?</p>
                    <button className='tog' onClick={() => setActive(active === 6 ? null : 6)}>
                      {active === 6 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 6 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>What is the most used version?</p>
                    <button className='tog' onClick={() => setActive(active === 7 ? null : 7)}>
                      {active === 7 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 7 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>How can I track my orders & payment?</p>
                    <button className='tog' onClick={() => setActive(active === 8 ? null : 8)}>
                      {active === 8 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 8 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>How do you ship my orders?</p>
                    <button className='tog' onClick={() => setActive(active === 9 ? null : 9)}>
                      {active === 9 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 9 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>Why must I make payment immediately at checkout?</p>
                    <button className='tog' onClick={() => setActive(active === 10 ? null : 10)}>
                      {active === 10 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 10 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>How long will it take for my order to arrive after I make payment?</p>
                    <button className='tog' onClick={() => setActive(active === 11 ? null : 11)}>
                      {active === 11 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 11 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>How do I activate my account?</p>
                    <button className='tog' onClick={() => setActive(active === 12 ? null : 12)}>
                      {active === 12 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 12 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
                <div className='last'>
                  <div className='flex justify-between mt-10 mb-8'>
                    <p className='question'>Will I be charged for an exchange?</p>
                    <button className='tog' onClick={() => setActive(active === 13 ? null : 13)}>
                      {active === 13 ? <p>-</p> : <p>+</p>}
                    </button>
                  </div>
                  {active === 13 && (
                    <div>
                      <p>
                        The strength of a person is often measured not by their success during favorable conditions,
                        but by how they react when facing adversity. Similarly, the quality of the software is
                        not fully seen when it is functioning under ideal conditions,
                        but when it is tested by unexpected events such as network instability.
                        <a href='https://medium.com/@calebomojuwon/surviving-the-storm-is-your-software-ready-to-weather-network-instability-d5834e3160cd' className='read'>READ MORE</a>

                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        )
      }


      {/* CONATACT FORMA */}

      {
        open === 2 && (
          <div className='form header mt-4'>
            <div className='flex justify-between'>
              <p>First name </p>
              <p>Last name </p>
            </div>
            <div className='flex justify-between'>
              <input className='info_details' />

              <input className='info_details' />

            </div>
            <div className='mt-4'>
              <p>Email Addresss</p>
              <input className='large_bar' />
            </div>
            <div className='mt-4'>
              <p>Subjects</p>
              <input className='large_bar' />
            </div>
            <div className='mt-4'>
              <p>Email Addresss</p>
              <input className='larger_bar' />
            </div>
            <div className='flex mt-4 justify-between'>
              <div class=" flex subbutoon">
                <button className='contact_btn'>
                  <p>Submit</p>
                </button>
              </div>
            </div>
            <div className='  faq_add'>

              <img className='logo' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />
              <p className='faq_address'>31 London Road, Sunderland , SR13 4CU</p>
              <div className='flex justify-between'>
                <p>+44 7794754963, +44 8094754926</p>
                <div className='flex '>
                  <img className='mr-3' src='../../fb.png' />
                  <img className='mr-3' src='../../twitter.png' />

                  <img className='mr-3' src='../../ri_linkedin-box-fill.png' />
                  <img className='mr-3' src='../../ri_instagram-fill.png' />
                  <img className='mr-3' src='../../ri_youtube-fill.png' />

                </div>
              </div>


            </div>
          </div>
        )
      }
      <Footer />
    </div>
  )
}
