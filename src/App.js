import React from 'react'
import './scss/index.scss'
import SideIconsbar from './components/sideIconsbar'
import Sidebar from './components/sidebar'
import Description from './components/description'
import Todo from './components/todo'

const App = () =>(

    <div className="app">
        <SideIconsbar/>
        <Sidebar/>
        <div className="app__content">
            <Description/>
            <Todo/>
        </div>
    </div>
)

export default App