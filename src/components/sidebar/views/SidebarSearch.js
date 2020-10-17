import React from 'react'
import { SearchOutlined } from '@material-ui/icons';

const SidebarSearch = () => {
    return (
        <div className="sb-search">
            <div className="sb-search-container">
                <SearchOutlined />
                <input placeholder='Search or start a new chat... ' type="text" />
            </div>
        </div>
    )
}

export default SidebarSearch
