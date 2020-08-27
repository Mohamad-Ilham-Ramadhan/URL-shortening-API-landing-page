import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import FormShorten from "./FormShorten";
import ListShortenedLink from "./ListShortenedLink";

export default function ContainerShorten() {
  const [validate, setValidate] = useState(false);
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  const [links, setLinks] = useState([]);

  function onClickShortenIt(input) {
    return function () {
      if (input.length == 0) {
        setValidate(true);
      } else {
        axios
          .post("https://rel.ink/api/links/", {
            url: input,
          })
          .then((response) => {
            setLinks((links) => [
              ...links,
              {
                id: response.data.hashid,
                original: input,
                shortened: `https://rel.ink/${response.data.hashid}`,
                copied: false,
              },
            ]);
            localStorage.setItem(
              "links",
              JSON.stringify([
                ...links,
                {
                  id: response.data.hashid,
                  original: input,
                  shortened: `https://rel.ink/${response.data.hashid}`,
                  copied: false,
                },
              ])
            );
          });

        setValidate(false);
        setValue("");
      }
    };
  }

  function onClickCopy(shortened) {
    return function () {
      navigator.clipboard.writeText(shortened).then(function () {
        setLinks((links) =>
          links.map((link) =>
            link.shortened == shortened
              ? { ...link, copied: true }
              : { ...link, copied: false }
          )
        );
      });
    };
  }
  return (
    <>
      <FormShorten
        value={value}
        onChange={onChange}
        onClickShortenIt={onClickShortenIt}
        validate={validate}
      />
      <ListShortenedLink links={links} onClickCopy={onClickCopy} />
    </>
  );
}
