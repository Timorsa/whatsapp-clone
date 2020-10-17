import React from 'react'


import SidebarHeader from './views/SidebarHeader';
import SidebarSearch from './views/SidebarSearch';
import SidebarChatList from './views/sidebarChatList'
import './styles.css';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader />
            <SidebarSearch />
            <SidebarChatList />
        </div>
    )
}

export default Sidebar
