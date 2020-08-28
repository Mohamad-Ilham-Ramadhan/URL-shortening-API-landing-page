import axios from "axios";

function addLink(original) {
  return function (dispatch) {
    console.log("asldfasdf");
    shortenLink(original).then((response) => {
      dispatch({
        type: "ADD_LINK",
        link: {
          id: response.data.hashid,
          original: original,
          shortened: `https://rel.ink/${response.data.hashid}`,
          copied: false,
        },
      });
    });
  };
}

function shortenLink(original) {
  return axios.post("https://rel.ink/api/links/", {
    url: original,
  });
}

export default addLink;
