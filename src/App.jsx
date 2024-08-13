import Footer from "./Footer"
import Header from "./Header"
import Content from "./content"
import Add_Search from "./Add_Search"
import { useState, useEffect } from 'react'

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [newtodos, setNewtodos] = useState("");
  const [edit, setEdit] = useState(null)
  const [edited, setEdited] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [completedCount, setCompletedCount] = useState(0);
  const [search, setSearch] = useState("")

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  function handleAdd() {
    if (newtodos.trim() !== "") {
      setTodos(t => [...t, { text: newtodos.trim(), completed: false, conpletedAt: null }]);
      setNewtodos("")
    }
  }
  function handleCheck(index) {
    const newtodos = [...todos]
    const now = new Date().toLocaleString()
    newtodos[index].completed = !newtodos[index].completed;
    if (newtodos[index].completed) {
      newtodos[index].completedAt = now;
      setCompletedCount(completedCount + 1)
    }
    else {
      newtodos[index].completedAt = null;
      setCompletedCount(completedCount - 1)
    }
    setTodos(newtodos);
  }
  function toggleListUp(index) {
    if (index > 0) {
      const newtodos = [...todos];
      [newtodos[index], newtodos[index - 1]] = [newtodos[index - 1], newtodos[index]]
      setTodos(newtodos)
    }
  }
  function toggleListDown(index) {
    if (index < todos.length - 1) {
      const newtodos = [...todos];
      [newtodos[index], newtodos[index + 1]] = [newtodos[index + 1], newtodos[index]]
      setTodos(newtodos)
    }
  }
  function handleDelete(index) {
    const newtodos = todos.filter((_, i) => i !== index);
    setTodos(newtodos)
  }
  function handleEdit(index) {
    setEdit(index)
    setEdited(todos[index])
    setEditIndex(index)

  }
  function handleEditClick() {
    const updatedTasks = [...todos];
    updatedTasks[editIndex].text = edited.text;
    setTodos(updatedTasks)
    setEditIndex(null)
    setEdit(false)

  }


  return (
    <div className="app">
      <Header
        length={todos.length} />
      <Add_Search
        newtodos={newtodos}
        setNewtodos={setNewtodos}
        handleAdd={handleAdd}
        search={search}
        setSearch={setSearch}
      />
      < Content
        todos={todos.filter(todo => ((todo.text).toLowerCase().includes(search.toLowerCase())))}
        edit={edit}
        setEdit={setEdit}
        edited={edited}
        setEdited={setEdited}
        handleCheck={handleCheck}
        toggleListUp={toggleListUp}
        toggleListDown={toggleListDown}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleEditClick={handleEditClick}
      />
      <Footer
        length={todos.length}
        completedCount={completedCount} />
    </div>
  )
}

export default App
