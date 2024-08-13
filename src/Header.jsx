import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";

function Header({ length }) {
    return (
        <div className='header'>
            <FaCalendarCheck className='check' />
            <p> {length > 1 ? "My Check-Lists" : "My Check-List"}</p>
        </div>
    )
}

export default Header
