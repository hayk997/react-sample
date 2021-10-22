export default function Intl(state = {}, action) {
  if (action.type === 'LOCALE') {
    return {
      ...state,
      locale: action.payload,
    };
  }
  return state;
}
