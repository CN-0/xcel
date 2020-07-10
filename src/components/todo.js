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
    const [columns,setColumns] = useState([])
    const [showAddRow,setShowAddRow] = useState(false)
    const [rowData,setRowData] = useState({})
    const [statusData, setStatusData] = useState({})

    const addRow = () =>{
        document.getElementById("addButton").setAttribute("disabled",true)
        setRows(rows=>rows+1)
        setShowAddRow(true)
    }
    const changeStatus = e =>{
        const list = e.target.classList
        let oldRowData = {...rowData}
        oldRowData[list[2]][list[3]] = {ihtml:e.target.innerHTML,class:e.target.classList[1]} || ""
        setRowData(oldRowData)
    }
    const changeNewStatus = e =>{
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
            name:e.target.name.value || ""
        }
        columns.forEach(column=>{
            if(column[0]==="Status"){
                oldRowData[index][column[1]] = staData[`ss${index}`] || ""
            }else if(column[0]==="People"){
                oldRowData[index][column[1]] = ""
            }else{
                oldRowData[index][column[1]] = e.target[column[1]].value || "";
            }
        })
        setRowData(oldRowData)
        document.getElementById("addButton").removeAttribute("disabled")
        setShowAddRow(false)
    }
    
    const newColumn = e =>{
        const id= e.target.getAttribute("id")
        if(id){
            setColumns(columns=>{
                return columns.concat([[id]])
            })
        }
    }
    const onHeadingInput = e =>{
        const id= e.target.getAttribute("id")
        if (e.keyCode == 13) {
            e.preventDefault();
            let value = e.target.value
            let newElement = document.createElement("div")
            newElement.innerHTML = value
            e.target.parentElement.appendChild(newElement)
            e.target.parentElement.removeChild(e.target.parentElement.childNodes[0]);
            let oldColumns = [...columns]
            oldColumns[id][1] = value 
            setColumns(oldColumns)
        }
    }
    const onInput = e =>{
        const list= e.target.classList
        const id= e.target.getAttribute("id")
        if (e.keyCode == 13) {
            e.preventDefault();
            let value = e.target.value
            let oldRowData = {...rowData}
            oldRowData[list[2]][list[3]] = value 
            setRowData(oldRowData)
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
                    {columns.map((column,index)=>{
                        if(column[0]==="People"){
                            return <div key={index} className="todo__row-headers-person"><input id={index} type="text" placeholder="name" onKeyDown={onHeadingInput} className="row-input column-input" /></div>
                        }else{
                            return <div key={index} className="todo__row-headers"><input id={index} type="text" placeholder="name" onKeyDown={onHeadingInput} className="row-input column-input" /></div>
                        }
                    })}
                    <div id="columnHeaderEnd" className="add-icon todo__row-headers">
                        <input style={{display:"none"}} type="checkbox" id="btnControl"/>
                        <label className="label" htmlFor="btnControl">
                            <IoMdAddCircle className="icon-mediumlarge rot blue"/>
                            <div onClick={newColumn} style={{cursor:"pointer"}} className="new-column">
                                <div id="Status" className="new-column-item">
                                    <FiMenu className="colicon grey-dark"/>
                                    Status
                                </div>
                                <div id="Text" className="new-column-item">
                                    <MdTextFields className="colicon grey-dark"/>
                                    Text
                                </div>
                                <div id="People" className="new-column-item">
                                    <BsPeople className="colicon grey-dark"/>
                                    People
                                </div>
                                <div id="Timeline" className="new-column-item">
                                    <TiThMenuOutline className="colicon grey-dark"/>
                                    Timeline
                                </div>
                                <div id="Date" className="new-column-item">
                                    <GoCalendar className="colicon grey-dark"/>
                                    Date
                                </div>
                                <div id="Tags" className="new-column-item">
                                    <FaHashtag className="colicon grey-dark"/>
                                    Tags
                                </div>
                                <div id="Numbers" className="new-column-item">
                                    <FaCalculator className="colicon grey-dark"/>
                                    Numbers
                                </div>
                                <div id="Morecolumns" className="more-columns">
                                    More columns
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
    {Object.keys(rowData).length>0?Object.keys(rowData).map(row=>{
        return(
            <div key={row} className="todo__row">
                <div className="todo__row-mygroup-item">
                    <h3>
                        {rowData[row].name}
                    </h3>
                    <div className="todo__row-mygroup-item-icons">
                        <BsChat className="icon-medium grey-dark"/>
                    </div>
                </div>
                <div  id={`contentDiv${row}`} className="todo__row-content">
                    {columns.map(column=>{
                        if(column[0]==="People"){
                            return (
                                <div className="todo__row-headers-person">
                                    <FaRegUserCircle style={{padding:"1.3rem"}} className="icon-mediumlarge personicon grey-dark"/>
                                </div>)
                        }else if(column[0]==="Status"){
                            return(
                                <div key={column[1]} className="todo__row-headers status">
                                    <h4 className={rowData[row][column[1]]?rowData[row][column[1]].class:null}>{rowData[row][column[1]]?rowData[row][column[1]].ihtml:null}</h4>
                                    <div className="status__set">
                                        <div  onClick={changeStatus} className={`status__set-item orange ${row} ${column[1]}`}>
                                            working on it
                                        </div>
                                        <div  onClick={changeStatus} className={`status__set-item dark ${row} ${column[1]}`}>
                                            critical
                                        </div>
                                        <div  onClick={changeStatus} className={`status__set-item pink ${row} ${column[1]}`}>
                                            stuck
                                        </div>
                                        <div  onClick={changeStatus} className={`status__set-item green ${row} ${column[1]}`}>
                                            done
                                        </div>
                                        <div  onClick={changeStatus} className="add-items">
                                            <BsPencil className="icon-veryverysmall blue"/>
                                            <a>Add/Edit Labels</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }else{
                            return(
                                <div key={column[0]} className="todo__row-headers">
                                    {rowData[row][column[1]]?rowData[row][column[1]]:<input id={column[1]} type="text" placeholder="name" onKeyDown={onInput} className={`row-input column-input ${row} ${column[1]}`} />}
                                </div>
                            )
                        }
                    })}
                    <div id={`contentDivEnd${row}`} className="todo__row-headers end">
                    </div>
                </div>
                
            </div>)
    }):null}
            
    {showAddRow?
    <form type="submit" id={rows}  onSubmit={newRowData} className="todo__row">
        <div className="todo__row-mygroup-item">
            <input id="name" className="row-input" autoComplete="off" required placeholder="Enter name of the project" type="text"/>
        </div>
        <div className="todo__row-content">
            {columns.map(column=>{
                if(column[0]==="People"){
                    return (
                        <div key={column[1]} className="todo__row-headers-person">
                            <FaRegUserCircle style={{padding:"1.3rem"}} className="icon-mediumlarge personicon grey-dark"/>
                        </div>)
                }else if(column[0]==="Status"){
                    return(
                        <div key={column[1]} className="todo__row-headers status">
                            <h4>My Status</h4>
                            <div id={`ss${rows}`} className="status__set">
                                <div  onClick={changeNewStatus} className="status__set-item orange">
                                    working on it
                                </div>
                                <div  onClick={changeNewStatus} className="status__set-item dark">
                                    critical
                                </div>
                                <div  onClick={changeNewStatus} className="status__set-item pink">
                                    stuck
                                </div>
                                <div  onClick={changeNewStatus} className="status__set-item green">
                                    done
                                </div>
                                <div className="add-items">
                                    <BsPencil className="icon-veryverysmall blue"/>
                                    <a>Add/Edit Labels</a>
                                </div>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div key={column[1]} className="todo__row-headers">
                            <input id={column[1]} type="text"  autoComplete="off" className="row-input" />
                        </div>
                    )
                }
            })}
            <button style={{border:"none",outline:"none"}} type="submit" className="todo__row-headers end">
                <IoIosSave style={{cursor:"pointer"}} className="icon-small black"/>
            </button>
        </div>
    </form>
    :null}

    <div className="todo__row add-row">
        <button id="addButton" style={{border:"none",outline:"none",paddingLeft:"2rem"}} onClick={addRow} className="new-row">
            +Add
        </button>
    </div>
</div>
    )
}

export default Todo