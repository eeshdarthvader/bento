import React, { Fragment } from 'react'
import { theme } from 'docz'

import Helmet from 'react-helmet'
import Sticky from 'react-stickynode'

import Header from '../components/Header'

import generateTOC from './toc'
import Menu from './menu'
import Pagination from './pagination'

const Theme = ({children}) => {
  const TOC = generateTOC(children.props.children)
  const menuCategory = children.props.pageContext.frontmatter.menu
  const docName = children.props.pageContext.frontmatter.name

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
        <Header fluid={true} activeNav={menuCategory}/>

        <div className="flex flex-1">
          <div
            className="nav"
            style={{ width: '260px' }}
          >
            <Menu category={menuCategory} doc={docName} />
          </div>

          <div className="flex-1 bg-white elevation-md">
            <div
              className="w-90p m-auto flex pb-15"
              style={{ maxWidth: '900px' }}
            >

              <div
                className="content flex-1 mt-8 pr-15 box-border"
                style={{ maxWidth: '720px' }}
              >
                {children}
                <Pagination
                  docName={docName}
                  category={menuCategory}
                />
              </div>

              <div className="toc w-20p">
                <Sticky enabled={true} top={30}>
                  <div className="ml-3">
                    <p className="fs-caption fw-600 c-blue tt-uppercase mt-15 mb-2 ls-wide">
                      Jump to
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