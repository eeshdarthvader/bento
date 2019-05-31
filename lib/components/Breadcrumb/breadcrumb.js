import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {Crumbs} from "./";
import { className } from "postcss-selector-parser";

const Breadcrumb = props => {
    const breadcrumbClass = classNames(
        className,
        'flex',
        'flex-middle',
        'p-8',
        'ls-reset',
        'fs-body'
    );

    return (
        <ul className={breadcrumbClass}>
            {props.children}
        </ul>
    )
}

Breadcrumb.propTypes = {
    className: PropTypes.node.isRequired
  };

export default React.memo(Breadcrumb);