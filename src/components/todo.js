import React,{useState} from 'react'
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
import { IoIosSave } from 'react-icons/io'

const Todo = () =>{
    const [rows, setRows] = useState(0)
    const [showAddRow,setShowAddRow] = useState(false)
    const [rowData,setRowData] = useState({})
    const [statusData, setStatusData] = useState({})

    const addRow = () =>{
        document.getElementById("addButton").setAttribute("disabled",true)
        setRows(rows=>rows+1)
        setShowAddRow(true)
    }
    const changeStatus = e =>{
        const oldStatusData = {...statusData}
        oldStatusData[e.target.parentElement.getAttribute('id')]={ihtml:e.target.innerHTML,class:e.target.classList[1]}
        setStatusData(oldStatusData)
        e.target.parentElement.previousElementSibling.innerHTML = e.target.innerHTML;
        e.target.parentElement.previousElementSibling.className = e.target.classList[1];
    }
    const newRowData = e =>{
        e.preventDefault()
        let oldRowData = {...rowData}
        const staData = {...statusData}
        const index= e.target.getAttribute("id")
        oldRowData[index] = {
            name:e.target.name.value || "",
            mystatus:staData[`ss${index}`] || "",
            date:e.target.date.value || "",
            contact:e.target.contact.value || ""
        }
        setRowData(oldRowData)
        document.getElementById("addButton").removeAttribute("disabled")
        e.target.name.value=""
        e.target.date.value = ""
        e.target.contact.value = ""
        setShowAddRow(false)
    }
    const addColumnELement = e =>{
        e.preventDefault()
        console.log(e.target.value)
    }
    const newColumn = e =>{
        const id= e.target.getAttribute("id")
        if(id){
            let headerDiv = document.getElementById("columnHeaderDiv")
            let headerEnd = document.getElementById("columnHeaderEnd")
            let formElement = document.createElement("FORM")
            formElement.className = "todo__row-headers"
            let input = document.createElement("INPUT")
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "name");
            input.className = "row-input column-input"
            input.addEventListener('keypress', e => {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    let newElement = document.createElement("div")
                    newElement.innerHTML = e.target.value
                    e.target.parentElement.appendChild(newElement)
                    e.target.parentElement.removeChild(e.target.parentElement.childNodes[0]); 
                }
            });
            formElement.appendChild(input)
            headerDiv.insertBefore(formElement, headerEnd)
        }
        if(id!=="status"){
            for( let i=1;i<rows+1;i++){
                let headerDiv = document.getElementById(`contentDiv${i}`)
                let headerEnd = document.getElementById(`contentDivEnd${i}`)
                let newElement = document.createElement("FORM")
                newElement.className = "todo__row-headers"
                let input = document.createElement("INPUT")
                input.setAttribute("type", "text");
                input.setAttribute("placeholder", "name");
                input.className = "row-input column-input"
                input.addEventListener('keypress', e => {
                    if (e.keyCode == 13) {
                        e.preventDefault();
                        let newElement = document.createElement("div")
                        newElement.innerHTML = e.target.value
                        e.target.parentElement.appendChild(newElement)
                        e.target.parentElement.removeChild(e.target.parentElement.childNodes[0]); 
                    }
                });
                newElement.appendChild(input)
                headerDiv.insertBefore(newElement, headerEnd)
            }
        }else{
            //let templateholder = '<h4></h4><div className="status__set"><div className="status__set-item orange">working on it</div><div className="status__set-item dark">critical</div><div  className="status__set-item pink">stuck</div><div className="status__set-item green">done</div><div className="add-items"><BsPencil className="icon-veryverysmall blue"/><a>Add/Edit Labels</a></div></div>'
            for(let i=1;i<rows+1;i++){
                let headerDiv = document.getElementById(`contentDiv${i}`)
                let headerEnd = document.getElementById(`contentDivEnd${i}`)
                let newElement = document.createElement("div")
                newElement.className = "todo__row-headers status"
                //newElement.innerHTML = templateholder
                headerDiv.insertBefore(newElement, headerEnd)
            }
        
        }
    }
     return(
        <div className="todo">
            <div className="todo__row">
                <div style={{marginLeft:"-3.5rem"}} className="todo__row-svg">
                    <IoMdArrowDropdownCircle className="icon-medium blue"/>
                </div>
                <div style={{marginLeft:"-3.5rem"}} className="todo__row-mygroup">
                    My group
                </div>
                <div id="columnHeaderDiv" className="todo__row-content">
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
                    <div id="columnHeaderEnd" className="add-icon todo__row-headers">
                    <input style={{display:"none"}} type="checkbox" id="btnControl"/>
                    <label className="label" htmlFor="btnControl">
                        <IoMdAddCircle className="icon-mediumlarge rot blue"/>
                        <div onClick={newColumn} style={{cursor:"pointer"}} className="new-column">
                            <div id="status" className="new-column-item">
                                <FiMenu className="colicon grey-dark"/>
                                Status
                            </div>
                            <div id="text" className="new-column-item">
                                <MdTextFields className="colicon grey-dark"/>
                                Text
                            </div>
                            <div id="people" className="new-column-item">
                                <BsPeople className="colicon grey-dark"/>
                                People
                            </div>
                            <div id="timeline" className="new-column-item">
                                <TiThMenuOutline className="colicon grey-dark"/>
                                Timeline
                            </div>
                            <div id="date" className="new-column-item">
                                <GoCalendar className="colicon grey-dark"/>
                                Date
                            </div>
                            <div id="tags" className="new-column-item">
                                <FaHashtag className="colicon grey-dark"/>
                                Tags
                            </div>
                            <div id="numbers" className="new-column-item">
                                <FaCalculator className="colicon grey-dark"/>
                                Numbers
                            </div>
                            <div id="morecolumns" className="more-columns">
                                More columns
                            </div>
                        </div>
                        </label>
                        
                    </div>
                </div>
            </div>
            {Object.keys(rowData).length>0?Object.keys(rowData).map(row=>{
                return(<div key={row} className="todo__row">
                <div className="todo__row-mygroup-item">
                    <h3>
                        {rowData[row].name}
                    </h3>
                    <div className="todo__row-mygroup-item-icons">
                        <BsChat className="icon-medium grey-dark"/>
                    </div>
                </div>
                <div  id={`contentDiv${row}`} className="todo__row-content">
                    <div className="todo__row-headers-person">
                        <FaRegUserCircle style={{padding:"1.3rem"}} className="icon-mediumlarge personicon grey-dark"/>
                    </div>
                    <div className="todo__row-headers status">
                    <h4 className={rowData[row].mystatus.class} >{rowData[row].mystatus.ihtml}</h4>
                        <div className="status__set">
                            <div  onClick={changeStatus} className="status__set-item orange">
                                working on it
                            </div>
                            <div  onClick={changeStatus} className="status__set-item dark">
                                critical
                            </div>
                            <div  onClick={changeStatus} className="status__set-item pink">
                                stuck
                            </div>
                            <div  onClick={changeStatus} className="status__set-item green">
                                done
                            </div>
                            <div  onClick={changeStatus} className="add-items">
                                <BsPencil className="icon-veryverysmall blue"/>
                                <a>Add/Edit Labels</a>
                            </div>
                        </div>
                    </div>
                    <div className="todo__row-headers">
                        {rowData[row].date}
                    </div>
                    <div className="todo__row-headers">
                        {rowData[row].contact}
                    </div>
                    <div id={`contentDivEnd${row}`} className="todo__row-headers end">
                    </div>
                </div>
                
            </div>)
            }):null}
            
            {showAddRow?<form type="submit" id={rows}  onSubmit={newRowData} className="todo__row">
    <div className="todo__row-mygroup-item">
        <input id="name" className="row-input" autoComplete="off" required placeholder="Enter name of the project" type="text"/>
    </div>
    <div className="todo__row-content">
        <div className="todo__row-headers-person">
            <FaRegUserCircle style={{padding:"1.3rem"}} className="icon-mediumlarge personicon grey-dark"/>
        </div>
        <div className="todo__row-headers status">
        <h4>My Status</h4>
        <div id={`ss${rows}`} className="status__set">
            <div  onClick={changeStatus} className="status__set-item orange">
                working on it
            </div>
            <div  onClick={changeStatus} className="status__set-item dark">
                critical
            </div>
            <div  onClick={changeStatus} className="status__set-item pink">
                stuck
            </div>
            <div  onClick={changeStatus} className="status__set-item green">
                done
            </div>
            <div className="add-items">
                <BsPencil className="icon-veryverysmall blue"/>
                <a>Add/Edit Labels</a>
            </div>
        </div>
        </div>
        <div className="todo__row-headers">
            <input id="date" type="text"  autoComplete="off" className="row-input" />
        </div>
        <div className="todo__row-headers">
            <input id="contact" autoComplete="off" type="text" className="row-input" />
        </div>
        <button style={{border:"none",outline:"none"}} type="submit" className="todo__row-headers end">
            <IoIosSave style={{cursor:"pointer"}} className="icon-small black"/>
        </button>
    </div>
    </form>:null}

            <div className="todo__row add-row">
                <button id="addButton" style={{border:"none",outline:"none",paddingLeft:"2rem"}} onClick={addRow} className="new-row">
                    +Add
                </button>
            </div>
        </div>
    )
}

export default Todo