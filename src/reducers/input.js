export default function input(state = "", action) {
  switch (action.type) {
    case "ON_CHANGE_INPUT":
      return action.value;
    case "CLEAR_INPUT":
      return "";
    default:
      return state;
  }
}
