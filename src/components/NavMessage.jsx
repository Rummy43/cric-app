import React from 'react'

function NavMessage() {
    return (
        <li className="nav-item dropdown">
            <a className='nav-link nav-icon' href='#' data-bs-toggle='dropdown'>
                <i className='bi bi-chat-left-text'>
                    <span className='badge bg-success badge-number'>
                        3
                    </span>
                </i>
            </a>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
                <li className='dropdown-header'>
                    You have 3 new messages
                    <a href='#'>
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <a href="#">
                        <img src="assets/img/messages-1.jpg" alt=""
                            className='rounded-circle' />
                        <div>
                            <h4>Rummy</h4>
                            <p>
                                message 1
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='message-item'>
                    <a href="#">
                        <img src="assets/img/messages-2.jpg" alt=""
                            className='rounded-circle' />
                        <div>
                            <h4>Rummy</h4>
                            <p>
                                message 2
                            </p>
                            <p>6 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='message-item'>
                    <a href="#">
                        <img src="assets/img/messages-3.jpg" alt=""
                            className='rounded-circle' />
                        <div>
                            <h4>Rummy</h4>
                            <p>
                                message 3
                            </p>
                            <p>8 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='dropdown-footer'>
                    <a href="#"> Show all notifications</a>
                </li>
            </ul>
        </li>
    )
}

export default NavMessage