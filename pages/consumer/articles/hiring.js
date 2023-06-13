import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer';

export default function Hiring() {
    return (
        <div >
            <Header />
            <div className='header mb-14'>
                <div className='flex  mt-4 mb-4'>
                    <p className='hiring_small_link'>Blog </p>
                    <img className='nav_Arrow' width="50" height="50" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than" />
                    <p className='blog_present'>
                        5 Tips for Finding the Right Home Service Professional</p>
                </div>

                <div className='header article_image'>
                    <div>
                        <p className='article_header'>5 Tips for Finding the Right Home Service Professionals.</p>
                        <p className='article_cartegory'>ADVICE</p>
                        <img className='harmer' src='./../../hammer.png' />
                    </div>
                </div>
                <div className='flex baby justify-center mt-6'>
                    {/* ARTICLE TEXT */}
                    <div className='article_content '>
                        <p className='mb-8 key_point'>Finding a babysitter you trust to care for your children can be a daunting task.
                            Here are some tips to help you find the right person for the job:</p>


                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 1. Look for a babysitter with experience</span>: It's important to find a babysitter who has
                            experience caring for children, especially if you have younger children or children with special needs.
                            This can give you peace of mind knowing that the babysitter has the skills and knowledge necessary to handle
                            any situation that may arise. </p>

                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 2. Check references:</span>:  Ask for references from previous families the babysitter has worked for,
                            and follow up on those references to make sure the babysitter has a track record of being reliable and responsible.
                            This can give you an idea of the babysitter's work ethic and the quality of care they provide. </p>

                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 3. Consider certification:</span>: Some babysitters may have certification
                            in areas such as CPR or first aid, which can be helpful in case of an emergency. This can provide an extra layer of protection
                            for your children and give you added confidence in the babysitter's ability to handle unexpected situations. </p>

                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 4. Set clear expectations</span>: Make sure the babysitter knows your
                            expectations for the job, including the duties they will be responsible for and any rules or guidelines you have for your children.
                            This can help ensure that the babysitter is on the same page as you and can provide the level of care you expect.</p>


                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 5. Discuss pay and scheduling</span>: Be clear
                            about how much you are willing to pay and when you need the babysitter to be available. It's also a good idea to have a backup plan in
                            case the babysitter is not available. This can help prevent misunderstandings and ensure that everyone is on the same page. </p>


                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 6. Conduct an interview</span>: Consider conducting an in-person interview
                            to get a better sense of the babysitter's personality and suitability for the job.
                            This can be a good opportunity to ask any questions you may have and get a feel for whether the babysitter is a good fit for your family. </p>
                        <p className='mt-8 key_point'> <span className='aricle_titled_head mt-8'> 7. Trust your instincts:</span>: Ultimately, it's important to trust your
                            instincts and choose a babysitter you feel comfortable with and who you believe will be a good fit for your family.
                            Trusting your gut can help you feel confident in your decision and give you peace of mind knowing your children are in good hands. </p>


                    </div>

                    {/* ARTICLES ICONS */}
                    <div>
                        <div className='share'>
                            <p className='share_text'>Share this aricle</p>
                            <div className='flex share_icons '>
                                <img className='article_icon' src='./../../fb.png' />
                                <img className='article_icon' src='./../../twitter.png' />
                                <img className='article_icon' src='./../../ri_linkedin-box-fill.png' />
                                <img className='article_icon' src='./../../ic_round-mail.png' />
                                <img className='article_icon' src='./../../ri_link.png' />
                            </div>
                        </div>
                        <div className='professiona_cta'>
                            <div className='offer_service'>
                                <p className='offer_your_services'>Do you have a <br /> professional service to <br /> offer?</p>
                                <p className='offer_your_services_subtext'>Post a job with your price in <br /> mind, then get offers</p>
                                <div className='cta_professinal'>
                                    <p p className='cta_pro_text'>Become a Professional</p>
                                </div>
                            </div>
                        </div>
                        <div className='professiona_post'>
                            <div className='offer_service'>
                                <p className='offer_your_services'>Can’t find the <br /> professional you are <br /> looking for?? Let the <br /> professional find you.</p>
                                <p className='offer_your_services_subtext'>Post a job with your price in <br /> mind, then get offers</p>
                                <div className='cta_professinal'>
                                    <p p className='cta_pro_text'>Post a Job</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
