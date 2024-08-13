import React from 'react'

function Footer({ length, completedCount }) {
    return (
        <div className='footer'>
            <p>
                you have  {length} {length < 2 ? "task" : "tasks"}</p>
            <p>
                Completed: {completedCount}
            </p>
        </div>
    )
}
export default Footer
