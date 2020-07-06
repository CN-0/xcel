import React from "react";
import { FaApple } from 'react-icons/fa'
import { FaGooglePlay } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { AiFillCaretRight } from 'react-icons/ai'
import { AiFillCaretDown } from 'react-icons/ai'
import { FcHome } from 'react-icons/fc'
import { BsPlusCircle } from 'react-icons/bs'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="sidebar__top-workspaces">
                    <h3>Workspaces</h3>
                </div>
                <div className="sidebar__top-search">
                    <FiSearch className="icon-verysmall searchsvg"/>
                    <input type="text" placeholder="Filter boards..."/>
                </div>
                <div className="dropdown">
                    <div className="dropdown-btn">
                        <AiFillCaretRight className="icon-veryverysmall svgrotate"/>
                        <FcHome className="icon-small"/>
                        <h3>Main</h3>
                        <BsPlusCircle className="icon-small dropdownsvg"/>
                    </div>
                    <div className="dropdown-content">
                        <div className="dropdown-content-link">Web design</div>
                        <div className="dropdown-content-link">bvghbfh</div>
                    </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__bottom-dashboard">
                    Dashboards
                </div>
                <div className="sidebar__bottom-links">
                    Get the mobile app
                    <FaGooglePlay className="icon-verysmall linkssvg"/>
                    <FaApple className="icon-small linkssvg"/>
                </div>

            </div>
        </div>

    )
}
export default Sidebar