import React from "react";
import Highlight from "react-highlight";
import { renderToStaticMarkup } from "react-dom/server";

const stringify = children => {
  if (children.length >= 2) {
    const strung = children.map(c => {
      return renderToStaticMarkup(c).replace(/class/, "className");
    });
    return strung.join("\n");
  }

  return renderToStaticMarkup(children);
};

const Code = ({ children }) => {
  return (
    <div className="demo-code">
      <Highlight language="html">{stringify(children)}</Highlight>
    </div>
  );
};

export default Code;
