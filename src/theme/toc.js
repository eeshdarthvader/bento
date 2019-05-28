import React from 'react';

const generateTOC = (elems) => {

  const headings = elems.filter(elem => {
    return elem.props.mdxType === "h2"
  });

  const toc = {}

  for (const heading of headings) {
    let text = heading.props.children
    let string = heading.props.id
    toc[text] = string
  }

  const tocTree = Object.entries(toc).map(([heading, url]) => {
    return (
      <li className="fs-body c-grey-40 hover:c-grey-50 mb-8 antialiased" key={url}>
        <a href={`#${url}`} className="c-inherit td-none">
          {heading}
        </a>
      </li>
    )
  })

  return tocTree
}

export default generateTOC