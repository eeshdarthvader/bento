import React from 'react';
import PropTypes from 'prop-types'

const NavList = (props) => {
  return (
    <ul className="flex bb bc-grey-10">
      {React.Children.map(props.children, child => {
        return (
          <div>
            {React.cloneElement(child)}
          </div>
        )
      })}
    </ul>
  );
}

NavList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

NavList.defaultProps = {
  onClick: () => { }
}

NavList.displayName = 'NavList'

export default NavList