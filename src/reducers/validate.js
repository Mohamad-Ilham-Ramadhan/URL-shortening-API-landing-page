export default function validate(state = false, action) {
  switch (action.type) {
    case "SET_VALIDATE":
      return action.validate;
    case "ON_CHANGE_INPUT":
      return action.validate;
    default:
      return state;
  }
}
