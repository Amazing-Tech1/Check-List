import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt, FaHandPointUp, FaHandPointDown } from "react-icons/fa";

function Content({ todos, edit, edited, setEdited, handleCheck, toggleListUp, toggleListDown, handleDelete, handleEdit, handleEditClick }) {


    return (
        <div className='contents'>
            <div className='listcontent'>
                {todos.length ? (
                    <ol>
                        {todos.map((todo, index) =>
                            <li key={index}
                                className='listitems'>
                                    {edit !== index &&
                                <input
                                    className='checkbox'
                                    type="checkbox"
                                    onClick={() => handleCheck(index)} />}
                                {edit === index ?
                                    (<div className='editform'>
                                        <input
                                            className='editinput'
                                            autoFocus
                                            type="text"
                                            value={edited.text}
                                            onChange={(e) => setEdited({ ...edited, text: e.target.value })}
                                        />
                                        <button
                                            className='editbutton'
                                            onClick={() => handleEditClick()}>Save
                                        </button>
                                    </div>
                                    )
                                    :
                                    <span
                                        className='listitem'
                                        style={{
                                            textDecoration: todo.completed ? "line-through" :
                                                "none"
                                        }}>

                                        {todo.text}

                                    </span>}
                                {
                                    todo.completedAt && (
                                        <>
                                         
                                                <i
                                                    style={{
                                                        fontSize: "0.5rem",
                                                        color: "black"
                                                    }}>

                                                    <b
                                                        style={{
                                                            fontSize: "1rem"
                                                        }}>Completed at:
                                                    </b>
                                                    {todo.completedAt}

                                                </i>
                                                <FaTrashAlt
                                                    style={{
                                                        fontSize: "2rem"
                                                    }}
                                                    id='editbuttons'
                                                    onClick={() => handleDelete(index)} />
                                        </>
                                    )
                                }

                                <div
                                    style={{
                                        display: todo.completed ? "none" : "inline"
                                    }}
                                    className='functionbuttons'
                                >
                                    {edit !== index ?
                                        <>
                                            <CiEdit
                                                id='editbuttons'
                                                onClick={() => handleEdit(index)} />
                                            <FaHandPointUp
                                                id='editbuttons'
                                                onClick={() => toggleListUp(index)} />
                                            <FaHandPointDown
                                                id='editbuttons'
                                                onClick={() => toggleListDown(index)} />
                                            <FaTrashAlt
                                                id='editbuttons'
                                                onClick={() => handleDelete(index)} />
                                            <div />
                                        </>
                                        : null}
                                </div>
                            </li>
                        )}
                    </ol>
                ) :
                    <p
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "4rem",
                            color: "grey",
                            marginTop: "9rem"
                        }}>
                        List empty
                    </p>}
            </div>
        </div >
    )
}

export default Content
