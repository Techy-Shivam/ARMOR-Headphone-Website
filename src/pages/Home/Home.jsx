import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Home-Components/Header/Header'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import HeadphoneDisplay from '../../components/HeadphoneDisplay/HeadphoneDisplay'
import VideoSection from '../../components/Home-Components/Video-section/VideoSection'
import Banner from '../../components/Home-Components/Banner/Banner'
import AppDownload from '../../components/Home-Components/AppDownload/AppDownload'
const Home = () => {

  const [category, setcategory] = useState("All")
  return (
    <div>
       <Header/>
       <ExploreCategory category={category} setcategory={setcategory} />
       <div className="headdisplay">
       <HeadphoneDisplay category={category}/>
       </div>
       <VideoSection/>
        <Banner/>
       <AppDownload/>
    </div>
  )
}

export default Home