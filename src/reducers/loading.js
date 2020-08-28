export default function loading(state = false, action) {
  switch (action.type) {
    case "IS_SHORTENING":
      return action.is;
    default:
      return state;
  }
}
