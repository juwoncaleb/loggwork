import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const [opener, setOpener] = useState()



  return (
    <div>
      <div className='header desktop_header'>
        <div className='main_header flex justify-between'>

          <div className='flex'>
            <img className='logo' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />
            <div className='flex headBar'>
              <input className='seaching' placeholder='   Electrician' />
              <div className='line'></div>
              <input className='seaching' placeholder='   Locaton or postcode ' />
            </div>
          </div>

          <div className='flex'>
            <div onClick={() => setOpener(1)} >
              <Link href='./../professional/LandingPage'>
                <p className='users pro'>Professional</p>
              </Link>
              <hr className={opener === 1 ? "green_line_header" : null} />
            </div>
            <div onClick={() => setOpener(2)} >
              <Link href='./../consumer/Landingpage'>
                <p className='users'>Consumer</p>
                <hr className={opener === 2 ? "green_line_header" : null} />
              </Link>
            </div>
          </div>
        </div>
        <div className='sub_header flex justify-between'>
          <div className='flex sub_head_text'>
            <p className='sub_menu_bar'>How it works </p>
            <div>
              <div className='flex'>
                <p className='sub_menu_bar'>Service </p>
                <img onClick={handleClick} className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
              </div>
              {isVisible && <div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
              </div>}
            </div>
            <div>
              <div className='flex'>
                <p className='sub_menu_bar'>Resource </p>
                <img onClick={handleOpen} className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
              </div>
              {open && <div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
                <div className='flex'>
                  <p className='sub_menu_bar'>Service </p>
                  <img className='arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                </div>
              </div>}
            </div>
          </div>
          <div className='flex sub_action'>
            <div>
              <img className='sub_icon' width="50" height="50" src="https://img.icons8.com/ios/50/help--v1.png" alt="help--v1" />
              <p>Help</p>
            </div>
            <div className='account'>
              <img className='sub_icon md:ml-4 ml-2' width="32" height="32" src="https://img.icons8.com/windows/32/gender-neutral-user.png" alt="gender-neutral-user" />
              <p>Account</p>
            </div>
            <div className='post mb-4'>
              <p>+ Post a job</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile_header'>
        <div className='flex justify-between header '>
          <img className='logo' src='https://ik.imagekit.io/juwoncaleb/lo_wCz74a4lV.webp?updatedAt=1685112934249' />

          <div className='flex ham_men'>
            <img className='ham  mr-4' width="32" height="32" src="https://img.icons8.com/windows/32/gender-neutral-user.png" alt="gender-neutral-user" />
            <img onClick={handleMenu} className={menu === false ? 'ham cursor-pointer' : "no_men"} width="50" height="50" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1" />
            <img onClick={handleMenu} className={menu === true ? 'ham cursor-pointer' : "no_men"} width="50" height="50" src="https://img.icons8.com/ios-filled/50/multiply.png" alt="multiply" />

          </div>

        </div>
        {
          menu === true && (
            <div className='header '>
              <div className='flex selctions justify-between mt-4 mb-2'>
                <div >
                  <p>Consumer</p>
                </div>
                <div>
                  <p>Professional</p>
                </div>
              </div>
              <input className='mob_search mt-2' placeholder='  Try Searching Capenter' />
              <div className=' nav_menu_mob mt-2'>
                <p className='sub_menu_bar'>How it works </p>
                <div>
                  <div className='flex'>
                    <p className='sub_menu_bar'>Service </p>
                    <img onClick={handleClick} className='arrow small_Arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>
                  {isVisible && <div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                  </div>}
                </div>
                <div>
                  <div className='flex'>
                    <p className='sub_menu_bar'>Resource </p>
                    <img onClick={handleOpen} className='arrow small_Arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                  </div>
                  {open && <div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                    <div className='flex'>
                      <p className='sub_menu_bar'>Service </p>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
