import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classNames from "classnames"

import {
  Row,
  Col
} from '../../../lib'

// import CleartripLogo from './icons/cleartrip.svg'
import { ReactComponent as CleartripLogo } from './icons/cleartrip.svg'

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

  const navClass = classNames('d-flex hover:bg-slate-dark bb bw-4 bc-slate')
  const activeNavClass = classNames('d-flex bg-slate-dark bb bw-4 bc-orange')

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
                  className="flex fs-body c-white flex-middle"
                  style={{ height: '72px', listStyleType: 'none' }}
                >
                  <li
                    className={(props.activeNav === 'Tokens') ? activeNavClass : navClass}
                  >
                    <Link
                      to="/tokens/color"
                      className='td-none c-inherit px-8 py-6'>
                      Tokens
                    </Link>
                  </li>
                  <li
                    className={(props.activeNav === 'Utilities') ? activeNavClass : navClass}
                  >
                    <Link
                      to="/utilities/background"
                      className='td-none c-inherit px-8 py-6'>
                      Utilities
                    </Link>
                  </li>
                  <li
                    className={(props.activeNav === 'Components') ? activeNavClass : navClass}
                  >
                    <Link
                      to="/components/badge"
                      className='td-none c-inherit px-8 py-6'>
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
