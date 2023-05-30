import React from 'react'
import Header from '../components/Header'

import Footer from '../components/Footer';

export default function Landingpage() {


  return (
    <div className=''>
      <Header />
      <div className='hero mt-4'>
        <p className='hero_header'>Find reliable home service</p>
        <p className='hero_header'>provider near you</p>
        <p className='hero_subText'> Loggworks connect homeowners to genuine and reliable  <br /> service providers
          who provide easy-to-book and hassle-free services.</p>
        <div className='flex'>
          <input placeholder='   Try searching capenter' className='searchBar' />
          <div className='post_hero'>
            <p>+ Post a job</p>
          </div>
        </div>
      </div>
      <div className='feat flex justify-around'>
        <p className='feat_text'>FEATURED ON</p>
        <img className='tel' src='./tel.png' />
        <img className='ev' src='./ev.png' />
        <img className='lon' src='./lon.png' />
        <img className='fast' src='./fd.png' />

      </div>

      <div className='land'>
        <h3 className='secure'>Secured payment and privacy on Loggworks</h3>
        <div className='card abt_h gap-10  grid grid-cols-3'>
          <div>
            <img className='ld_icon' src='./safe.png' />
            <p className='card_header'>Privacy Protection</p>
            <div className='card_item'>
              <p>You’ll never have to share your personal information with tradesmen or
                home service professionals on Loggworks.
                Communicate  with service providers securely through our
                direct messaging feature until you’re ready to make a booking.</p>
            </div>
          </div>
          <div>
            <img className='ld_icon' src='./card.png' />
            <p className='card_header'>Payment Protection</p>
            <div className='card_item'>
              <p> All your payments are protected by a highly secure Escrow account.
                Pay in advance or on completion with just a few clicks of a button, whenever you want.</p>
            </div>
          </div>
          <div>
            <img className='ld_icon' src='./check.png' />
            <p className='card_header'>Trusted Professional</p>
            <div className='card_item'>
              <p>We use the Self-Employed Quality Control Scheme =to comprehensively screen all
                home service professionals on Loggworks — for your peace of mind.
              </p>
            </div>
          </div>
        </div>
        <p className='explore'>Explore popular services</p>
        <div className='grid grid-cols-6 gap-4'>
          <div className='trade_driv'>
            <img className='trade' src='./ele.png' />
            <div className='shade'>
              <p className='trade_text'>Electrician</p>

            </div>
          </div>
          <div className='trade_driv'>
            <img className='trade' src='./chi.png' />
            <div className='shade'>
              <p className='trade_text'>ChildMinder</p>

            </div>
          </div>
          <div className='trade_driv'>
            <img className='trade' src='./cap.png' />
            <div className='shade'>
              <p className='trade_text'>Capenter</p>

            </div>
          </div>
          <div className='trade_driv'>
            <img className='trade' src='./cle.png' />
            <div className='shade'>
              <p className='trade_text'>Cleaner</p>

            </div>
          </div>
          <div className='trade_driv'>
            <img className='trade' src='./care.png' />
            <div className='shade'>
              <p className='trade_text'>Care Worker</p>

            </div>
          </div>
          <div className='trade_driv'>
            <img className='trade' src='./cook.png' />
            <div className='shade'>
              <p className='trade_text'>Cook</p>

            </div>
          </div>
        </div>
        <div className='flex justify-between services_offer'>
          <div className='service_media'>
            <img className='asia' src='./asai.png' />
            <img className='asia_tag' src='./cards.png' />
          </div>
          <div className='offer_text'>
            <p className='offer_header'>Do you have a service to offer?</p>
            <p className='offer_sub_text'>All your payments are protected by a highly secure Escrow account.
              Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
            <button className='button_green'>
              <p className='offer_button_text'>Become a professional</p>
            </button>
          </div>
        </div>
        <p className='cartegory'>Explore services by categories</p>
        <div className='grid grid-cols-8'>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector.png' />
            </div>
            <p className='cartegory_texts'>Catering</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-1.png' />
            </div>
            <p className='cartegory_texts'>Childcare</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-2.png' />
            </div>
            <p className='cartegory_texts'>Cleaning</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-3.png' />
            </div>
            <p className='cartegory_texts'>Entertainment</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-4.png' />
            </div>
            <p className='cartegory_texts'>Appliance Repair</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-5.png' />
            </div>
            <p className='cartegory_texts'>Mobile Mechanic</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-6.png' />
            </div>
            <p className='cartegory_texts'>Personal <br /> Assistance</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./vector.png' />
            </div>
            <p className='cartegory_texts'>Pet Groomer</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector.png' />
            </div>
            <p className='cartegory_texts'>Recovery <br /> Services</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-9.png' />
            </div>
            <p className='cartegory_texts'>Computer <br /> Phone repair</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-2.png' />
            </div>
            <p className='cartegory_texts'>Removal Service</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-11.png' />
            </div>
            <p className='cartegory_texts'>Tradesman</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-4.png' />
            </div>
            <p className='cartegory_texts'>Transport <br /> Services</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-5.png' />
            </div>
            <p className='cartegory_texts'>Dry cleaning & <br /> Laundry</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./Icons/vector-14.png' />
            </div>
            <p className='cartegory_texts'>Health, Wellness <br /> & Beauty</p>
          </div>
          <div>
            <div className='cartegory_icon_border'>
              <img src='./vector.png' />
            </div>
            <p className='cartegory_texts'>Tuition <br /> & Classes</p>
          </div>
        </div>
        <div>
          <div className='flex justify-between trademen_head'>
            <p className='tradeMen'>Tradesmen</p>
            <p className='tradeMen_view'>+ View All</p>

          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div>
              <img className='trade_Card' src='./img.png' />
              <p className='trade_texts'>Construction</p>
            </div>
            <div>
              <img className='trade_Card' src='./img-1.png' />
              <p className='trade_texts'>Gardening & Landscaping</p>
            </div>
            <div>
              <img className='trade_Card' src='./img-2.png' />
              <p className='trade_texts'>Painter</p>

            </div>
            <div>
              <img className='trade_Card' src='./img-3.png' />
              <p className='trade_texts'>Electrician</p>

            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between children_care'>
            <p className='childcare_head'>Childcare</p>
            <p className='childcare_view'>+ View All</p>

          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div>
              <img className='trade_Card' src='./img-4.png' />
              <p className='trade_texts'>Babysitters</p>
            </div>
            <div>
              <img className='trade_Card' src='./img-5.png' />
              <p className='trade_texts'>Childminders</p>
            </div>
            <div>
              <img className='trade_Card' src='./img-6.png' />
              <p className='trade_texts'>Nanies</p>

            </div>
            <div>
              <img className='trade_Card' src='./img-7.png' />
              <p className='trade_texts'>Nursery</p>

            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-between children_care'>
            <p className='childcare_head'>Entertainment</p>
            <p className='childcare_view'>+ View All</p>

          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div>
              <img className='trade_Card' src='./img-8.png' />
              <p className='trade_texts'>Event planner</p>
            </div>
            <div>
              <img className='trade_Card' src='./img-9.png' />
              <p className='trade_texts'>Event coverage</p>
            </div>
            <div>
              <img className='trade_Card' src='./img-10.png' />
              <p className='trade_texts'>Phtography and film</p>

            </div>
            <div>
              <img className='trade_Card' src='./img-10.png' />
              <p className='trade_texts'>Disk Jockey</p>

            </div>
          </div>
        </div>
        <div className='flex justify-between services_offer'>
          <div className='offer_text_2'>
            <p className='offer_header'>Can’t find the professional you are looking for??</p>
            <p className='offer_sub_text'>All your payments are protected by a highly secure Escrow account.
              Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
            <button className='button_green'>
              <p className='offer_button_text'>Post a Job</p>
            </button>
          </div>
          <div className='service_media'>
            <img className='asia' src='./gyal.png' />
            <img className='asia_tag2' src='./cards.png' />

          </div>
        </div>
        <div className='testimonial'>
          <p className='testimonal_header'>We are trusted by many across the UK</p>
          <div>
            <div className='flex'>
              <img className='strboy' src='./star.png' />
              <p className='trust'>Trustpilot</p>
            </div>
            <div className='flex'>
              <img className='stars' src='./star1.png' />
              <img className='stars' src='./star1.png' />
              <img className='stars' src='./star1.png' />
              <img className='stars' src='./star1.png' />
              <img className='stars' src='./stae2.png' />

            </div>
          </div>
        </div>



        <div className='area_of_service'>
          <p className='area'>View Home service professionals in your area.</p>
          <div className='grid grid-cols-6'>
            <div>
              <p className='location'>London</p>
              <p className='location'>Bristol</p>
              <p className='location'>Leicester</p>
              <p className='location'>Northampton</p>
              <p className='location'>York</p>

            </div>
            <div>
              <p className='location'>Manchester</p>
              <p className='location'>Sheffield</p>
              <p className='location'>Aberdeen</p>
              <p className='location'>Peterborough</p>
              <p className='location'>Bolton, Lancashire</p>

            </div><div>
              <p className='location'>Birmingham</p>
              <p className='location'>Belfast</p>
              <p className='location'>Coventry</p>
              <p className='location'>Reading</p>
              <p className='location'>Derby</p>

            </div><div>
              <p className='location'>Glassgow</p>
              <p className='location'>Edinburgh</p>
              <p className='location'>Southampton</p>
              <p className='location'> Doncaster</p>
              <p className='location'>Oxford</p>

            </div><div>
              <p className='location'>Newcastle</p>
              <p className='location'>Nottingham</p>
              <p className='location'>  Norwich</p>
              <p className='location'>Hull</p>
              <p className='location'>Exeter</p>

            </div><div>
              <p className='location'>Liverpool</p>
              <p className='location'>Cardiff</p>
              <p className='location'>Swansea</p>
              <p className='location'>Bradfoed, West Yorkshire</p>
              <p className='location'>Leeds</p>

            </div>
          </div>
        </div>
        <div>

        </div>
        <div className='phone_frame flex justify-between'>
          <img className='phone' src='./phone.png' />
          <div className='phone_text'>
            <p className='access'>Access Loggworks <br /> on your mobile phone</p>
            <p className='access_subText'>Enjoy the full experience of Loggworks on our mobile app. What’s more?
              <br />
              You get to enjoy all of our services convieniently. </p>
            <button className='access_button'>
              Coming soon
            </button>
          </div>

        </div>

        <div className='grid grid-cols-3 gap-4 blog'>
          <div>
            <img className='blog_img' src='./blog2.png' />
            <p className='blog_head'>5 Tips for Finding the Right Home Service Professionals.</p>
            <p className='blog_sub'>Loggworks helps you get special offers, connect you to top vetted and reliable service professionals  </p>
            <div className='flex'>
              <p className='read'>Read More </p>
              <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
            </div>
          </div>
          <div>
            <img className='blog_img' src='/blog1.png' />
            <p className='blog_head'>7 tips for running a successful cleaning service company.</p>
            <p className='blog_sub'>Loggworks helps you get special offers, connect you to top vetted and reliable service professionals  </p>
            <div className='flex'>
              <p className='read'>Read More </p>
              <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
            </div>
          </div>

          <div>
            <img className='blog_img' src='./blog3.png' />
            <p className='blog_head'>How to know the best child care worker for your kids.</p>
            <p className='blog_sub'>Loggworks helps you get special offers, connect you to top vetted and reliable service professionals  </p>
            <div className='flex'>
              <p className='read'>Read More </p>
              <img className='arrow_more' width="24" height="24" src="https://img.icons8.com/android/24/long-arrow-up.png" alt="long-arrow-up" />
            </div>
          </div>
        </div>
        <button className='CTA'>
          <p>Checkout Our Blog</p>
        </button>
      </div>
      <Footer />
    </div>
  )
}
