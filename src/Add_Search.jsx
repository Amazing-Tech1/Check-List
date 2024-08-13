import React from 'react'

function Add_Search({ newtodos, setNewtodos, handleAdd, search, setSearch }) {
    return (
        <div className='inputarea'>
            <div className='inputform'>
                <input
                    className='addinput'
                    type="text"
                    value={newtodos}
                    onChange={(e) => setNewtodos(e.target.value)}
                    placeholder='Enter a new list...' />
                <button
                    className='add'
                    onClick={handleAdd}>
                    Add
                </button>
            </div>
            <div>
                <input
                    type="text"
                    className='searchinput'
                    value={search}
                    placeholder='Search Here'
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
        </div>
    )
}

export default Add_Search
