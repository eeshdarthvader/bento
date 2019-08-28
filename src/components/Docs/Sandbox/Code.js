import React from "react";
import Highlight from "react-highlight";
import { renderToStaticMarkup } from "react-dom/server";

const pretty = require('pretty');

const classify = text => {
  const string = `${text}`
  return string.replace(/class/, "className")
}

const stringify = children => {
  if (children.length >= 2) {
    const strung = children.map(c => {
      return classify(renderToStaticMarkup(c));
    });
    return strung.join("\n");
  }

  return renderToStaticMarkup(children);
};

const Code = ({ children }) => {
  return (
    <div className="demo-code">
      <Highlight class="markup">
        {pretty(stringify(children))}
      </Highlight>
    </div>
  );
};

export default Code;
