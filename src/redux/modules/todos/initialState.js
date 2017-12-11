// @flow
import { FILTER_CURRENT } from './consts'
import type { TodosState } from './types'

const initialState: TodosState = {
  filter: FILTER_CURRENT,
  list: [
    {
      text: 'This is the first todo',
      id: '1a',
      done: false,
    },
    {
      text: 'This is the second todo',
      id: '1b',
      done: false,
    },
    {
      text: 'This is the third todo',
      id: '1c',
      done: false,
    },
    {
      text: 'This is todo has "double-quotes"',
      id: '1d',
      done: false,
    },
    {
      text: 'This one\'s done',
      id: '2e',
      done: true,
    },
  ],
  isFetching: false,
  error: '',
}

export default initialState
