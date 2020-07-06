import React from 'react'
import { IoMdArrowDropdownCircle } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'
import { IoMdAddCircle } from 'react-icons/io'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { MdTextFields } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'
import { TiThMenuOutline } from 'react-icons/ti'
import { GoCalendar } from 'react-icons/go'
import { FaHashtag } from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa'

const Todo = () =>{
        
    
    return(
        <div className="todo">
            <div className="todo__row">
                <div className="todo__row-svg">
                    <IoMdArrowDropdownCircle className="icon-medium blue"/>
                </div>
                <div className="todo__row-mygroup">
                    My group
                </div>
                <div className="todo__row-content">
                    <div className="todo__row-headers-person">
                        Person
                    </div>
                    <div className="todo__row-headers">
                        My Status
                    </div>
                    <div className="todo__row-headers">
                        Date
                    </div>
                    <div className="todo__row-headers">
                        contact
                    </div>
                    <div className="add-icon todo__row-headers">
                    <input style={{display:"none"}} type="checkbox" id="btnControl"/>
                    <label class="label" for="btnControl">
                        <IoMdAddCircle className="icon-mediumlarge rot blue"/>
                        <div className="new-column">
                            <div className="new-column-item">
                                <FiMenu className="colicon grey-dark"/>
                                Status
                            </div>
                            <div className="new-column-item">
                                <MdTextFields className="colicon grey-dark"/>
                                Text
                            </div>
                            <div className="new-column-item">
                                <BsPeople className="colicon grey-dark"/>
                                People
                            </div>
                            <div className="new-column-item">
                                <TiThMenuOutline className="colicon grey-dark"/>
                                Timeline
                            </div>
                            <div className="new-column-item">
                                <GoCalendar className="colicon grey-dark"/>
                                Date
                            </div>
                            <div className="new-column-item">
                                <FaHashtag className="colicon grey-dark"/>
                                Tags
                            </div>
                            <div className="new-column-item">
                                <FaCalculator className="colicon grey-dark"/>
                                Numbers
                            </div>
                            <div className="more-columns">
                                More columns
                            </div>
                        </div>
                        </label>
                        
                    </div>
                </div>
            </div>
            <div className="todo__row">
                <div className="todo__row-svg">
                    <IoMdArrowDropdownCircle className="icon-medium grey-light"/>
                </div>
                <div className="todo__row-mygroup-item">
                    <h3>
                        new item ss 
                    </h3>
                    <div className="todo__row-mygroup-item-icons">
                        <BsChat className="icon-medium grey-dark"/>
                    </div>
                </div>
                <div className="todo__row-content">
                    <div className="todo__row-headers-person">
                        <FaRegUserCircle style={{padding:"1.3rem"}} className="icon-mediumlarge personicon grey-dark"/>
                    </div>
                    <div className="todo__row-headers status">
                        <h4>My Status</h4>
                        <div className="status__set">
                            <div className="status__set-item orange">
                                working on it
                            </div>
                            <div className="status__set-item dark">
                                critical
                            </div>
                            <div className="status__set-item pink">
                                stuck
                            </div>
                            <div className="status__set-item green">
                                done
                            </div>
                            <div className="add-items">
                                <BsPencil className="icon-veryverysmall blue"/>
                                <a>Add/Edit Labels</a>
                            </div>
                        </div>
                    </div>
                    <div className="todo__row-headers">
                        Date
                    </div>
                    <div className="todo__row-headers">
                        contact
                    </div>
                    <div className="todo__row-headers end">
                    </div>
                </div>
            </div>
            <div className="todo__row">
                <div className="todo__row-svg">
                    <IoMdArrowDropdownCircle className="icon-medium grey-light"/>
                </div>
                <div className="todo__row-mygroup-item">
                    <h3>
                        new item ss 
                    </h3>
                    <div className="todo__row-mygroup-item-icons">
                        <BsChat className="icon-medium grey-dark"/>
                    </div>
                </div>
                <div className="todo__row-content">
                    <div className="todo__row-headers-person">
                        <FaRegUserCircle style={{padding:"1.3rem"}} className="icon-mediumlarge personicon grey-dark"/>
                    </div>
                    <div className="todo__row-headers status">
                    <h4>My Status</h4>
                        <div className="status__set">
                            <div className="status__set-item orange">
                                working on it
                            </div>
                            <div className="status__set-item dark">
                                critical
                            </div>
                            <div className="status__set-item pink">
                                stuck
                            </div>
                            <div className="status__set-item green">
                                done
                            </div>
                            <div className="add-items">
                                <BsPencil className="icon-veryverysmall blue"/>
                                <a>Add/Edit Labels</a>
                            </div>
                        </div>
                    </div>
                    <div className="todo__row-headers">
                        Date
                    </div>
                    <div className="todo__row-headers">
                        contact
                    </div>
                    <div className="todo__row-headers end">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo