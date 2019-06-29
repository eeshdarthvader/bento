import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import {
  Row,
  Col
} from '../../../lib'

import CleartripLogo from './icons/cleartrip.svg'

const Container = props => (
  <div
    className="m-auto"
    style={{
      maxWidth: (props.fluid) ? '100%' : '1140px',
      padding: (props.fluid) ? '0 20px' : '0'
    }}
  >
    {props.children}
  </div>
)

const Header = props => {
  return (
    <Fragment>
      <div style={{ height: '72px' }} className="bg-slate">
        <p>Header</p>
      </div>
      <header className="bg-slate p-fixed w-100p t-0 z-50">
        <Container fluid={props.fluid}>
          <Row>
            <Col span={24} >
              <div
                className="flex flex-between flex-middle"
                style={{ height: '72px' }}
              >
                <Link to="/">
                  <CleartripLogo />
                </Link>

                <ul
                  className="flex fs-body c-white"
                  style={{ height: '72px' }}
                >
                  <li className="flex flex-middle hover:bg-slate-dark">
                    <Link
                      to="/foundation/color"
                      className="td-none c-inherit px-32 py-24">
                      Foundation
                    </Link>
                  </li>
                  <li className="flex flex-middle hover:bg-slate-dark">
                    <Link
                      to="/utilities/background"
                      className="td-none c-inherit px-32 py-24">
                      Utilities
                    </Link>
                  </li>
                  <li className="flex flex-middle hover:bg-slate-dark">
                    <Link
                      to="/components/button"
                      className="td-none c-inherit px-32 py-24">
                      Components
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </Fragment>
  )
}

Header.propTypes = {
  fluid: PropTypes.bool
}

Header.defaultProps = {
  fluid: false,
}

Header.displayName = 'Header'

export default Header
