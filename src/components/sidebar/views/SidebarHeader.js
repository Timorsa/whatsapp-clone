import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';

import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

const SidebarHeader = () => {
    return (
        <div className="sb-header">
            <Avatar />
            <div className="sb-header-rs">
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SidebarHeader
