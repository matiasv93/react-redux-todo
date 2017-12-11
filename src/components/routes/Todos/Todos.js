// @flow
import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import css from './Todos.style.css'

import type { ReduxProps } from './'


type Props = ReduxProps

type State = {
  text: string,
}


class Todos extends PureComponent<Props, State> {

  constructor(props: Props) {

    super(props);
    this.state = { text: '' };

  }

  componentDidMount() {

    this.props.getTodos()

  }

  handleText(e: Object) {

    this.setState({ text: e.target.value })

  }

  handleSubmit () {

    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  props: Props

  render () {

    const { setFilterCurrent, setFilterDone, addTodo, todos } = this.props

    const todoList = todos.map(todo =>
      <li className={css.todoItem} key={todo.text}>{todo.text}</li>
    )

    return (
      <div className={css.todos}>
        <Helmet title="Todos" />
        <div className={css.content}>
          <h2 className={css.title}>Todos page</h2>
          <ul>
            {todoList}
          </ul>
          <Link to="/">Back</Link>
          <input
            className={css.input}
            type="text"
            value={this.state.text}
            onChange={this.handleText.bind(this)}/>
          <button onClick={() => this.handleSubmit()}>Add item</button>
        </div>
      </div>
    )

  }

}


export default Todos
