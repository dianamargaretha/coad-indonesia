export const ReactGA = require('react-ga')

export const initialize = () => {
    if (!window.GA_INITIALIZED) {
        ReactGA.initialize(process.env.NEXT_PUBLIC_TRACKING_ID)
        window.GA_INITIALIZED = true
    }
}

export const trackContactUs = (label) => {
    ReactGA.event({
        category: 'Contact Us',
        label
    })
}