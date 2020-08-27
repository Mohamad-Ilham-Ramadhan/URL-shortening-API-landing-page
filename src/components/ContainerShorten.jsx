import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import FormShorten from "./FormShorten";
import ListShortenedLink from "./ListShortenedLink";

export default function ContainerShorten() {
  const [validate, setValidate] = useState(false);
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  const [links, setLinks] = useState([
    {
      id: uuid(),
      original: "https://www.frontendmentor.io",
      shortened: "https://rel.ink/kzw08n",
      copied: false,
    },
    {
      id: uuid(),
      original: "http://www.Ilhambeast.com",
      shortened: "http://.rel.ink/asdfsdaf",
      copied: false,
    },
    {
      id: uuid(),
      original: "http://www.majusukses.com",
      shortened: "http://.rel.ink/fffaaa",
      copied: false,
    },
  ]);

  function onClickShortenIt(input) {
    return function () {
      if (input.length == 0) {
        setValidate(true);
      } else {
        setLinks((links) => [
          ...links,
          {
            id: uuid(),
            original: input,
            shortened: "https://rel.ink/asdfasdf",
            copied: false,
          },
        ]);
        setValidate(false);
        setValue("");
      }
    };
  }

  function onClickCopy(original) {
    return function () {
      navigator.clipboard.writeText(original).then(function () {
        setLinks((links) =>
          links.map((link) =>
            link.original == original
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
