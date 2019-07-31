import React from 'react'
import Scrollchor from 'react-scrollchor'

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
      <li className="fs-body c-grey-40 hover:c-grey-80 mb-2 antialiased wc-transform hover:translate" key={url}>
        <Scrollchor to={`#${url}`}
          animate={{offset: -100, duration: 280}}
          className="c-inherit td-none" >
          {heading}
        </Scrollchor>
      </li>
    )
  })

  return tocTree
}

export default generateTOC