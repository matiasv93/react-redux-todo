// @flow
import { createSelector } from 'reselect'
import { FILTER_CURRENT, FILTER_DONE } from 'src/redux/modules/todos/consts'


const getTodos = (todos: Object) => todos
const getFilter = (todos: Object) => todos


const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {

    switch (filter) {

      case FILTER_CURRENT:
        return todos.list.filter(todo => todo.done === false)

      case FILTER_DONE:
        return todos.list.filter(todo => todo.done === true)

      default:
        return todos.list

    }

  }
)


export default getVisibleTodos
