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
                <FaUserCircle  className="icon-large"/>
                <FaRegBell  className="icon-medium"/>
                <TiDownload className="icon-medium"/>
            </div>
            <div className="sideiconsbar__middle">
                <div className="rot">
                    <WiStars className="icon-small"/>
                    <h3>Upgrade</h3>
                </div>
            </div>
            <div className="sideiconsbar__bottom">
                <FaRegCalendar className="icon-medium"/>
                <AiOutlineUserAdd className="icon-medium"/>
                <FiSearch className="icon-medium"/>
                <BsQuestion className="icon-mediumlarge"/>
                <div>
                    <FaUserCircle className="icon-large"/>
                </div>
            </div>
        </div>
    )
}

export default SideIconsbar