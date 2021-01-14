import * as S from './styles'

const TodoItem = ({
  id,
  task,
  complete,
  toggleTodoComplete,
  toggleEditMode,
  deleteTodo
}) => {
  const handleToggle = (e) => {
    e.stopPropagation()
    toggleTodoComplete(id)
  }

  const handleEdit = (e) => {
    e.stopPropagation()
    toggleEditMode(id)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    deleteTodo(id)
  }

  return (
    <S.Wrapper id={id} onClick={handleToggle} complete={complete}>
      <span>{task}</span>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleDelete}>delete</button>
    </S.Wrapper>
  )
}

export default TodoItem
