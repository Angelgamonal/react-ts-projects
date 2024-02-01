import { type ListOfTodo } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodo
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
        {
          todos.map(({ id, completed, title }) => (
            <li key={id} className={`${completed ? 'completed' : ''}`}>
                <Todo key={id} id={id} title={title} completed={completed} />
            </li>
          ))
        }
      </ul>
  )
}
