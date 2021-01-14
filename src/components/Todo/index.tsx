import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import TodoItem from 'components/TodoItem'
import EditInput from 'components/EditInput'

import * as S from './styles'

const Todo = () => {
  const [todoItems, setTodoItems] = useState([])
  const { register, handleSubmit } = useForm()

  const addTodo = (data) =>
    setTodoItems([
      ...todoItems,
      {
        task: data['todo-input'],
        id: uuidv4(),
        editing: false,
        complete: false
      }
    ])

  const deleteTodo = (idFromRemoveItem) =>
    setTodoItems(todoItems.filter((item) => item.id !== idFromRemoveItem))

  const saveEditedTodo = (idFromTodo, newTask) =>
    setTodoItems(
      todoItems.map((item) =>
        item.id === idFromTodo
          ? { ...item, task: newTask, editing: false }
          : item
      )
    )

  const cancelEdit = (idFromTodo) =>
    setTodoItems(
      todoItems.map((item) =>
        item.id === idFromTodo ? { ...item, editing: false } : item
      )
    )

  const toggleEditMode = (todoId) => {
    setTodoItems(
      todoItems.map((item) => {
        if (todoId === item.id) return { ...item, editing: true }
        return item
      })
    )
  }

  const toggleTodoComplete = (todoId) => {
    setTodoItems(
      todoItems.map((item) => {
        if (todoId === item.id) return { ...item, complete: !item.complete }
        return item
      })
    )
  }

  return (
    <S.Wrapper>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit(addTodo)}>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          ref={register}
          placeholder="What to do?"
        />
        <input type="submit" value="Add Todo" />
      </form>

      <ul>
        {todoItems.map((todo) =>
          todo.editing ? (
            <EditInput
              key={todo.id}
              todo={todo}
              cancelEdit={cancelEdit}
              saveEditedTodo={saveEditedTodo}
            />
          ) : (
            <TodoItem
              key={todo.id}
              id={todo.id}
              task={todo.task}
              complete={todo.complete}
              toggleEditMode={toggleEditMode}
              deleteTodo={deleteTodo}
              toggleTodoComplete={toggleTodoComplete}
            />
          )
        )}
      </ul>
    </S.Wrapper>
  )
}

// const EditInput = ({ todo, cancelEdit, saveEditedTodo }) => {
//   const { register, handleSubmit } = useForm()
//   const { task, id } = todo

//   const onSubmit = (data) => saveEditedTodo(id, data['todo-edit'])

//   const handleCancel = (e) => {
//     e.stopPropagation()
//     cancelEdit(id)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         type="text"
//         name="todo-edit"
//         id="todo-edit"
//         ref={register}
//         defaultValue={task}
//       />
//       <input type="submit" value="save" />
//       <input type="button" value="cancel" onClick={handleCancel} />
//     </form>
//   )
// }
export default Todo
