import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { ToastContainer } from 'react-toastify'
import Sticky from 'react-stickynode'

import Header from '../components/Header'
import { FoundationNav } from '../components/Nav'

import 'react-toastify/dist/ReactToastify.css'

export default class MDXRuntimeTest extends Component {
  render () {
    const { data } = this.props
    const { mdx } = data

    console.log(mdx.tableOfContents)

    const toc = mdx.tableOfContents.items[0].items.map((heading, index) => {
      return (
        <li className="fs-body c-grey-40 hover:c-grey-50 mb-8 antialiased">
          <a href={heading.url} key={index} className="c-inherit td-none">
            {heading.title}
          </a>
        </li>
      )
    })

    return (
      <Fragment>
        <Helmet>
          <title>{mdx.fields.title} - Bento</title>
          <meta name="description" content={mdx.fields.title} />
          <meta name="theme-color" content="#008f68" />
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
              <FoundationNav />
            </div>

            <div className="flex-1 bg-white">
              <div
                className="w-80p m-auto flex pb-60"
                style={{ maxWidth: '800px' }}
              >

                <div
                  className="content flex-1 mt-32 pr-60"
                >
                  <MDXRenderer>{mdx.code.body}</MDXRenderer>
                </div>

                <div className="toc w-20p">
                  <Sticky enabled={true} top={30}>
                    <div className="ml-60">
                      <p className="fs-body c-grey-60 mt-60 mb-8">
                        Jump to:-
                      </p>
                      <ul
                        className="flex flex-column"
                      >
                        {toc}
                      </ul>
                    </div>
                  </Sticky>
                </div>
              </div>
            </div>

          </div>
        </div>
        <ToastContainer />
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title,
        slug
      }
      code {
        body
      }
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`
