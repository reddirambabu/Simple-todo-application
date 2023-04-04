// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteTodoItem} = props
  const {id, title} = eachTodo

  const onDelete = () => {
    onDeleteTodoItem(id)
  }

  return (
    <li className="list-item">
      <p className="message">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
