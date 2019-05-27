import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {
  Container,
  Row,
  Col,
  Spacer,
  Button
} from '../../../lib'

import Background from './icons/bg.svg'

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
            <Spacer my={24} />
            <div className="py-60 pb-60">
              <h1 className="fs-heading-3 fw-600 c-white mb-16">
                Bento
              </h1>
              <p className="fs-heading c-white o-80 lh-copy mb-20">
                Resources, tooling, and design guidelines for building interfaces with Cleartrip’s design system
              </p>
              <div
                className="bg-slate-dark p-12 pl-16 br-4 flex flex-between flex-middle"
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
            <Spacer my={48} />
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
