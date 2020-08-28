export default function retrieveLinks() {
  return function (dispatch, getState) {
    if (JSON.parse(localStorage.getItem("links")) != null) {
      dispatch({
        type: "RETRIEVE_LINKS",
        links: JSON.parse(localStorage.getItem("links")).map((link) => ({
          ...link,
          copied: false,
        })),
      });
    }
  };
}
