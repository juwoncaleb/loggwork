import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='logo' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />
      <div className='flex'>
        <img width="30" height="30" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1" />
        <p>Home</p>
      </div>
      <div className='flex'>
        <img width="25" height="25" src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/1A1A1A/external-briefcase-business-inkubators-glyph-inkubators.png" alt="external-briefcase-business-inkubators-glyph-inkubators" />
        <p>Jobs</p>
      </div>
      <div className='flex'>
        <img src='./arc.pmg' />
        <p>Activities</p>

      </div>
      <div className='flex'>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/wallet--v1.png" alt="wallet--v1" />
        <p>Wallet</p>
      </div>
      <div className='flex'>
      <img width="50" height="50" src="https://img.icons8.com/ios/50/speech-bubble-with-dots--v1.png" alt="speech-bubble-with-dots--v1"/>
        <p>Message</p>
      </div>
      <div>
      <img width="50" height="50" src="https://img.icons8.com/ios/50/name--v1.png" alt="name--v1"/>
        <p>Profile</p>
      </div>
    </div>
  )
}
