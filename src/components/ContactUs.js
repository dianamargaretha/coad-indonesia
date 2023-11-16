import React from 'react'
const ContactUs = () => {
    return (
        <div className='fixed bottom-[140px] right-5 lg:right-10 inline-flex flex-col gap-2'>
            <div>
                <a href='https://www.facebook.com/profile.php?id=100063706263984&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true' target='_blank'>
                    <img width={38} src='/assets/images/contact-us/face.svg' alt='Contact Us On Facebook' />
                </a>
            </div>
            <div>
                <a href="https://wa.me/081211102255" target='_blank'>
                    <img width={40} src='/assets/images/contact-us/whatsapp.png' alt='Contact Us On Facebook' />
                </a>
            </div>
        </div>
    )
}

export default ContactUs