import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./crumbs.scss";

const Crumbs = props => {
    const {className, label, url,active, children} = props

    const labelClass = classNames({
        'c-grey-50': active,
        'c-grey-60': !active
    },
        'd-inline-block',
        'py-16',
        'fs-body',
        'my-16',
        'td-none'
    );
    
    return (
        <li className="link"><a href={props.url} className={labelClass}>{props.label}</a></li>
    )
}
Crumbs.propTypes = {
    className: PropTypes.string,
    active: PropTypes.bool,
    label: PropTypes.string,
    url: PropTypes.node.isRequired
  };

export default React.memo(Crumbs);