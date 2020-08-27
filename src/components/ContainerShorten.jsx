import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import FormShorten from "./FormShorten";
import ListShortenedLink from "./ListShortenedLink";

export default function ContainerShorten() {
  const [validate, setValidate] = useState(false);
  const [links, setLinks] = useState([
    {
      id: uuid(),
      original: "https://www.frontendmentor.io",
      shortened: "https://rel.ink/kzw08n",
    },
    {
      id: uuid(),
      original: "http://www.Ilhambeast.com",
      shortened: "http://.rel.ink/asdfsdaf",
    },
    {
      id: uuid(),
      original: "http://www.majusukses.com",
      shortened: "http://.rel.ink/fffaaa",
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
          },
        ]);
        setValidate(false);
      }
    };
  }
  return (
    <>
      <FormShorten onClickShortenIt={onClickShortenIt} validate={validate} />
      <ListShortenedLink links={links} />
    </>
  );
}
