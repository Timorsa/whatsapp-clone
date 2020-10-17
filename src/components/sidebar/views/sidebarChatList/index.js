import React from 'react'
import { SidebarChatListItem as ChatItem } from './views/SidebarChatListItem';
const SidebarChatList = () => {
    return (
        <div className="sb-chat-list">
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </div>
    )
}

export default SidebarChatList
