export default function links(state = [], action) {
  switch (action.type) {
    case "ADD_LINK":
      return [...state, action.link];
    case "RETRIEVE_LINKS":
      return [...state, ...action.links];
    case "TOGGLE_LINK_COPIED":
      return [...action.links];
    default:
      return state;
  }
}
