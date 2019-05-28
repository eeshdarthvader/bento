import React, { Fragment } from 'react'
import { theme } from 'docz'

import Helmet from 'react-helmet'
import Sticky from 'react-stickynode'

import Header from '../components/Header'

import generateTOC from './toc'
import Menu from './menu'

const Theme = ({children}) => {
  const TOC = generateTOC(children.props.children)
  const menuCategory = children.props.pageContext.frontmatter.menu
  const docName = children.props.pageContext.frontmatter.name

  console.log(children.props)

  return (
    <Fragment>
      <Helmet>
        <title>{docName}</title>
        <meta name="description" content={docName} />
      </Helmet>
      <div
        className="flex flex-column"
        style={{ minHeight: '100vh' }}
      >
        <Header fluid={true} />

        <div className="flex flex-1">
          <div
            className="nav"
            style={{ width: '260px' }}
          >
            <Menu category={menuCategory} doc={docName} />
          </div>

          <div className="flex-1 bg-white elevation-md">
            <div
              className="w-80p m-auto flex pb-60"
              style={{ maxWidth: '800px' }}
            >

              <div
                className="content flex-1 mt-32 pr-60"
              >
                {children}
              </div>

              <div className="toc w-20p">
                <Sticky enabled={true} top={30}>
                  <div className="ml-60">
                    <p className="fs-caption fw-600 c-blue tt-uppercase mt-60 mb-8">
                      Jump to:-
                      </p>
                    <ul
                      className="flex flex-column"
                    >
                      { TOC }
                  </ul>
                  </div>
                </Sticky>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default theme()(Theme)