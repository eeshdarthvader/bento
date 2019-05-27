import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { ToastContainer } from 'react-toastify'
import Sticky from 'react-stickynode'

import Header from '../components/Header'
import { FoundationNav } from '../components/Nav'

import 'react-toastify/dist/ReactToastify.css'

const Docs = () => {
  <Fragment>
    <Helmet>
      <title>Bento</title>
      <meta name="description" content="Bento" />
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
                    "TOC"
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
}