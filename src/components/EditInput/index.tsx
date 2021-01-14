import { useForm } from 'react-hook-form'

import * as S from './styles'

const EditInput = ({ todo, cancelEdit, saveEditedTodo }) => {
  const { register, handleSubmit } = useForm()
  const { task, id } = todo

  const onSubmit = (data) => saveEditedTodo(id, data['todo-edit'])

  const handleCancel = (e) => {
    e.stopPropagation()
    cancelEdit(id)
  }
  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="todo-edit"
        id="todo-edit"
        ref={register}
        defaultValue={task}
      />
      <input type="submit" value="save" />
      <input type="button" value="cancel" onClick={handleCancel} />
    </S.Wrapper>
  )
}

export default EditInput
