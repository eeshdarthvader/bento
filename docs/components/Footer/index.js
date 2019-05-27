import React from 'react'

import {
  Container,
  Row,
  Col
} from '../../../lib'

import UpIcon from './icons/up.svg'

const Footer = props => {
  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.requestAnimationFrame) {
      const c = document.documentElement.scrollTop || document.body.scrollTop
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
      }
    }
  }

  return (
    <div className="bg-grey-05 bt bc-grey-10">
      <Container>
        <Row>
          <Col>
            <div>
              <footer className="flex flex-between py-32">
                <div>
                  <p className="fs-body fw-500 c-grey-60 mb-4">
                    Bento - Cleartrip Design System
                  </p>
                  <p className="fs-caption-2 c-grey-40">
                    Version - 0.1.1
                  </p>
                </div>
                <div className="flex">
                  <div className="flex flex-column flex-bottom">
                    <ul className="flex mb-8">
                      <li className="ml-16 c-grey-60">
                        <a
                          href="/"
                          className="fw-500 td-none c-inherit hover:c-blue"
                        >
                          Github
                        </a>
                      </li>
                      <li className="ml-16 c-grey-60">
                        <a
                          href="/"
                          className="fw-500 td-none c-inherit hover:c-blue"
                        >
                          Issues
                        </a>
                      </li>
                      <li className="ml-16 c-grey-60">
                        <a
                          href="/"
                          className="fw-500 td-none c-inherit hover:c-blue"
                        >
                          Changelog
                        </a>
                      </li>
                      <li className="ml-16 c-grey-60">
                        <a
                          href="/"
                          className="fw-500 td-none c-inherit hover:c-blue"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                    <p className="fs-caption-2 c-grey-40">
                      Made by the design team at Cleartrip
                    </p>
                  </div>
                  <div
                    className="ba br-4 bc-grey-20 w-40 h-40 ml-16 flex flex-middle flex-center c-pointer hover:bg-grey-10"
                    onClick={scrollToTop}
                  >
                    <UpIcon />
                  </div>
                </div>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
