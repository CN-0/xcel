import React,{useState} from 'react'
import './scss/index.scss'
import SideIconsbar from './components/sideIconsbar'
import Sidebar from './components/sidebar'
import Description from './components/description'
import Todo from './components/todo'

const App = () =>{
    const [sidebarStatus,changeSidebarStatus] = useState(false)
    const changeStatus = ()=>{
        changeSidebarStatus(!sidebarStatus)
    }
    return(<div className="app">
    <SideIconsbar />
    {!sidebarStatus?<Sidebar />:null}
    <div style={sidebarStatus?{width:"calc(100%-7.5rem)"}:null} className="app-content">
    <Description  status= {changeStatus} />
    <div className="todo-content">
        <Todo />
    </div>
    </div>
</div>)
}

export default App