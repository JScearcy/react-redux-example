export const initialTextState = ['initial state'];

export function textReducer(state = initialTextState, action) {
  switch (action.type) {
    case 'UPDATE_ITEM':
      return [action.data]
    default:
      return state
  }
}