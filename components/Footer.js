import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()

  return (
    <div className='footer '>
      <div className='flex justify-around log_items'>
        <div className='logTab'>
          <img className='ft_logo' src='./footerlogo.png' />
          <div onClick={() => {
            router.push('/professional/LandingPage')
          }} className='btn_footer btn_footer_ft cursor-pointer'>
            <p className='ml-1'>Become a Professional</p>
          </div>
          <div onClick={() => {
            router.push('/message')
          }} className='btn_footer postajpb cursor-pointer'>
            <p>Post a Job</p>
          </div>
        </div>
        <div>
          <p className='footer_head'>Homeowner</p>
          <Link href='./../consumer/work'>
            <p className='footer_sub'>How it works</p>
          </Link>
          <Link href='./../earn'>
            <p className='footer_sub'>Earn</p>
          </Link>
          <Link href='./../service'>
            <p className='footer_sub'>User Agreement</p>
          </Link>
          <Link href='./../consumer/faq'>
            <p className='footer_sub'>Help & Contact</p>
          </Link>
        </div>
        <div>
          <p className='footer_head'>Professional</p>
          <p className='footer_sub'>Sign Up</p>
          <Link href='./../consumer/articles/blog'>
            <p className='footer_sub'>Blog</p>
          </Link>
          <p className='footer_sub'>Contact Us</p>
        </div>
        <div>
          <p className='footer_head'>Loggworks</p>
          <Link href='./../about' className='flex  '>
            <p className='footer_sub '>About </p>
          </Link>
          <Link href='./../career' className='flex  '>
          <p className='footer_sub'>Careers</p>
          </Link>
          <p className='footer_sub'>Partners</p>
          <p className='footer_sub'>Influencer program</p>
        </div>
        <div>
          <p className='footer_head'>Follow us</p>
          <div className='flex '>
            <img className='mr-4 footer_icon' src='./Frame.png' />
            <p className='footer_sub'>Facebook</p>
          </div>
          <div className='flex'>
            <img className='mr-4 footer_icon' src='./tw.png' />
            <p className='footer_sub'>Twitter</p>
          </div>
          <div className='flex'>
            <img className='mr-4 footer_icon' src='./in.png' />
            <p className='footer_sub'>Instagram</p>
          </div>
          <div className='flex'>
            <img className='mr-4 footer_icon' src='./yt.png' />
            <p className='footer_sub'>Youtube</p>
          </div>
          <div className='flex'>
            <img className='mr-4 footer_icon' src='./li.png' />
            <p className='footer_sub'>Linkedin</p>
          </div>
        </div>
      </div>

      <div className='footer_line'></div>
      <div className='footer_sub flex justify-between'>
        <p>© Copyright 2022 loggwork Ltd. All Rights Reserved</p>
        <div className='flex '>
          <p>Term of Use</p>
          <div className='straight'></div>
          <p>Privacy Policy</p>
          <div className='straight'></div>
          <p>Cookie</p>
          <div className='straight'></div>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  )
}
