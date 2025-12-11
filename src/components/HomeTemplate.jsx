import React from 'react'
import AboutUs from './AboutUs'
// import PanelMembers from './PanelMembers'
import Orators from './orators/Orators'
// import EventSchedule from './EventSchedule'
import Partners from './Partners'
import Tracks from './Tracks'
import EventSchedule from './EventSchedule'
import Carousel from './BannerCarousel'
import Epms_about from './Epms_Home'
import Orators_Home from './Orators_Home'
import Venue from './Venue'
// import Epms from './epms/Epms'


const HomeTemplate = () => {
  return (
    <>
    <AboutUs />
    <Carousel />
      <Epms_about />
      <Tracks />
      <Orators_Home />
      <EventSchedule height={50} name="View all" link='/international-foodmeet-event-schedule' />
      <Venue />
      <Partners />
    </>
  )
}

export default HomeTemplate
