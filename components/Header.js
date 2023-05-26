import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div className='main_header flex justify-between'>

        <div className='flex'>
          <img className='logo' src='./lo.png' />
          <div className='flex headBar'>
            <input className='seaching' placeholder='  Electrician' />
            <div className='line'></div>
            <input className='seaching' placeholder='   Locaton or postcode ' />
          </div>
        </div>

        <div className='flex'>
          <p className='users pro'>Professional</p>
          <p className='users'>Consumer</p>
        </div>
      </div>
      <div className='sub_header flex justify-between'>
        <div className='flex sub_head_text'>
          <p>Home </p>
          <p className='sub_menu_bar'>How it works </p>
          <div className='flex'>
            <p className='sub_menu_bar'>Service </p>
            <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
          </div>
          <div className='flex'>
            <p className='sub_menu_bar'>Resource </p>
            <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
          </div>
        </div>
        <div className='flex sub_action'>
          <div>
            <img className='sub_icon' width="50" height="50" src="https://img.icons8.com/ios/50/help--v1.png" alt="help--v1" />
            <p>Help</p>
          </div>
          <div className='account'>
            <img className='sub_icon ml-4' width="32" height="32" src="https://img.icons8.com/windows/32/gender-neutral-user.png" alt="gender-neutral-user" />
            <p>Account</p>
          </div>
          <div className='post mb-4'>
            <p>+ Post a job</p>
          </div>
        </div>
      </div>
    </div>
  )
}
