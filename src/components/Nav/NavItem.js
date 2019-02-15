import React from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames";

const NavItem = (props) => {
  const itemClass = classNames(
    'flex flex-between px-20 pb-16 c-pointer',
    {
      'bb': props.active,
      'bc-blue': props.active,
      'bw-4': props.active,
      'c-blue': props.active,
      'fw-600': props.active,
    }
  )

  return (
    <li
      className={itemClass}
    >
      {props.children}
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

NavItem.defaultProps = {
  className: '',
  active: false,
  onClick: () => { }
}

NavItem.displayName = 'NavItem'

export default NavItem