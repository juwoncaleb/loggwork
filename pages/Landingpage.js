import React from 'react'
import Header from '../components/Header'

export default function Landingpage() {
  return (
    <div className='land'>
      <Header />
      <div className='feat flex justify-around'>
        <p className='feat_text'>FEATURED ON</p>
        <img className='tel' src='./tel.png' />
        <img className='ev' src='./ev.png' />
        <img className='lon' src='./lon.png' />
        <img className='fast' src='./fd.png' />

      </div>
      <h3 className='secure'>Secured payment and privacy on Loggworks</h3>
      <div className='card  justify-between flex'>
        <div>
          <img className='card_icon' src='./safe.png' />
          <p className='card_header'>Privacy Protection</p>
          <div className='card_item'>
            <p>You’ll never have to share your personal information with tradesmen or
              home service professionals on Loggworks.
              Communicate  with service providers securely through our
              direct messaging feature until you’re ready to make a booking.</p>
          </div>
        </div>
        <div>
          <img className='card_icon' src='./card.png' />
          <p className='card_header'>Payment Protection</p>
          <div className='card_item'>
            <p> All your payments are protected by a highly secure Escrow account.
              Pay in advance or on completion with just a few clicks of a button, whenever you want.</p>
          </div>
        </div>
        <div>
          <img className='card_icon' src='./check.png' />
          <p className='card_header'>Trusted Professional</p>
          <div className='card_item'>
            <p>We use the Self-Employed Quality Control Scheme =to comprehensively screen all
              home service professionals on Loggworks — for your peace of mind.
            </p>
          </div>
        </div>
      </div>
      <p className='explore'>Explore popular services</p>
      <div className='grid grid-cols-6'>
        <div>
          <img className='trade' src='./ele.png' />
          <div className='shade'>
            <p className='trade_text'>Electrician</p>

          </div>
        </div>
        <div>
          <img className='trade' src='./chi.png' />
          <div className='shade'>
            <p className='trade_text'>ChildMinder</p>

          </div>
        </div>
        <div>
          <img className='trade' src='./cap.png' />
          <div className='shade'>
            <p className='trade_text'>Capenter</p>

          </div>
        </div>
        <div>
          <img className='trade' src='./cle.png' />
          <div className='shade'>
            <p className='trade_text'>Cleaner</p>

          </div>
        </div>
        <div>
          <img className='trade' src='./care.png' />
          <div className='shade'>
            <p className='trade_text'>Care Worker</p>

          </div>
        </div>
        <div>
          <img className='trade' src='./cook.png' />
          <div className='shade'>
            <p className='trade_text'>Cook</p>

          </div>
        </div>
      </div>
      <div className='flex justify-between services_offer'>
        <div className='service_media'>
          <img className='asia' src='./asai.png' />
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
        <div className='grid grid-cols-4'>
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
        <div className='grid grid-cols-4'>
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
        <div className='grid grid-cols-4'>
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
        <div className='offer_text'>
          <p className='offer_header'>Can’t find the professional you are looking for??</p>
          <p className='offer_sub_text'>All your payments are protected by a highly secure Escrow account.
            Pay in advance or on completion. with just a few clicks of a button, whenever.</p>
          <button className='button_green'>
            <p className='offer_button_text'>Post a Job</p>
          </button>
        </div>
        <div className='service_media'>
          <img className='asia' src='./gyal.png' />
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
            <img  className='stars' src='./star1.png' />
            <img  className='stars'src='./stae2.png' />

          </div>
        </div>
      </div>
    </div>
  )
}
