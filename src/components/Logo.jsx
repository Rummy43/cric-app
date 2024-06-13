import React from 'react'
import './logo.css'

function Logo() {

    const handleToddleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }

    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                {/*for image */}
                <span className="d-none d-lg-block">Cric App</span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onClick={handleToddleSideBar}>

            </i>
        </div>
    )
}

export default Logo