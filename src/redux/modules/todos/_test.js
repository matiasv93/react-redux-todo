// @flow
import { todoList as todoListMock } from './mocks'
import reducer from './reducer'
import initialState from './initialState'
import { GET_TODOS } from './consts'

describe('Todo Initial and Prev State', () => {

  const unknownAction = {
    type: 'SOME_UNKNOWN_ACTION',
    payload: {},
  }

  it('uses initial state when no prev state is given', () => {

    const prevState = undefined
    const nextState = reducer(prevState, unknownAction)
    expect(nextState).toEqual(initialState)

  })

  it('returns prev state by default for unknown action', () => {

    const prevState = initialState
    const nextState = reducer(prevState, unknownAction)
    expect(nextState).toEqual(initialState)

  })

})

describe('Todos Fetch', () => {

  const prevState = initialState

  it('returns isFetching while fetching', () => {

    const expectedState = { ...prevState, isFetching: true }
    const action = { type: `${GET_TODOS}_PENDING`, payload: [] }
    const nextState = reducer(prevState, action)
    expect(nextState).toEqual(expectedState)

  })

  it('returns todo list, no isFetching and no error on fetch success', () => {

    const expectedState = {
      ...prevState,
      list: todoListMock.list,
      isFetching: false,
      error: '',
    }
    const action = {
      type: `${GET_TODOS}_FULFILLED`,
      payload: { data: todoListMock },
    }
    const nextState = reducer(prevState, action)
    expect(nextState).toEqual(expectedState)

  })

  it('returns prev todo list, no isFetching and error description on fetch failure', () => {

    const expectedState = {
      ...prevState,
      isFetching: false,
      error: 'Network Error',
    }
    const action = {
      type: `${GET_TODOS}_REJECTED`,
      payload: 'Network Error',
    }
    const nextState = reducer(prevState, action)
    expect(nextState).toEqual(expectedState)

  })

})
