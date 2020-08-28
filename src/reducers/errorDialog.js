export default function errorDialog(state = false, action) {
  switch (action.type) {
    case "SHOW_ERROR_DIALOG":
      return action.show;
    default:
      return state;
  }
}
