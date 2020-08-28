import axios from "axios";

function addLink(original) {
  return function (dispatch) {
    if (original.length == 0) {
      dispatch({ type: "SET_VALIDATE", validate: true });
    } else {
      dispatch({ type: "IS_SHORTENING", is: true });
      shortenLink(original)
        .then((response) => {
          dispatch({
            type: "ADD_LINK",
            link: {
              id: response.data.hashid,
              original: original,
              shortened: `https://rel.ink/${response.data.hashid}`,
              copied: false,
            },
          });
          dispatch({ type: "IS_SHORTENING", is: false });
          dispatch({ type: "SET_VALIDATE", validate: true });
        })
        .catch((error) => {
          dispatch({ type: "SET_VALIDATE", validate: true });
          dispatch({ type: "IS_SHORTENING", is: false });
          dispatch({ type: "SHOW_ERROR_DIALOG", show: true });
        })
        .finally(() => {
          dispatch({ type: "CLEAR_INPUT" });
        });
    }
  };
}

function shortenLink(original) {
  return axios.post("https://rel.ink/api/links/", {
    url: original,
  });
}

export default addLink;
