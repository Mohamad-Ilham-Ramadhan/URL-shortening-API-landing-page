export default function copyLink(shortened) {
  return function (dispatch, getState) {
    const { links } = getState();
    navigator.clipboard.writeText(shortened).then(function () {
      dispatch({
        type: "TOGGLE_LINK_COPIED",
        links: links.map((link) =>
          link.shortened == shortened
            ? { ...link, copied: true }
            : { ...link, copied: false }
        ),
      });
    });
  };
}

// function onClickCopy(shortened) {
//   return function () {
//     navigator.clipboard.writeText(shortened).then(function () {
//       setLinks((links) =>
//         links.map((link) =>
//           link.shortened == shortened
//             ? { ...link, copied: true }
//             : { ...link, copied: false }
//         )
//       );
//     });
//   };
// }
