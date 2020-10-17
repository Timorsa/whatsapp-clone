import React, { useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic, Send } from '@material-ui/icons'
import './styles.css'

const Chat = () => {
    const [message, setMessage] = useState('');
    return (
        <div className='chat'>
            <div className="chat-header">
                <Avatar />
                <div className="chat-header-info">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-header-rs">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <p className='chat-message'>
                    <span className="chat-name">Sender Name</span>
                    Message content
                    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className='chat-message chat-message-reciever'>
                    <span className="chat-name">Sender Name</span>
                Message content
                <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className='chat-message chat-message-reciever'>
                    <span className="chat-name">Sender Name</span>
            Message content
            <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className='chat-message chat-message-reciever'>
                    <span className="chat-name">Sender Name</span>
        Message content
        <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className='chat-message'>
                    <span className="chat-name">Sender Name</span>
    Message content
    <span className="chat-timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
            <div className="chat-footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        placeholder='Type a message'
                        type='text'
                    />
                    <IconButton type='submit' onClick={() => { }}>
                        <Send />
                    </IconButton>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
