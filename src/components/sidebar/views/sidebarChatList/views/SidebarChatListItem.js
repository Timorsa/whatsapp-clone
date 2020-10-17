import React from 'react'
import { Avatar } from '@material-ui/core'

export const SidebarChatListItem = () => {
    return (
        <div className='sidebar-chat-list-item' >
            <Avatar />
            <div className="sb-chat-info">
                <h2>Room name</h2>
                <p>This is last message</p>
            </div>
        </div>

    )
}

