// @flow
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getTodos,
  setFilterCurrent,
  setFilterDone,
  addTodo
} from 'src/redux/modules/todos/actions'
import getVisibleTodos from 'src/selectors/getVisibleTodos'
import type { Todo } from 'src/redux/modules/todos/types'
import type { RootReducerState } from 'src/redux/modules'
import Todos from './Todos'


type StateProps = {
  // Always put the asterisk or it assumes 'empty'
  todos: Array<Todo>,
  filter: string,
}

const mapStateToProps = (state: RootReducerState): StateProps => ({
  todos: getVisibleTodos(state.todos),
  filter: state.todos.filter,
})


type DispatchProps = {
  setFilterCurrent: Function,
  setFilterDone: Function,
  getTodos: Function,
  addTodo: Function,
}

const mapDispatchToProps = (dispatch: any): DispatchProps =>
  bindActionCreators({
    setFilterCurrent,
    setFilterDone,
    getTodos,
    addTodo,
  }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Todos)
export type ReduxProps = StateProps & DispatchProps
