import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./crumbs.scss";

const Crumbs = props => {

    const labelClass = classNames(
        (props.url === undefined || props.url === '') ? 'c-grey-40' : 'c-grey-60',
        'd-inline-block',
        'py-16',
        'fs-body',
        'my-16',
        'td-none'
    );


        if(props.url === undefined || props.url === ''){
            return (
                <li className="link"><span className={labelClass}>{props.label}</span></li>
            )
        }
        else {
            return (
                <li className="link"><a href={props.url} className={labelClass}>{props.label}</a></li>
            )
        }


}
Crumbs.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string
  };
Crumbs.defaultProps = {
    className: '',
    label: 'Home',
    url: ''
}

Crumbs.displayName = 'Crumbs'

export default Crumbs;