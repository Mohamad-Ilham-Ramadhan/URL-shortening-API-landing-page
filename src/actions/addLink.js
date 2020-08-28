import axios from "axios";

export default function addLink(dispatch, original) {
  postLink(original).then((result) => dispatch(result));
}

async function postLink(original) {
  const response = await axios.post("https://rel.ink/api/links/", {
    url: original,
  });
  return {
    type: "ADD_LINK",
    link: {
      id: response.data.hashid,
      original: original,
      shortened: `https://rel.ink/${response.data.hashid}`,
      copied: false,
    },
  };
}
