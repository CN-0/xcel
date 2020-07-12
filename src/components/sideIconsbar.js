import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { TiDownload } from 'react-icons/ti'
import { FaRegCalendar } from 'react-icons/fa'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BsQuestion } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { WiStars } from 'react-icons/wi'

const SideIconsbar = () =>{
    return(
        <div className="sideiconsbar">
            <div className="sideiconsbar__top">
                <div className="menu-box">
                <span className="menu-bar">
                    &nbsp;
                </span>
                </div>
                <FaRegBell  className="icon-medium"/>
                <div className="download-count">
                    <TiDownload style={{padding:".85rem"}} className="icon-medium"/>
                    <span>1</span>
                </div>
            </div>
            <div className="sideiconsbar__middle">
                <div className="rot">
                    <WiStars className="icon-small"/>
                    <p>Upgrade</p>
                </div>
            </div>
            <div className="sideiconsbar__bottom">
                <FaRegCalendar style={{padding:"1.2rem"}} className="icon-medium"/>
                <AiOutlineUserAdd className="icon-medium"/>
                <FiSearch className="icon-medium"/>
                <BsQuestion className="icon-mediumlarge"/>
                <div className="profile-img">
                    <FaUserCircle className="icon-large"/>
                </div>
            </div>
        </div>
    )
}

export default SideIconsbar