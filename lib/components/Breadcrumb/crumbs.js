import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./crumbs.scss";

const Crumbs = props => {
    const {className, label, url, children} = props

    const labelClass = classNames(
        props.url == undefined ? 'c-grey-40' : 'c-grey-60',
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
    url: PropTypes.string
  };

export default React.memo(Crumbs);