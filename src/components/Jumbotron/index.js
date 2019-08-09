import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {
  Container,
  Row,
  Col,
  Spacer,
  Button
} from '../../../lib'

import { ReactComponent as Background } from './icons/bg.svg'

const Jumbotron = props => {
  const [copied, setCopyStatus] = useState(false)

  const handeCopy = () => {
    setCopyStatus(true)
    setTimeout(() => setCopyStatus(false), 1000)
  }

  return (
    <div className="jumbotron bg-slate">
      <Container>
        <Row>
          <Col span={12}>
            <Spacer my={6} />
            <div className="py-15 pb-15">
              <h1 className="fs-heading-3 fw-600 c-white mb-4">
                Bento
              </h1>
              <p className="fs-heading c-white o-80 lh-copy mb-5">
                Resources, tooling, and design guidelines for building interfaces with Cleartrip’s design system
              </p>
              <div
                className="bg-slate-dark p-3 pl-4 br-4 flex flex-between flex-middle"
              >
                <p className="c-white fs-body-2 o-80 ff-mono">
                  npm install @cleartrip/bento
                </p>
                <CopyToClipboard
                  text="npm install @cleartrip/bento"
                  onCopy={handeCopy}
                >
                  <Button type="secondary" className="w-20p">
                    {!copied ? 'Copy' : 'Copied!'}
                  </Button>
                </CopyToClipboard>
              </div>
            </div>
            <Spacer my={12} />
          </Col>
          <Col span={12} className="p-relative">
            <Background
              style={{
                position: 'absolute',
                top: '60px',
                left: '100px',
                opacity: '0.7'
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Jumbotron
