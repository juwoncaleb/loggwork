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
      <div className='card gap-4  justify-between flex'>
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
    </div>
  )
}
