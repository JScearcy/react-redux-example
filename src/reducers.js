export const initialAccomplishmentState = ['initial state'];

export function accomplishmentReducer(state = initialAccomplishmentState, action) {
  switch (action.type) {
    case 'UPDATE_ITEM':
      return [action.data]
    default:
      return state
  }
}