import React from 'react'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineFolderView } from 'react-icons/ai'
import { GiPlug } from 'react-icons/gi'
import { FaRobot } from 'react-icons/fa'
import { IoIosVideocam } from 'react-icons/io'
import { BsPeople } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'
import { RiTableLine } from 'react-icons/ri'
import { BsChevronDown } from 'react-icons/bs'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdSort } from 'react-icons/md'


const Description = () =>{
    return(
    <div className="description">
        <div className="description__top">
            <div className="description__top-title">
                <AiOutlineLeftCircle className="title-icon black-light"/>
                <div className="description__top-title-maintitle">
                    <div className="title" >
                        <p>
                            Web design
                        </p>
                        <BsStarFill className="icon-medium black grey-light"/>
                    </div>
                    <p>
                        Add board description
                    </p>
                </div>
            </div>
            <div className="description__top-status">
                <div className="overtop">
                    <FaUserCircle className="icon-mediumlarge black"/>
                    <AiOutlineFolderView className="overtopsvg" />
                </div>
                <div className="hexagon-outline-box">
                <div className="hexagon-outline">
                    <GiPlug style={{transform:"rotate(270deg)", marginRight:".3rem",padding:".1rem" }}  /><span>/</span><p>0</p>
                </div>
                </div>
                <div className="hexagon-outline-box">
                <div className="hexagon-outline">
                    <FaRobot style={{marginRight:".6rem"}} className="icon-verysmall black-light"/><span>/</span><p>0</p>
                </div>
                </div>
                <div className="zoom-call">
                    <IoIosVideocam className="zoom"/>
                    <p>
                        Start Zoom call
                    </p>
                </div>
                <div className="activities">
                    <div className="people">
                        <BsPeople style={{marginRight:".5rem"}} className="icon-verysmall black-light"/><span>
                            /
                        </span><p>1</p>
                    </div>
                    <div className="activity">
                        <p>Activities</p><span>
                            /
                        </span><p>1</p>
                    </div>
                </div>
                <BsThreeDots style={{marginLeft:"1.2rem",marginRight:"2.5rem",marginTop:".6rem"}} className="icon-small black-light"/>
            </div>
        </div>
        <div className="description__bottom">
            <div className="description__bottom-maintable">
                <RiTableLine style={{padding:".9rem"}} className="icon-medium black-light"/>
                <h3>
                    Main Table
                </h3>
                <BsChevronDown style={{marginLeft:"1.5rem",padding:".2rem"}} className="icon-veryverysmall black"/>
            </div>
            <div className="description__bottom-actions">
                <div className="new-item">
                    <p>
                        New Item
                    </p>
                    <BsChevronDown style={{margin:".2rem -2rem 0rem .5rem",color:"white",strokeWidth:"1.5",padding:".2rem"}} className="icon-veryverysmall"/>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search/Filter Board"/>
                </div>
                <FaRegUserCircle className="icon-small black-light margin-side-small"/>
                <AiFillEyeInvisible className="icon-small black-light margin-side-small"/>
                <MdSort style={{marginRight:"2.5rem",marginLeft:"1rem"}} className="icon-small black-light"/>
            </div>
        </div>

    </div>
    )
}

export default Description