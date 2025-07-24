import React from 'react'
import { assets } from '../../../assets/assets'
import './appdown.css'
const AppDownload = () => {
    return (
        <div className="app-download" id='app-download'>
            <p>For Better Expirence Download <br /> ARMOR app</p>
            <div className="app-icon">  
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.play_store} alt="" />
            </a>
                <a href="https://appstoreconnect.apple.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.app_store} alt="" />
            </a>
                
            </div>
        </div>
    )
}

export default AppDownload