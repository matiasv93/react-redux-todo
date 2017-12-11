// @flow
// Non-shallow reducer state example needs Immutable
// Async actions need redux-observable epics
import { GET_TODOS, ADD_TODO, DELETE_TODO, SET_FILTER } from './consts'
import type { TodosState } from './types'
import initialState from './initialState'

// REDUCER
function reducer (state: TodosState = initialState, action: GlobalFSA<any>) {

  switch (action.type) {

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      }

    case `${GET_TODOS}`:
      return state

    case `${ADD_TODO}`:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
              text: action.payload.text,
                done: false
          }
        ]
      }

    case `${DELETE_TODO}`:
      return [
        ...state.list,
      ]

    default:
      return state

  }

}

// EPICS
// variable$ notation indicates an event stream
// https://redux-observable.js.org/docs/basics/Epics.html

export default reducer
