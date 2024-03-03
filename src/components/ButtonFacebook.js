import React from 'react'

const ButtonFacebook = () => {
    return (
        <div
            className='btn-fb fixed focus:outline-none bottom-20 right-5 animate__animated animate__fadeIn z-50 cursor-pointer'
        >
            <a href='https://www.facebook.com/profile.php?id=100063706263984&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true' target='_blank'>
                <img width={50} height={50} src='/assets/images/socmed/fb.svg' alt='Facebook Coad Indonesia' />
            </a>
        </div>
    )
}

export default ButtonFacebook