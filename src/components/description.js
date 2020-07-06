import React from 'react'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
import { AiOutlineFolderView } from 'react-icons/ai'
import { GrConnect } from 'react-icons/gr'
import { FaRobot } from 'react-icons/fa'
import { IoIosVideocam } from 'react-icons/io'
import { BsFillPeopleFill } from 'react-icons/bs'
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
                <AiOutlineLeftCircle className="title-icon"/>
                <div className="description__top-title-maintitle">
                    <div className="title" >
                        <h3>
                            Web design
                        </h3>
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
                <div style={{marginLeft:"-.5rem"}} className="hexagon-outline">
                    <GrConnect className="icon-medium black"/><span>/</span><p>0</p>
                </div>
                <div className="hexagon-outline">
                    <FaRobot className="icon-medium black"/><span>/</span><p>0</p>
                </div>
                <div className="zoom-call">
                    <IoIosVideocam className="zoom"/>
                    <h3>
                        Start Zoom call
                    </h3>
                </div>
                <div className="activities">
                    <div className="people">
                        <BsFillPeopleFill className="icon-medium black"/><span>
                            /
                        </span><p>1</p>
                    </div>
                    <div className="activity">
                        <h3>Activities</h3><span>
                            /
                        </span><p>1</p>
                    </div>
                </div>
                <BsThreeDots style={{color:"black",marginLeft:".5rem",marginRight:"2.5rem"}} className="icon-mediumlarge"/>
            </div>
        </div>
        <div className="description__bottom">
            <div className="description__bottom-maintable">
                <RiTableLine style={{padding:".7rem"}} className="icon-medium black"/>
                <h3>
                    Main Table
                </h3>
                <BsChevronDown style={{marginLeft:"1.5rem"}} className="icon-veryverysmall black"/>
            </div>
            <div className="description__bottom-actions">
                <div className="new-item">
                    <h3>
                        New Item
                    </h3>
                    <BsChevronDown style={{marginRight:"-2rem",marginLeft:".5rem",color:"white",strokeWidth:"1.5"}} className="icon-veryverysmall black"/>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search/Filter Board"/>
                </div>
                <FaRegUserCircle className="icon-mediumlarge grey-dark"/>
                <AiFillEyeInvisible className="icon-mediumlarge grey-dark"/>
                <MdSort style={{marginRight:"2.5rem"}} className="icon-mediumlarge black"/>
            </div>
        </div>

    </div>
    )
}

export default Description