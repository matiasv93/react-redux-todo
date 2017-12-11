// @flow
import { GET_TODOS, SET_FILTER, FILTER_DONE, FILTER_CURRENT, ADD_TODO, DELETE_TODO } from './consts'

// Use redux-promise-middleware
// https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/chaining-actions.md
// Which, in turn, uses Flux Standard Action (FSA) notation
// https://github.com/acdlite/flux-standard-action
export const getTodos = () => ({
  type: GET_TODOS,
})

export const addTodo = (text: string) => {

  return {
    type: ADD_TODO,
    payload: {
      id: new Date(),
      text,
      done: false,
    },
  }
}

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id,
})


// Plain actions uses Flux Standard Action (FSA) notation
// https://github.com/acdlite/flux-standard-action
export const setFilterDone = () => ({
  type: SET_FILTER,
  payload: {
    filter: FILTER_DONE,
  },
})

export const setFilterCurrent = () => ({
  type: SET_FILTER,
  payload: {
    filter: FILTER_CURRENT,
  },
})
